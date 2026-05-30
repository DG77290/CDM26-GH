const crypto = require("node:crypto");
const fsp = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const url = require("node:url");

const ROOT = __dirname;
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(ROOT, "data"));
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.jsonl");
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const PORT = Number(process.env.PORT || 4175);
const HOST = process.env.HOST || "0.0.0.0";
const PUBLIC_ORIGIN = (process.env.PUBLIC_ORIGIN || "").replace(/\/+$/, "");
const HTTPS_REQUIRED = process.env.HTTPS_REQUIRED === "true";
const TRUST_PROXY = process.env.TRUST_PROXY !== "false";
const STORE_REMOTE_ADDRESS = process.env.STORE_REMOTE_ADDRESS === "true";
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60_000);
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 20);
const ADMIN_TOKEN = resolveAdminToken();
const submissionHits = new Map();

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const SECURITY_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'self'",
    "connect-src 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "img-src 'self' data:",
    "script-src 'self'",
    "style-src 'self'"
  ].join("; "),
  "Cross-Origin-Opener-Policy": "same-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff"
};

function resolveAdminToken() {
  const token = (process.env.ADMIN_TOKEN || "").trim();
  if (token.length >= 24) return token;

  if (IS_PRODUCTION) {
    console.error("ADMIN_TOKEN doit être défini en production avec au moins 24 caractères.");
    process.exit(1);
  }

  const generated = crypto.randomBytes(24).toString("hex");
  console.warn("ADMIN_TOKEN absent : jeton temporaire généré pour ce lancement local.");
  return generated;
}

function withSecurityHeaders(headers = {}) {
  const securityHeaders = { ...SECURITY_HEADERS };
  if (HTTPS_REQUIRED || IS_PRODUCTION) {
    securityHeaders["Strict-Transport-Security"] = "max-age=15552000; includeSubDomains";
  }
  return { ...securityHeaders, ...headers };
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, withSecurityHeaders(headers));
  res.end(body);
}

function sendJson(res, status, payload) {
  send(res, status, JSON.stringify(payload), {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
}

async function readRequestBody(req, limit = 1_000_000) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > limit) throw new Error("Payload too large");
  }
  return body;
}

function getClientAddress(req) {
  const forwarded = TRUST_PROXY ? String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() : "";
  return forwarded || req.socket.remoteAddress || "unknown";
}

function isRateLimited(key) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recentHits = (submissionHits.get(key) || []).filter((timestamp) => timestamp > windowStart);

  if (recentHits.length >= RATE_LIMIT_MAX) {
    submissionHits.set(key, recentHits);
    return true;
  }

  recentHits.push(now);
  submissionHits.set(key, recentHits);

  if (submissionHits.size > 5_000) {
    for (const [client, timestamps] of submissionHits) {
      const active = timestamps.filter((timestamp) => timestamp > windowStart);
      if (active.length) submissionHits.set(client, active);
      else submissionHits.delete(client);
    }
  }

  return false;
}

function cleanString(value, maxLength = 500) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizePrediction(prediction) {
  const item = prediction && typeof prediction === "object" ? prediction : {};
  return {
    matchId: Number.isFinite(Number(item.matchId)) ? Number(item.matchId) : "",
    phase: cleanString(item.phase, 40),
    group: cleanString(item.group, 4),
    utc: cleanString(item.utc, 40),
    parisTime: cleanString(item.parisTime, 80),
    city: cleanString(item.city, 80),
    stadium: cleanString(item.stadium, 120),
    homeTeam: cleanString(item.homeTeam, 80),
    awayTeam: cleanString(item.awayTeam, 80),
    predictedHomeScore: cleanString(item.predictedHomeScore, 8),
    predictedAwayScore: cleanString(item.predictedAwayScore, 8),
    predictedOutcome: cleanString(item.predictedOutcome, 80)
  };
}

function normalizeSubmissionPayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Invalid payload");
  }

  const participant = payload.participant && typeof payload.participant === "object" ? payload.participant : {};
  const estimation = payload.estimation && typeof payload.estimation === "object" ? payload.estimation : {};
  const champion = payload.champion && typeof payload.champion === "object" ? payload.champion : null;
  const estimationConsent = estimation.consent === true;

  return {
    exportedAt: cleanString(payload.exportedAt, 40),
    source: cleanString(payload.source, 120),
    participant: {
      name: cleanString(participant.name, 120),
      email: cleanString(participant.email, 254)
    },
    estimation: estimationConsent
      ? {
          name: cleanString(estimation.name, 120),
          phone: cleanString(estimation.phone, 40),
          email: cleanString(estimation.email, 254),
          city: cleanString(estimation.city, 100),
          propertyType: cleanString(estimation.propertyType, 80),
          surface: cleanString(estimation.surface, 20),
          projectTiming: cleanString(estimation.projectTiming, 80),
          message: cleanString(estimation.message, 1_000),
          consent: true,
          submittedAt: cleanString(estimation.submittedAt, 40)
        }
      : {
          name: "",
          phone: "",
          email: "",
          city: "",
          propertyType: "",
          surface: "",
          projectTiming: "",
          message: "",
          consent: false,
          submittedAt: ""
        },
    champion: champion
      ? {
          id: cleanString(champion.id, 80),
          code: cleanString(champion.code, 12),
          name: cleanString(champion.name, 80),
          group: cleanString(champion.group, 4)
        }
      : null,
    predictions: Array.isArray(payload.predictions) ? payload.predictions.slice(0, 120).map(normalizePrediction) : []
  };
}

