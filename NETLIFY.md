# Deploiement Netlify

Cette version garde les memes routes publiques que le prototype local :

- `POST /api/submissions` pour enregistrer une participation ;
- `GET /api/submissions.csv?token=...` pour telecharger l'export administrateur ;
- `GET /api/health` pour verifier que l'API repond.

Sur Netlify, les participations sont stockees dans Netlify Blobs, une par une, dans le store `pronostics-submissions`.

## Fichiers ajoutes

- `netlify.toml` : configuration Netlify, dossier public, fonctions et routes API.
- `netlify/functions/submissions.js` : reception des participations.
- `netlify/functions/submissions-csv.js` : export CSV protege.
- `netlify/functions/health.js` : verification de fonctionnement.
- `netlify/functions/lib/shared.cjs` : validation, nettoyage et conversion CSV.
- `scripts/build-netlify.js` : copie uniquement les fichiers publics dans `dist`.

## Parametres Netlify

Dans Netlify, creer un site depuis le depot Git du projet.

Les reglages sont deja dans `netlify.toml` :

```text
Build command: npm run build:netlify
Publish directory: dist
Functions directory: netlify/functions
```

## Variables d'environnement

Dans Netlify, aller dans :

```text
Project configuration > Environment variables
```

Ajouter :

```env
ADMIN_TOKEN=un-jeton-long-et-secret
STORE_REMOTE_ADDRESS=false
```

Pour generer le jeton admin :

```bash
openssl rand -hex 32
```

Ne jamais partager ce jeton avec les clients.

## Verification

Apres le deploiement, ouvrir :

```text
https://votre-site.netlify.app/api/health
```

La reponse attendue :

```json
{"ok":true,"runtime":"netlify-functions","storage":"netlify-blobs"}
```

Faire ensuite un test complet depuis le site public :

1. Remplir un pronostic avec de fausses coordonnees.
2. Envoyer a l'agence.
3. Ouvrir l'export :

```text
https://votre-site.netlify.app/api/submissions.csv?token=ADMIN_TOKEN
```

Remplacer `ADMIN_TOKEN` par le jeton configure dans Netlify.

## Donnees personnelles

Par defaut, l'application ne stocke pas l'adresse IP du visiteur. Pour l'activer, passer `STORE_REMOTE_ADDRESS=true`, seulement si cette collecte est assumee dans les mentions legales.

Les donnees sont stockees dans Netlify Blobs. Netlify indique que Blobs chiffre les donnees au repos et en transit, mais le code du site reste responsable de ne pas exposer les donnees sans controle. Ici, l'export CSV exige `ADMIN_TOKEN`.

## Export et conservation

Les participations peuvent etre exportees en CSV depuis l'URL admin. Pour une operation commerciale reelle, definir :

- une duree de conservation des donnees ;
- une personne responsable de l'export et de la suppression ;
- les mentions legales du concours gratuit ;
- le texte de consentement de rappel agence.
