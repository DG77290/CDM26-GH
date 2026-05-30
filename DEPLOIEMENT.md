# Deploiement public securise

Ce dossier est pret pour un hebergement public avec HTTPS et stockage persistant.

Pour Netlify, suivre plutot `NETLIFY.md`. Netlify utilise des fonctions serverless et Netlify Blobs, pas le serveur Docker ci-dessous.

## Ce qui est inclus

- Serveur Node.js sans dependance externe.
- Image Docker prete a deployer.
- Stockage des participations dans un volume persistant, par defaut `/data/submissions.jsonl`.
- Export administrateur protege par un jeton secret.
- En-tetes de securite web.
- Limitation simple des envois pour reduire le spam.
- Pas de stockage d'adresse IP par defaut.

## Hebergement recommande

Choisir une plateforme qui permet :

- un service web Docker ;
- HTTPS automatique ;
- un volume ou disque persistant monte dans le conteneur ;
- des variables d'environnement secretes.

Le point important est le volume persistant : sans lui, les participations peuvent disparaitre lors d'un redeploiement.

## Variables a configurer

Créer les variables suivantes chez l'hebergeur :

```env
NODE_ENV=production
HOST=0.0.0.0
PORT=4175
DATA_DIR=/data
ADMIN_TOKEN=un-jeton-long-et-secret
PUBLIC_ORIGIN=https://votre-domaine.fr
HTTPS_REQUIRED=true
TRUST_PROXY=true
STORE_REMOTE_ADDRESS=false
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=20
```

Pour generer `ADMIN_TOKEN` :

```bash
openssl rand -hex 32
```

Ne jamais envoyer ce jeton aux clients.

## Volume persistant

Configurer un disque persistant monte sur :

```text
/data
```

Le fichier de collecte sera :

```text
/data/submissions.jsonl
```

## Verification apres mise en ligne

Ouvrir :

```text
https://votre-domaine.fr/api/health
```

La reponse attendue est :

```json
{"ok":true}
```

Ensuite, tester une participation depuis le site public.

## Export administrateur

L'export CSV se recupere avec :

```text
https://votre-domaine.fr/api/submissions.csv?token=ADMIN_TOKEN
```

Remplacer `ADMIN_TOKEN` par le jeton secret configure chez l'hebergeur.

## Lancement local avec Docker

Créer un fichier `.env` depuis `.env.example`, renseigner `ADMIN_TOKEN`, puis lancer :

```bash
docker compose up -d --build
```

L'application sera disponible sur :

```text
http://localhost:4175/
```

## Avant diffusion clients

- Ajouter le nom de domaine officiel.
- Verifier que le cadenas HTTPS est visible.
- Faire un test complet avec une fausse participation.
- Telecharger l'export CSV et verifier les colonnes.
- Valider les mentions legales, la duree de conservation des donnees et le cadre du jeu gratuit.
