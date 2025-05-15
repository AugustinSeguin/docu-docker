# DevContainers : Résumé

## Définition

Un **DevContainer** (ou *Development Container*) est un environnement de développement défini par un ensemble de fichiers de configuration (notamment `.devcontainer/devcontainer.json`) permettant de lancer une stack de développement **conteneurisée** avec Docker.

Utilisé principalement dans **Visual Studio Code** via l’extension **Remote - Containers**.

---

## Avantages des DevContainers

- **Environnement de développement reproductible** et isolé.
- Configuration unifiée pour toute l’équipe.
- Prise en main rapide d’un projet (pas besoin d’installer les dépendances localement).
- Intégration directe avec **VS Code** (terminal, debug, extensions).
- Supporte les **Dockerfile** et **docker-compose.yml**.

---

## Exemple : Stack PHP Laravel

Structure :
```
.devcontainer/
├── devcontainer.json
├── Dockerfile
```

### Dockerfile

```Dockerfile
FROM php:8.2-apache

# Installation des extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev zip \
    && docker-php-ext-install zip pdo pdo_mysql

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Activation du module Apache mod_rewrite
RUN a2enmod rewrite

# Configuration du répertoire de travail
WORKDIR /var/www/html
```

### devcontainer.json

```json
{
  "name": "Laravel DevContainer",
  "build": {
    "dockerfile": "Dockerfile"
  },
  "settings": {
    "terminal.integrated.shell.linux": "/bin/bash"
  },
  "extensions": [
    "felixfbecker.php-intellisense",
    "bmewburn.vscode-intelephense-client"
  ],
  "forwardPorts": [80],
  "postCreateCommand": "composer install",
  "mounts": [
    "source=${localWorkspaceFolder},target=/var/www/html,type=bind"
  ]
}
```

---

## Utilisation

1. Ouvrir le projet dans VS Code.
2. Installer l’extension **Remote - Containers**.
3. Cliquer sur `Reopen in Container`.

---

## Résultat

Tu obtiens un environnement Laravel prêt à l’emploi dans un container, sans polluer ta machine locale. Toute l’équipe travaille dans le même environnement, ce qui évite les erreurs dues aux différences de configuration.