async function handleSubmission(req, res) {
  const clientAddress = getClientAddress(req);
  if (isRateLimited(clientAddress)) {
    sendJson(res, 429, { ok: false, error: "Trop de demandes. Merci de réessayer dans quelques instants." });
    return;
  }

  try {
    const raw = await readRequestBody(req);
    const payload = normalizeSubmissionPayload(JSON.parse(raw));
    const record = {
      id: crypto.randomUUID(),
      savedAt: new Date().toISOString(),
      remoteAddress: STORE_REMOTE_ADDRESS ? clientAddress : "",
      payload
    };

    await fsp.mkdir(DATA_DIR, { recursive: true });
    await fsp.appendFile(SUBMISSIONS_FILE, `${JSON.stringify(record)}\n`, "utf8");
    sendJson(res, 201, { ok: true, id: record.id, savedAt: record.savedAt });
  } catch (error) {
    sendJson(res, 400, { ok: false, error: "Impossible d'enregistrer la demande." });
  }
}

async function readSubmissions() {
  try {
    const content = await fsp.readFile(SUBMISSIONS_FILE, "utf8");
    return content
      .split("\n")
      .filter(Boolean)
      .flatMap((line) => {
        try {
          return [JSON.parse(line)];
        } catch {
          return [];
        }
      });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function submissionsToCsv(records) {
  const rows = [
    [
      "id",
      "recu_le",
      "participant_nom",
      "participant_email",
      "champion",
      "estimation_nom",
      "estimation_telephone",
      "estimation_email",
      "estimation_ville",
      "estimation_type_bien",
      "estimation_surface",
      "estimation_echeance",
      "estimation_message",
      "estimation_consentement",
      "estimation_enregistree_le",
      "match_id",
      "phase",
      "groupe",
      "date_paris",
      "ville",
      "stade",
      "equipe_a",
      "equipe_b",
      "score_a",
      "score_b",
      "resultat"
    ]
  ];

  records.forEach((record) => {
    const payload = record.payload || {};
    const participant = payload.participant || {};
    const estimation = payload.estimation || {};
    const champion = payload.champion || {};
    const predictions = Array.isArray(payload.predictions) ? payload.predictions : [];
    const rowsForRecord = predictions.length ? predictions : [{}];

    rowsForRecord.forEach((prediction) => {
      rows.push([
        record.id,
        record.savedAt,
        participant.name,
        participant.email,
        champion.name,
        estimation.name,
        estimation.phone,
        estimation.email,
        estimation.city,
        estimation.propertyType,
        estimation.surface,
        estimation.projectTiming,
        estimation.message,
        estimation.consent ? "oui" : "non",
        estimation.submittedAt,
        prediction.matchId,
        prediction.phase,
        prediction.group,
        prediction.parisTime,
        prediction.city,
        prediction.stadium,
        prediction.homeTeam,
        prediction.awayTeam,
        prediction.predictedHomeScore,
        prediction.predictedAwayScore,
        prediction.predictedOutcome
      ]);
    });
  });

  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

async function handleAdminExport(req, res, parsedUrl) {
  const authorization = String(req.headers.authorization || "");
  const bearerToken = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const queryToken = String(parsedUrl.query.token || "");

  if (queryToken !== ADMIN_TOKEN && bearerToken !== ADMIN_TOKEN) {
    sendJson(res, 403, { ok: false, error: "Accès refusé." });
    return;
  }
  const records = await readSubmissions();
  send(res, 200, submissionsToCsv(records), {
    "Content-Type": "text/csv; charset=utf-8",
    "Content-Disposition": "attachment; filename=\"soumissions-guy-hoquet-mondial-2026.csv\"",
    "Cache-Control": "no-store"
  });
}

async function serveStatic(req, res, pathname) {
  let cleanPath;
  try {
    cleanPath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  } catch {
    send(res, 400, "Bad request", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }
  const filePath = path.normalize(path.join(ROOT, cleanPath));
  const relativePath = path.relative(ROOT, filePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    send(res, 403, "Forbidden", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  try {
    const stat = await fsp.stat(filePath);
    if (!stat.isFile()) {
      send(res, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, await fsp.readFile(filePath), {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
  } catch {
    send(res, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
  }
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (HTTPS_REQUIRED && TRUST_PROXY && req.headers["x-forwarded-proto"] === "http" && req.headers.host) {
    send(res, 308, "", { Location: `https://${req.headers.host}${req.url}` });
    return;
  }

  if (req.method === "GET" && parsedUrl.pathname === "/api/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method === "POST" && parsedUrl.pathname === "/api/submissions") {
    await handleSubmission(req, res);
    return;
  }

  if (req.method === "GET" && parsedUrl.pathname === "/api/submissions.csv") {
    await handleAdminExport(req, res, parsedUrl);
    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    await serveStatic(req, res, parsedUrl.pathname);
    return;
  }

  sendJson(res, 405, { ok: false, error: "Méthode non autorisée." });
});

fsp.mkdir(DATA_DIR, { recursive: true })
  .then(() => {
    server.listen(PORT, HOST, () => {
      const localUrl = `http://localhost:${PORT}/`;
      const publicUrl = PUBLIC_ORIGIN ? `${PUBLIC_ORIGIN}/` : localUrl;
      const adminUrl = `${publicUrl}api/submissions.csv?token=${ADMIN_TOKEN}`;
      console.log(`Application disponible: ${publicUrl}`);
      console.log(`Dossier de données: ${DATA_DIR}`);
      console.log(`Export administrateur: ${adminUrl}`);
    });
  })
  .catch((error) => {
    console.error(`Impossible de préparer le dossier de données: ${error.message}`);
    process.exit(1);
  });

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
