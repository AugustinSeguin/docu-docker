# docker-compose.yml : Résumé

## Pourquoi utiliser `docker-compose.yml` ?

Le fichier `docker-compose.yml` permet de définir et de lancer **plusieurs containers Docker** en une seule commande. Il simplifie la gestion des applications multi-services.

---

## Avantages de Docker Compose

- **Déclaration centralisée** des services, volumes, réseaux.
- Lancement simultané de plusieurs containers avec `docker-compose up`.
- Facile à versionner avec Git.
- Reproductibilité de l’environnement.
- Lisible, simple à configurer (YAML).

---

## Exemple d'utilisation documenté : WordPress + MySQL

```yaml
version: '3.8'

services:
  db:
    image: mysql:5.7
    container_name: mysql-db
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: user
      MYSQL_PASSWORD: pass
      MYSQL_ROOT_PASSWORD: rootpass
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    container_name: wp-site
    restart: always
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: user
      WORDPRESS_DB_PASSWORD: pass
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wp_data:/var/www/html
    depends_on:
      - db

volumes:
  db_data:
  wp_data:
```

### Explications :
- **`services:`** définit les containers à lancer.
- **`db`** utilise l'image `mysql:5.7` avec un volume nommé `db_data`.
- **`wordpress`** utilise l'image `wordpress`, exposée sur le port `8080`, avec un volume `wp_data`.
- **`depends_on`** assure que MySQL démarre avant WordPress.
- **`volumes:`** crée les volumes persistants pour stocker les données.

---

## Lancement

```bash
docker-compose up -d
```

## Arrêt

```bash
docker-compose down
```

