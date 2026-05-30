const TEAMS = [
  { id: "mexique", code: "MEX", name: "Mexique", group: "A", flag: "🇲🇽" },
  { id: "afrique-sud", code: "RSA", name: "Afrique du Sud", group: "A", flag: "🇿🇦" },
  { id: "coree-sud", code: "KOR", name: "Corée du Sud", group: "A", flag: "🇰🇷" },
  { id: "tchequie", code: "CZE", name: "Tchéquie", group: "A", flag: "🇨🇿" },
  { id: "canada", code: "CAN", name: "Canada", group: "B", flag: "🇨🇦" },
  { id: "bosnie-herzegovine", code: "BIH", name: "Bosnie-Herzégovine", group: "B", flag: "🇧🇦" },
  { id: "qatar", code: "QAT", name: "Qatar", group: "B", flag: "🇶🇦" },
  { id: "suisse", code: "SUI", name: "Suisse", group: "B", flag: "🇨🇭" },
  { id: "bresil", code: "BRA", name: "Brésil", group: "C", flag: "🇧🇷" },
  { id: "maroc", code: "MAR", name: "Maroc", group: "C", flag: "🇲🇦" },
  { id: "haiti", code: "HAI", name: "Haïti", group: "C", flag: "🇭🇹" },
  { id: "ecosse", code: "SCO", name: "Écosse", group: "C", flag: "🏴" },
  { id: "etats-unis", code: "USA", name: "États-Unis", group: "D", flag: "🇺🇸" },
  { id: "paraguay", code: "PAR", name: "Paraguay", group: "D", flag: "🇵🇾" },
  { id: "australie", code: "AUS", name: "Australie", group: "D", flag: "🇦🇺" },
  { id: "turquie", code: "TUR", name: "Turquie", group: "D", flag: "🇹🇷" },
  { id: "allemagne", code: "GER", name: "Allemagne", group: "E", flag: "🇩🇪" },
  { id: "curacao", code: "CUW", name: "Curaçao", group: "E", flag: "🇨🇼" },
  { id: "cote-ivoire", code: "CIV", name: "Côte d'Ivoire", group: "E", flag: "🇨🇮" },
  { id: "equateur", code: "ECU", name: "Équateur", group: "E", flag: "🇪🇨" },
  { id: "pays-bas", code: "NED", name: "Pays-Bas", group: "F", flag: "🇳🇱" },
  { id: "japon", code: "JPN", name: "Japon", group: "F", flag: "🇯🇵" },
  { id: "tunisie", code: "TUN", name: "Tunisie", group: "F", flag: "🇹🇳" },
  { id: "suede", code: "SWE", name: "Suède", group: "F", flag: "🇸🇪" },
  { id: "belgique", code: "BEL", name: "Belgique", group: "G", flag: "🇧🇪" },
  { id: "egypte", code: "EGY", name: "Égypte", group: "G", flag: "🇪🇬" },
  { id: "iran", code: "IRN", name: "Iran", group: "G", flag: "🇮🇷" },
  { id: "nouvelle-zelande", code: "NZL", name: "Nouvelle-Zélande", group: "G", flag: "🇳🇿" },
  { id: "espagne", code: "ESP", name: "Espagne", group: "H", flag: "🇪🇸" },
  { id: "cap-vert", code: "CPV", name: "Cap-Vert", group: "H", flag: "🇨🇻" },
  { id: "arabie-saoudite", code: "KSA", name: "Arabie saoudite", group: "H", flag: "🇸🇦" },
  { id: "uruguay", code: "URU", name: "Uruguay", group: "H", flag: "🇺🇾" },
  { id: "france", code: "FRA", name: "France", group: "I", flag: "🇫🇷" },
  { id: "senegal", code: "SEN", name: "Sénégal", group: "I", flag: "🇸🇳" },
  { id: "norvege", code: "NOR", name: "Norvège", group: "I", flag: "🇳🇴" },
  { id: "irak", code: "IRQ", name: "Irak", group: "I", flag: "🇮🇶" },
  { id: "argentine", code: "ARG", name: "Argentine", group: "J", flag: "🇦🇷" },
  { id: "algerie", code: "ALG", name: "Algérie", group: "J", flag: "🇩🇿" },
  { id: "autriche", code: "AUT", name: "Autriche", group: "J", flag: "🇦🇹" },
  { id: "jordanie", code: "JOR", name: "Jordanie", group: "J", flag: "🇯🇴" },
  { id: "portugal", code: "POR", name: "Portugal", group: "K", flag: "🇵🇹" },
  { id: "rd-congo", code: "COD", name: "RD Congo", group: "K", flag: "🇨🇩" },
  { id: "ouzbekistan", code: "UZB", name: "Ouzbékistan", group: "K", flag: "🇺🇿" },
  { id: "colombie", code: "COL", name: "Colombie", group: "K", flag: "🇨🇴" },
  { id: "angleterre", code: "ENG", name: "Angleterre", group: "L", flag: "🏴" },
  { id: "croatie", code: "CRO", name: "Croatie", group: "L", flag: "🇭🇷" },
  { id: "ghana", code: "GHA", name: "Ghana", group: "L", flag: "🇬🇭" },
  { id: "panama", code: "PAN", name: "Panama", group: "L", flag: "🇵🇦" }
];

