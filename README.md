# Pronostics Mondial 2026

Prototype d'application web locale pour animer un concours clients autour de la Coupe du monde de Football 2026.

## Utilisation locale

Ouvrir `index.html` dans un navigateur. Les données saisies sont conservées dans le stockage local du navigateur et peuvent être exportées en CSV complet ou en JSON.

Depuis un smartphone connecté au même Wi-Fi que l'ordinateur qui lance l'application, ouvrir :

`http://192.168.1.22:4174/`

Si l'adresse ne répond plus, l'adresse IP locale de l'ordinateur a probablement changé. Il faut alors relancer le serveur local et utiliser la nouvelle adresse réseau.

## Serveur de collecte local

Pour tester l'enregistrement des participations sur l'ordinateur :

```bash
HOST=0.0.0.0 PORT=4175 node server.js
```

Le serveur enregistre les participations dans `data/submissions.jsonl`. Il affiche aussi dans le terminal un lien privé d'export administrateur au format CSV.

## Déploiement public sécurisé

Pour une diffusion clients, utiliser un hébergement HTTPS avec stockage persistant plutôt qu'un tunnel temporaire.

### Option Netlify

Netlify est prêt via :

- `netlify.toml` pour la configuration ;
- `netlify/functions/` pour les API ;
- Netlify Blobs pour stocker les participations ;
- `NETLIFY.md` pour les étapes de mise en ligne.

Les routes restent identiques :

- `POST /api/submissions` ;
- `GET /api/submissions.csv?token=...` ;
- `GET /api/health`.

### Option Docker

- `Dockerfile` pour créer l'application hébergée ;
- `compose.yaml` pour un lancement Docker local ou sur serveur ;
- `.env.example` pour les variables de production ;
- `DEPLOIEMENT.md` pour les étapes de mise en ligne.

Le dossier de données doit être persistant, par exemple `/data`, afin de conserver les participations après un redémarrage ou un redéploiement.

Les exports incluent :

- identité du participant ;
- champion pronostiqué ;
- scores pronostiqués ;
- demande d'estimation gratuite ;
- consentement de rappel ;
- dates et informations des matches.

Pour récupérer automatiquement les informations de clients utilisant chacun leur propre appareil, utiliser le serveur de collecte déployé publiquement avec HTTPS. L'export administrateur reste protégé par le jeton `ADMIN_TOKEN`.

## Données intégrées

- 48 équipes qualifiées, réparties dans les 12 groupes A à L.
- 72 matches de groupes avec équipes, villes, stades et horaires en heure de Paris.
- 32 matches à élimination directe avec dates, villes et stades, en attente des qualifiés.

Sources consultées le 29 mai 2026 : FIFA pour le calendrier officiel et KickoffClock pour le tableau complet horodaté en UTC.

## Identité visuelle

Le logo Guy Hoquet Mitry-Mory est intégré depuis `assets/guy-hoquet-logo.png`. La palette reprend le bleu principal et le bleu nuit du logo.

## Point juridique

Ce prototype est conçu comme un concours gratuit de pronostics, sans mise d'argent ni cote financière. Pour une version avec enjeu financier réel, il faut vérifier le cadre légal applicable, notamment les obligations de l'ANJ en France.
