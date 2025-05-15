# Docusaurus Docker

## Run project from dockerfile

```sh
# build image
docker build -t docusaurus-app .
```

```sh
# run container
docker run -p 3000:3000 docusaurus-app
```

## Entrer dans un container 

```sh
docker ps -a
```

Récupérer l'id du container

```sh
docker exec -it CONTAINER_ID /bin/sh
```

## Run project with docker compose

```bash
docker-compose up --build -d
```

### Down les services

```bash
docker-compose down -v
```