const STADIUMS = {
  "Arlington": "AT&T Stadium",
  "Atlanta": "Mercedes-Benz Stadium",
  "Inglewood": "SoFi Stadium",
  "East Rutherford": "MetLife Stadium",
  "Vancouver": "BC Place",
  "Foxborough": "Gillette Stadium",
  "Houston": "NRG Stadium",
  "Miami Gardens": "Hard Rock Stadium",
  "Toronto": "BMO Field",
  "Kansas City": "Arrowhead Stadium",
  "Philadelphia": "Lincoln Financial Field",
  "Santa Clara": "Levi's Stadium",
  "Seattle": "Lumen Field",
  "Mexico City": "Estadio Azteca",
  "Guadalajara": "Estadio Akron",
  "Monterrey": "Estadio BBVA"
};

const MATCHES = [
  { id: 1, phase: "Groupes", group: "A", utc: "2026-06-11T19:00:00Z", home: "mexique", away: "afrique-sud", city: "Mexico City" },
  { id: 2, phase: "Groupes", group: "A", utc: "2026-06-12T02:00:00Z", home: "coree-sud", away: "tchequie", city: "Guadalajara" },
  { id: 3, phase: "Groupes", group: "B", utc: "2026-06-12T19:00:00Z", home: "canada", away: "bosnie-herzegovine", city: "Toronto" },
  { id: 4, phase: "Groupes", group: "D", utc: "2026-06-13T01:00:00Z", home: "etats-unis", away: "paraguay", city: "Inglewood" },
  { id: 5, phase: "Groupes", group: "B", utc: "2026-06-13T19:00:00Z", home: "qatar", away: "suisse", city: "Santa Clara" },
  { id: 6, phase: "Groupes", group: "C", utc: "2026-06-13T22:00:00Z", home: "bresil", away: "maroc", city: "East Rutherford" },
  { id: 7, phase: "Groupes", group: "C", utc: "2026-06-14T01:00:00Z", home: "haiti", away: "ecosse", city: "Foxborough" },
  { id: 8, phase: "Groupes", group: "D", utc: "2026-06-14T16:00:00Z", home: "australie", away: "turquie", city: "Vancouver" },
  { id: 9, phase: "Groupes", group: "E", utc: "2026-06-14T17:00:00Z", home: "allemagne", away: "curacao", city: "Houston" },
  { id: 10, phase: "Groupes", group: "F", utc: "2026-06-14T20:00:00Z", home: "pays-bas", away: "japon", city: "Arlington" },
  { id: 11, phase: "Groupes", group: "E", utc: "2026-06-14T23:00:00Z", home: "cote-ivoire", away: "equateur", city: "Philadelphia" },
  { id: 12, phase: "Groupes", group: "F", utc: "2026-06-15T02:00:00Z", home: "suede", away: "tunisie", city: "Monterrey" },
  { id: 13, phase: "Groupes", group: "H", utc: "2026-06-15T16:00:00Z", home: "espagne", away: "cap-vert", city: "Atlanta" },
  { id: 14, phase: "Groupes", group: "G", utc: "2026-06-15T19:00:00Z", home: "belgique", away: "egypte", city: "Seattle" },
  { id: 15, phase: "Groupes", group: "H", utc: "2026-06-15T22:00:00Z", home: "arabie-saoudite", away: "uruguay", city: "Miami Gardens" },
  { id: 16, phase: "Groupes", group: "G", utc: "2026-06-16T01:00:00Z", home: "iran", away: "nouvelle-zelande", city: "Inglewood" },
  { id: 17, phase: "Groupes", group: "I", utc: "2026-06-16T19:00:00Z", home: "france", away: "senegal", city: "East Rutherford" },
  { id: 18, phase: "Groupes", group: "I", utc: "2026-06-16T22:00:00Z", home: "irak", away: "norvege", city: "Foxborough" },
  { id: 19, phase: "Groupes", group: "J", utc: "2026-06-17T01:00:00Z", home: "argentine", away: "algerie", city: "Kansas City" },
  { id: 20, phase: "Groupes", group: "J", utc: "2026-06-17T04:00:00Z", home: "autriche", away: "jordanie", city: "Santa Clara" },
  { id: 21, phase: "Groupes", group: "K", utc: "2026-06-17T17:00:00Z", home: "portugal", away: "rd-congo", city: "Houston" },
  { id: 22, phase: "Groupes", group: "L", utc: "2026-06-17T20:00:00Z", home: "angleterre", away: "croatie", city: "Arlington" },
  { id: 23, phase: "Groupes", group: "L", utc: "2026-06-17T23:00:00Z", home: "ghana", away: "panama", city: "Toronto" },
  { id: 24, phase: "Groupes", group: "K", utc: "2026-06-18T02:00:00Z", home: "ouzbekistan", away: "colombie", city: "Mexico City" },
  { id: 25, phase: "Groupes", group: "A", utc: "2026-06-18T16:00:00Z", home: "tchequie", away: "afrique-sud", city: "Atlanta" },
  { id: 26, phase: "Groupes", group: "B", utc: "2026-06-18T19:00:00Z", home: "suisse", away: "bosnie-herzegovine", city: "Inglewood" },
  { id: 27, phase: "Groupes", group: "B", utc: "2026-06-18T22:00:00Z", home: "canada", away: "qatar", city: "Vancouver" },
  { id: 28, phase: "Groupes", group: "A", utc: "2026-06-19T01:00:00Z", home: "mexique", away: "coree-sud", city: "Guadalajara" },
  { id: 29, phase: "Groupes", group: "D", utc: "2026-06-19T19:00:00Z", home: "etats-unis", away: "australie", city: "Seattle" },
  { id: 30, phase: "Groupes", group: "C", utc: "2026-06-19T22:00:00Z", home: "ecosse", away: "maroc", city: "Foxborough" },
  { id: 31, phase: "Groupes", group: "C", utc: "2026-06-20T00:30:00Z", home: "bresil", away: "haiti", city: "Philadelphia" },
  { id: 32, phase: "Groupes", group: "D", utc: "2026-06-20T03:00:00Z", home: "turquie", away: "paraguay", city: "Santa Clara" },
  { id: 33, phase: "Groupes", group: "F", utc: "2026-06-20T17:00:00Z", home: "pays-bas", away: "suede", city: "Houston" },
  { id: 34, phase: "Groupes", group: "E", utc: "2026-06-20T20:00:00Z", home: "allemagne", away: "cote-ivoire", city: "Toronto" },
  { id: 35, phase: "Groupes", group: "E", utc: "2026-06-21T00:00:00Z", home: "equateur", away: "curacao", city: "Kansas City" },
  { id: 36, phase: "Groupes", group: "F", utc: "2026-06-21T04:00:00Z", home: "tunisie", away: "japon", city: "Monterrey" },
  { id: 37, phase: "Groupes", group: "H", utc: "2026-06-21T16:00:00Z", home: "espagne", away: "arabie-saoudite", city: "Atlanta" },
  { id: 38, phase: "Groupes", group: "G", utc: "2026-06-21T19:00:00Z", home: "belgique", away: "iran", city: "Inglewood" },
  { id: 39, phase: "Groupes", group: "H", utc: "2026-06-21T22:00:00Z", home: "uruguay", away: "cap-vert", city: "Miami Gardens" },
  { id: 40, phase: "Groupes", group: "G", utc: "2026-06-22T01:00:00Z", home: "nouvelle-zelande", away: "egypte", city: "Vancouver" },
  { id: 41, phase: "Groupes", group: "J", utc: "2026-06-22T17:00:00Z", home: "argentine", away: "autriche", city: "Arlington" },
  { id: 42, phase: "Groupes", group: "I", utc: "2026-06-22T21:00:00Z", home: "france", away: "irak", city: "Philadelphia" },
  { id: 43, phase: "Groupes", group: "I", utc: "2026-06-23T00:00:00Z", home: "norvege", away: "senegal", city: "East Rutherford" },
  { id: 44, phase: "Groupes", group: "J", utc: "2026-06-23T03:00:00Z", home: "jordanie", away: "algerie", city: "Santa Clara" },
  { id: 45, phase: "Groupes", group: "K", utc: "2026-06-23T17:00:00Z", home: "portugal", away: "ouzbekistan", city: "Houston" },
  { id: 46, phase: "Groupes", group: "L", utc: "2026-06-23T20:00:00Z", home: "angleterre", away: "ghana", city: "Foxborough" },
  { id: 47, phase: "Groupes", group: "L", utc: "2026-06-23T23:00:00Z", home: "panama", away: "croatie", city: "Toronto" },
  { id: 48, phase: "Groupes", group: "K", utc: "2026-06-24T02:00:00Z", home: "colombie", away: "rd-congo", city: "Guadalajara" },
  { id: 49, phase: "Groupes", group: "B", utc: "2026-06-24T19:00:00Z", home: "suisse", away: "canada", city: "Vancouver" },
  { id: 50, phase: "Groupes", group: "B", utc: "2026-06-24T19:00:00Z", home: "bosnie-herzegovine", away: "qatar", city: "Seattle" },
  { id: 51, phase: "Groupes", group: "C", utc: "2026-06-24T22:00:00Z", home: "ecosse", away: "bresil", city: "Miami Gardens" },
  { id: 52, phase: "Groupes", group: "C", utc: "2026-06-24T22:00:00Z", home: "maroc", away: "haiti", city: "Atlanta" },
  { id: 53, phase: "Groupes", group: "A", utc: "2026-06-25T01:00:00Z", home: "tchequie", away: "mexique", city: "Mexico City" },
  { id: 54, phase: "Groupes", group: "A", utc: "2026-06-25T01:00:00Z", home: "afrique-sud", away: "coree-sud", city: "Monterrey" },
  { id: 55, phase: "Groupes", group: "E", utc: "2026-06-25T20:00:00Z", home: "curacao", away: "cote-ivoire", city: "Philadelphia" },
  { id: 56, phase: "Groupes", group: "E", utc: "2026-06-25T20:00:00Z", home: "equateur", away: "allemagne", city: "East Rutherford" },
  { id: 57, phase: "Groupes", group: "F", utc: "2026-06-25T23:00:00Z", home: "japon", away: "suede", city: "Arlington" },
  { id: 58, phase: "Groupes", group: "F", utc: "2026-06-25T23:00:00Z", home: "tunisie", away: "pays-bas", city: "Kansas City" },
  { id: 59, phase: "Groupes", group: "D", utc: "2026-06-26T02:00:00Z", home: "turquie", away: "etats-unis", city: "Inglewood" },
  { id: 60, phase: "Groupes", group: "D", utc: "2026-06-26T02:00:00Z", home: "paraguay", away: "australie", city: "Santa Clara" },
  { id: 61, phase: "Groupes", group: "I", utc: "2026-06-26T19:00:00Z", home: "norvege", away: "france", city: "Foxborough" },
  { id: 62, phase: "Groupes", group: "I", utc: "2026-06-26T19:00:00Z", home: "senegal", away: "irak", city: "Toronto" },
  { id: 63, phase: "Groupes", group: "H", utc: "2026-06-27T00:00:00Z", home: "cap-vert", away: "arabie-saoudite", city: "Houston" },
  { id: 64, phase: "Groupes", group: "H", utc: "2026-06-27T00:00:00Z", home: "uruguay", away: "espagne", city: "Guadalajara" },
  { id: 65, phase: "Groupes", group: "G", utc: "2026-06-27T03:00:00Z", home: "egypte", away: "iran", city: "Seattle" },
  { id: 66, phase: "Groupes", group: "G", utc: "2026-06-27T03:00:00Z", home: "nouvelle-zelande", away: "belgique", city: "Vancouver" },
  { id: 67, phase: "Groupes", group: "L", utc: "2026-06-27T21:00:00Z", home: "panama", away: "angleterre", city: "East Rutherford" },
  { id: 68, phase: "Groupes", group: "L", utc: "2026-06-27T21:00:00Z", home: "croatie", away: "ghana", city: "Philadelphia" },
  { id: 69, phase: "Groupes", group: "K", utc: "2026-06-27T23:30:00Z", home: "colombie", away: "portugal", city: "Miami Gardens" },
  { id: 70, phase: "Groupes", group: "K", utc: "2026-06-27T23:30:00Z", home: "rd-congo", away: "ouzbekistan", city: "Atlanta" },
  { id: 71, phase: "Groupes", group: "J", utc: "2026-06-28T02:00:00Z", home: "algerie", away: "autriche", city: "Kansas City" },
  { id: 72, phase: "Groupes", group: "J", utc: "2026-06-28T02:00:00Z", home: "jordanie", away: "argentine", city: "Arlington" },
  { id: 73, phase: "32es", utc: "2026-06-28T19:00:00Z", city: "Inglewood" },
  { id: 74, phase: "32es", utc: "2026-06-29T17:00:00Z", city: "Houston" },
  { id: 75, phase: "32es", utc: "2026-06-29T20:30:00Z", city: "Foxborough" },
  { id: 76, phase: "32es", utc: "2026-06-30T01:00:00Z", city: "Monterrey" },
  { id: 77, phase: "32es", utc: "2026-06-30T17:00:00Z", city: "Arlington" },
  { id: 78, phase: "32es", utc: "2026-06-30T21:00:00Z", city: "East Rutherford" },
  { id: 79, phase: "32es", utc: "2026-07-01T01:00:00Z", city: "Mexico City" },
  { id: 80, phase: "32es", utc: "2026-07-01T16:00:00Z", city: "Atlanta" },
  { id: 81, phase: "32es", utc: "2026-07-01T20:00:00Z", city: "Seattle" },
  { id: 82, phase: "32es", utc: "2026-07-02T00:00:00Z", city: "Santa Clara" },
  { id: 83, phase: "32es", utc: "2026-07-02T19:00:00Z", city: "Inglewood" },
  { id: 84, phase: "32es", utc: "2026-07-02T23:00:00Z", city: "Toronto" },
  { id: 85, phase: "32es", utc: "2026-07-03T03:00:00Z", city: "Vancouver" },
  { id: 86, phase: "32es", utc: "2026-07-03T18:00:00Z", city: "Arlington" },
  { id: 87, phase: "32es", utc: "2026-07-03T22:00:00Z", city: "Miami Gardens" },
  { id: 88, phase: "32es", utc: "2026-07-04T01:30:00Z", city: "Kansas City" },
  { id: 89, phase: "16es", utc: "2026-07-04T17:00:00Z", city: "Houston" },
  { id: 90, phase: "16es", utc: "2026-07-04T21:00:00Z", city: "Philadelphia" },
  { id: 91, phase: "16es", utc: "2026-07-05T20:00:00Z", city: "East Rutherford" },
  { id: 92, phase: "16es", utc: "2026-07-06T00:00:00Z", city: "Mexico City" },
  { id: 93, phase: "16es", utc: "2026-07-06T19:00:00Z", city: "Arlington" },
  { id: 94, phase: "16es", utc: "2026-07-07T00:00:00Z", city: "Seattle" },
  { id: 95, phase: "16es", utc: "2026-07-07T16:00:00Z", city: "Atlanta" },
  { id: 96, phase: "16es", utc: "2026-07-07T20:00:00Z", city: "Vancouver" },
  { id: 97, phase: "Quarts", utc: "2026-07-09T20:00:00Z", city: "Foxborough" },
  { id: 98, phase: "Quarts", utc: "2026-07-10T19:00:00Z", city: "Inglewood" },
  { id: 99, phase: "Quarts", utc: "2026-07-11T21:00:00Z", city: "Miami Gardens" },
  { id: 100, phase: "Quarts", utc: "2026-07-12T01:00:00Z", city: "Kansas City" },
  { id: 101, phase: "Demi-finales", utc: "2026-07-14T19:00:00Z", city: "Arlington" },
  { id: 102, phase: "Demi-finales", utc: "2026-07-15T19:00:00Z", city: "Atlanta" },
  { id: 103, phase: "3e place", utc: "2026-07-18T21:00:00Z", city: "Miami Gardens" },
  { id: 104, phase: "Finale", utc: "2026-07-19T19:00:00Z", city: "East Rutherford" }
];

