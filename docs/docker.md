# Docker

## `.dockerignore`

Le fichier `.dockerignore` fonctionne de manière similaire au `.gitignore`. Il permet d'exclure certains fichiers ou dossiers lors du **build** d'une image Docker.

### Objectif :
- Réduire la taille de l’image.
- Accélérer la construction.
- Éviter de copier des fichiers sensibles ou inutiles (logs, `node_modules`, `.env`, etc.).

### Exemple :
```
node_modules
*.log
.env
.git
```

---

## Image

Une **image Docker** est un **snapshot immuable** d’un environnement contenant tout ce qu’il faut pour exécuter une application.

### Caractéristiques :
- Contient le système de fichiers, les dépendances, les binaires et le code source.
- Construite à partir d’un `Dockerfile`.
- Peut être partagée via un registre (ex : Docker Hub).

### Exemple de commande :
```bash
docker build -t mon-app:1.0 .
```

---

## Container

Un **container Docker** est une instance **exécutée** d’une image.

### Caractéristiques :
- Léger et isolé.
- Peut être lancé, arrêté, supprimé.
- Éphémère ou persistant selon la configuration.

### Exemple de commande :
```bash
docker run -d --name mon-container mon-app:1.0
```

---

## Volume

Un **volume Docker** est un espace de stockage **persistant** utilisé par un ou plusieurs containers.

### Utilité :
- Conserver des données même si le container est supprimé.
- Partager des données entre plusieurs containers.

### Exemple de commande :
```bash
docker volume create mon-volume
docker run -v mon-volume:/app/data mon-app:1.0
```

---

## Résumé

| Notion        | Description                                               |
|---------------|-----------------------------------------------------------|
| `.dockerignore` | Fichier listant ce qui ne doit pas être copié dans l’image |
| Image         | Blueprint immuable d’un environnement d’exécution        |
| Container     | Instance en fonctionnement d’une image                   |
| Volume        | Stockage persistant pour les données des containers      |