const STORAGE_KEY = "pronostics-mondial-2026-v3";
const TEAM_BY_ID = Object.fromEntries(TEAMS.map((team) => [team.id, team]));
const LEAD_FIELDS = ["name", "phone", "email", "city", "propertyType", "surface", "projectTiming", "message"];

const state = {
  view: "calendar",
  participant: { name: "", email: "" },
  champion: "",
  lead: {
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
  predictions: {},
  lastSubmittedAt: "",
  filters: { phase: "all", group: "all", team: "all", query: "" }
};

const $ = (selector) => document.querySelector(selector);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    state.participant = { ...state.participant, ...(saved.participant || {}) };
    state.champion = saved.champion || "";
    state.lead = { ...state.lead, ...(saved.lead || {}) };
    state.predictions = saved.predictions || {};
    state.lastSubmittedAt = saved.lastSubmittedAt || "";
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      participant: state.participant,
      champion: state.champion,
      lead: state.lead,
      predictions: state.predictions,
      lastSubmittedAt: state.lastSubmittedAt
    })
  );
}

function fillSelects() {
  $("#championPick").innerHTML = [
    `<option value="">À choisir</option>`,
    ...TEAMS.map((team) => `<option value="${team.id}">${team.flag} ${team.name}</option>`)
  ].join("");

  $("#groupFilter").innerHTML = [
    `<option value="all">Tous</option>`,
    ..."ABCDEFGHIJKL".split("").map((group) => `<option value="${group}">Groupe ${group}</option>`)
  ].join("");

  $("#teamFilter").innerHTML = [
    `<option value="all">Toutes</option>`,
    ...TEAMS.map((team) => `<option value="${team.id}">${team.flag} ${team.name}</option>`)
  ].join("");
}

function syncForm() {
  $("#clientName").value = state.participant.name;
  $("#clientEmail").value = state.participant.email;
  $("#championPick").value = state.champion;
  $("#leadName").value = state.lead.name;
  $("#leadPhone").value = state.lead.phone;
  $("#leadEmail").value = state.lead.email;
  $("#leadCity").value = state.lead.city;
  $("#leadPropertyType").value = state.lead.propertyType;
  $("#leadSurface").value = state.lead.surface;
  $("#leadProjectTiming").value = state.lead.projectTiming;
  $("#leadMessage").value = state.lead.message;
  $("#leadConsent").checked = state.lead.consent;
  $("#phaseFilter").value = state.filters.phase;
  $("#groupFilter").value = state.filters.group;
  $("#teamFilter").value = state.filters.team;
  $("#searchFilter").value = state.filters.query;
  renderLeadStatus();
  renderSubmitStatus();
}

function formatParis(utc, mode = "full") {
  const date = new Date(utc);
  const options = {
    timeZone: "Europe/Paris",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (mode === "date") {
    delete options.hour;
    delete options.minute;
    options.weekday = "short";
  }
  return new Intl.DateTimeFormat("fr-FR", options).format(date).replace(",", "");
}

function getTeam(id) {
  return id ? TEAM_BY_ID[id] : null;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function teamMarkup(id, align = "") {
  const team = getTeam(id);
  if (!team) {
    return `<span class="team-name ${align}"><span class="flag" aria-hidden="true">?</span><span class="team-label">À déterminer</span></span>`;
  }
  return `
    <span class="team-name ${align}">
      <span class="flag" aria-hidden="true">${team.flag}</span>
      <span class="team-label">${team.name}</span>
    </span>
  `;
}

function predictionFor(matchId) {
  return state.predictions[String(matchId)] || { home: "", away: "" };
}

function isCompletePrediction(prediction) {
  return prediction.home !== "" && prediction.away !== "" && !Number.isNaN(Number(prediction.home)) && !Number.isNaN(Number(prediction.away));
}

function predictedOutcome(match, prediction) {
  if (!isCompletePrediction(prediction)) return "";
  const homeScore = Number(prediction.home);
  const awayScore = Number(prediction.away);
  const home = getTeam(match.home);
  const away = getTeam(match.away);
  if (homeScore === awayScore) return "Match nul";
  return homeScore > awayScore ? `Victoire ${home.name}` : `Victoire ${away.name}`;
}

function applyFilters(matches) {
  const query = state.filters.query.trim().toLowerCase();
  return matches.filter((match) => {
    if (state.filters.phase !== "all" && match.phase !== state.filters.phase) return false;
    if (state.filters.group !== "all" && match.group !== state.filters.group) return false;
    if (state.filters.team !== "all" && match.home !== state.filters.team && match.away !== state.filters.team) return false;
    if (!query) return true;
    const home = getTeam(match.home)?.name || "";
    const away = getTeam(match.away)?.name || "";
    const haystack = `${home} ${away} ${match.city} ${STADIUMS[match.city] || ""} ${match.phase} ${match.group || ""}`.toLowerCase();
    return haystack.includes(query);
  });
}

function renderMetrics() {
  const predictedCount = Object.values(state.predictions).filter(isCompletePrediction).length;
  const knownMatches = MATCHES.filter((match) => match.home && match.away).length;
  const nextMatch = MATCHES.find((match) => new Date(match.utc) > new Date()) || MATCHES[0];
  const champion = getTeam(state.champion);
  const hasLead = hasLeadData();

  $("#metricPredictions").textContent = String(predictedCount);
  $("#metricKnownMatches").textContent = String(knownMatches);
  $("#metricNextMatch").textContent = nextMatch.home ? `${formatParis(nextMatch.utc)} · ${getTeam(nextMatch.home).code}-${getTeam(nextMatch.away).code}` : formatParis(nextMatch.utc);
  $("#metricChampion").textContent = champion ? champion.name : "-";
  $("#metricLead").textContent = state.lead.submittedAt ? "Enregistrée" : hasLead ? "À finaliser" : "À proposer";
}

function hasLeadData() {
  return LEAD_FIELDS.some((field) => String(state.lead[field] || "").trim() !== "") || state.lead.consent;
}

function renderLeadStatus(message) {
  const status = $("#leadStatus");
  if (!status) return;
  if (message) {
    status.textContent = message;
    return;
  }
  if (state.lead.submittedAt) {
    status.textContent = `Demande enregistrée le ${formatParis(state.lead.submittedAt)}.`;
    return;
  }
  status.textContent = hasLeadData() ? "Coordonnées en cours de saisie." : "Aucune demande enregistrée.";
}

function renderSubmitStatus(message) {
  const status = $("#submitStatus");
  if (!status) return;
  if (message) {
    status.textContent = message;
    return;
  }
  status.textContent = state.lastSubmittedAt ? `Transmis le ${formatParis(state.lastSubmittedAt)}.` : "Non transmis.";
}

function renderCalendar() {
  const matches = applyFilters(MATCHES);
  if (!matches.length) {
    $("#viewContent").innerHTML = `<div class="empty-state">Aucun match ne correspond aux filtres.</div>`;
    return;
  }

  $("#viewContent").innerHTML = `
    <div class="section-head">
      <h2>Calendrier officiel</h2>
      <span>${matches.length} match${matches.length > 1 ? "es" : ""}</span>
    </div>
    <div class="match-list">
      ${matches.map(renderMatchCard).join("")}
    </div>
  `;
}

function renderMatchCard(match) {
  const prediction = predictionFor(match.id);
  const knownTeams = Boolean(match.home && match.away);
  const groupBadge = match.group ? `<span class="badge group">Groupe ${match.group}</span>` : "";
  return `
    <article class="match-card ${knownTeams ? "" : "knockout"}">
      <div class="date-block">
        <strong>${formatParis(match.utc)}</strong>
        <span>Heure de Paris</span>
        <div class="badge-row">
          <span class="badge">Match ${match.id}</span>
          <span class="badge">${match.phase}</span>
          ${groupBadge}
        </div>
      </div>
      <div>
        <div class="teams-line">
          ${teamMarkup(match.home)}
          <span class="versus">VS</span>
          ${teamMarkup(match.away, "away")}
        </div>
        <div class="venue">${STADIUMS[match.city] || "Stade à confirmer"} · ${match.city}</div>
      </div>
      <div class="prediction-box">
        ${
          knownTeams
            ? `
              <div class="score-inputs" aria-label="Pronostic match ${match.id}">
                <input type="number" min="0" max="20" inputmode="numeric" value="${prediction.home}" data-match="${match.id}" data-side="home" aria-label="Score ${getTeam(match.home).name}">
                <input type="number" min="0" max="20" inputmode="numeric" value="${prediction.away}" data-match="${match.id}" data-side="away" aria-label="Score ${getTeam(match.away).name}">
              </div>
              <div class="outcome">${predictedOutcome(match, prediction)}</div>
            `
            : `<div class="locked">Ouvert après qualification</div>`
        }
      </div>
    </article>
  `;
}

function renderPredictions() {
  const rows = MATCHES.filter((match) => match.home && match.away)
    .map((match) => ({ match, prediction: predictionFor(match.id) }))
    .filter(({ prediction }) => isCompletePrediction(prediction));

  if (!rows.length) {
    $("#viewContent").innerHTML = `<div class="empty-state">Aucun pronostic saisi pour le moment.</div>`;
    return;
  }

  $("#viewContent").innerHTML = `
    <div class="section-head">
      <h2>Mes pronostics</h2>
      <span>${rows.length} enregistré${rows.length > 1 ? "s" : ""}</span>
    </div>
    <table class="predictions-table">
      <thead>
        <tr>
          <th>Match</th>
          <th>Date Paris</th>
          <th>Affiche</th>
          <th>Score</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(({ match, prediction }) => `
          <tr>
            <td>${match.id}</td>
            <td>${formatParis(match.utc)}</td>
            <td>${getTeam(match.home).name} - ${getTeam(match.away).name}</td>
            <td>${escapeHtml(prediction.home)} - ${escapeHtml(prediction.away)}</td>
            <td>${predictedOutcome(match, prediction)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderRanking() {
  const name = state.participant.name || "Votre client";
  const predictionCount = Object.values(state.predictions).filter(isCompletePrediction).length;
  const champion = getTeam(state.champion)?.name || "-";
  const rows = [
    { name, predictions: predictionCount, champion, status: "À scorer" },
    { name: "L. Martin", predictions: 72, champion: "France", status: "Exemple" },
    { name: "S. Bernard", predictions: 68, champion: "Brésil", status: "Exemple" },
    { name: "A. Dubois", predictions: 54, champion: "Espagne", status: "Exemple" }
  ];

  $("#viewContent").innerHTML = `
    <div class="section-head">
      <h2>Classement</h2>
      <span>Barème prêt</span>
    </div>
    <table class="ranking-table">
      <thead>
        <tr>
          <th>Participant</th>
          <th>Pronostics</th>
          <th>Champion</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td>${escapeHtml(row.name)}</td>
            <td>${row.predictions}</td>
            <td>${escapeHtml(row.champion)}</td>
            <td>${escapeHtml(row.status)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderTeams() {
  const groups = "ABCDEFGHIJKL".split("");
  $("#viewContent").innerHTML = `
    <div class="section-head">
      <h2>Équipes qualifiées</h2>
      <span>12 groupes</span>
    </div>
    <div class="team-grid">
      ${groups.map((group) => `
        <article class="group-card">
          <h3>Groupe ${group}</h3>
          ${TEAMS.filter((team) => team.group === group).map((team) => `
            <div class="team-pill">
              <span class="flag" aria-hidden="true">${team.flag}</span>
              <span>${team.name}</span>
              <span class="badge">${team.code}</span>
            </div>
          `).join("")}
        </article>
      `).join("")}
    </div>
  `;
}

function renderView() {
  document.querySelectorAll(".tab").forEach((tab) => {
    const isActive = tab.dataset.view === state.view;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  renderMetrics();
  if (state.view === "calendar") renderCalendar();
  if (state.view === "predictions") renderPredictions();
  if (state.view === "ranking") renderRanking();
  if (state.view === "teams") renderTeams();
}

function updatePrediction(matchId, side, value) {
  const key = String(matchId);
  const next = { ...predictionFor(key), [side]: value };
  if (next.home === "" && next.away === "") {
    delete state.predictions[key];
  } else {
    state.predictions[key] = next;
  }
  saveState();
  renderMetrics();
  const outcome = document.querySelector(`[data-match="${matchId}"]`)?.closest(".prediction-box")?.querySelector(".outcome");
  const match = MATCHES.find((item) => item.id === Number(matchId));
  if (outcome && match) outcome.textContent = predictedOutcome(match, next);
}

function createExportPayload() {
  const champion = getTeam(state.champion);
  const estimation = state.lead.consent
    ? { ...state.lead }
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
      };

  return {
    exportedAt: new Date().toISOString(),
    source: "Guy Hoquet Mitry-Mory - Pronostics Mondial 2026",
    participant: { ...state.participant },
    estimation,
    champion: champion ? { id: champion.id, code: champion.code, name: champion.name, group: champion.group } : null,
    predictions: MATCHES.map((match) => {
      const home = getTeam(match.home);
      const away = getTeam(match.away);
      const prediction = predictionFor(match.id);
      return {
        matchId: match.id,
        phase: match.phase,
        group: match.group || "",
        utc: match.utc,
        parisTime: formatParis(match.utc),
        city: match.city,
        stadium: STADIUMS[match.city] || "",
        homeTeam: home ? home.name : "",
        awayTeam: away ? away.name : "",
        predictedHomeScore: prediction.home,
        predictedAwayScore: prediction.away,
        predictedOutcome: predictedOutcome(match, prediction)
      };
    })
  };
}

async function sendDataToAgency(successMessage = "Données transmises à l'agence.") {
  renderSubmitStatus("Transmission en cours...");
  try {
    const response = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createExportPayload())
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    state.lastSubmittedAt = result.savedAt || new Date().toISOString();
    saveState();
    renderMetrics();
    renderSubmitStatus(successMessage);
    return true;
  } catch {
    renderSubmitStatus("Non transmis. Données conservées sur cet appareil.");
    return false;
  }
}

function exportCsv() {
  const payload = createExportPayload();
  const rows = [
    [
      "ligne_type",
      "exporte_le",
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
      "date_utc",
      "date_paris",
      "ville",
      "stade",
      "equipe_a",
      "equipe_b",
      "score_a",
      "score_b",
      "resultat"
    ],
    [
      "profil",
      payload.exportedAt,
      payload.participant.name,
      payload.participant.email,
      payload.champion?.name || "",
      payload.estimation.name,
      payload.estimation.phone,
      payload.estimation.email,
      payload.estimation.city,
      payload.estimation.propertyType,
      payload.estimation.surface,
      payload.estimation.projectTiming,
      payload.estimation.message,
      payload.estimation.consent ? "oui" : "non",
      payload.estimation.submittedAt,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ];

  payload.predictions.forEach((prediction) => {
    rows.push([
      "pronostic",
      payload.exportedAt,
      payload.participant.name,
      payload.participant.email,
      payload.champion?.name || "",
      payload.estimation.name,
      payload.estimation.phone,
      payload.estimation.email,
      payload.estimation.city,
      payload.estimation.propertyType,
      payload.estimation.surface,
      payload.estimation.projectTiming,
      payload.estimation.message,
      payload.estimation.consent ? "oui" : "non",
      payload.estimation.submittedAt,
      prediction.matchId,
      prediction.phase,
      prediction.group,
      prediction.utc,
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

  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  downloadText(`donnees-guy-hoquet-mondial-2026-${Date.now()}.csv`, csv, "text/csv;charset=utf-8");
}

function exportJson() {
  const payload = createExportPayload();
  downloadText(`donnees-guy-hoquet-mondial-2026-${Date.now()}.json`, JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
}

function downloadText(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function resetPredictions() {
  if (!confirm("Effacer toutes les données saisies sur cet appareil ?")) return;
  state.participant = { name: "", email: "" };
  state.champion = "";
  state.lead = {
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
  };
  state.predictions = {};
  state.lastSubmittedAt = "";
  saveState();
  syncForm();
  renderView();
}

function bindEvents() {
  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.matches("[data-match]")) {
      updatePrediction(target.dataset.match, target.dataset.side, target.value);
    }
    if (target.id === "clientName") {
      state.participant.name = target.value;
      saveState();
      renderMetrics();
    }
    if (target.id === "clientEmail") {
      state.participant.email = target.value;
      saveState();
    }
    if (target.id?.startsWith("lead")) {
      updateLeadFromField(target);
    }
    if (target.id === "searchFilter") {
      state.filters.query = target.value;
      renderView();
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.id === "championPick") {
      state.champion = target.value;
      saveState();
      renderView();
    }
    if (target.id === "phaseFilter") {
      state.filters.phase = target.value;
      renderView();
    }
    if (target.id === "groupFilter") {
      state.filters.group = target.value;
      renderView();
    }
    if (target.id === "teamFilter") {
      state.filters.team = target.value;
      renderView();
    }
    if (target.id?.startsWith("lead")) {
      updateLeadFromField(target);
    }
  });

  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-view]");
    if (tab) {
      state.view = tab.dataset.view;
      renderView();
    }
  });

  $("#valuationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.lead.consent) {
      renderLeadStatus("Consentement requis pour transmettre la demande.");
      return;
    }
    state.lead.submittedAt = new Date().toISOString();
    saveState();
    renderMetrics();
    renderLeadStatus();
    sendDataToAgency("Demande d'estimation transmise à l'agence.");
  });

  $("#submitData").addEventListener("click", () => {
    sendDataToAgency();
  });
  $("#exportCsv").addEventListener("click", exportCsv);
  $("#exportJson").addEventListener("click", exportJson);
  $("#resetPredictions").addEventListener("click", resetPredictions);
}

function updateLeadFromField(field) {
  const map = {
    leadName: "name",
    leadPhone: "phone",
    leadEmail: "email",
    leadCity: "city",
    leadPropertyType: "propertyType",
    leadSurface: "surface",
    leadProjectTiming: "projectTiming",
    leadMessage: "message",
    leadConsent: "consent"
  };
  const key = map[field.id];
  if (!key) return;
  state.lead[key] = field.type === "checkbox" ? field.checked : field.value;
  if (state.lead.submittedAt) state.lead.submittedAt = "";
  saveState();
  renderMetrics();
  renderLeadStatus();
}

function init() {
  loadState();
  fillSelects();
  syncForm();
  bindEvents();
  renderView();
}

init();
