# Dockerfile : Commandes de Base

Le fichier `Dockerfile` est un script utilisé pour automatiser la création d'images Docker. Voici quelques-unes des commandes de base utilisées dans un Dockerfile :

## **FROM** 
Spécifie l'image de base à utiliser pour créer l'image Docker.

```Dockerfile
FROM node:20-alpine
```

## **WORKDIR** 
Définit le répertoire de travail dans le conteneur. Toutes les commandes suivantes seront exécutées dans ce répertoire.

```Dockerfile
WORKDIR /app
```

## **COPY** 
Copie des fichiers ou des répertoires depuis l'hôte vers le conteneur.

```Dockerfile
COPY package.json ./
```

## **RUN** 
Exécute des commandes dans le conteneur pour installer des dépendances ou configurer l'environnement.

```Dockerfile
RUN npm install
```

## **EXPOSE** 
Indique le port sur lequel l'application dans le conteneur écoutera.

```Dockerfile
EXPOSE 8080
```

- **CMD** : Spécifie la commande par défaut à exécuter lorsque le conteneur démarre.

```Dockerfile
CMD ["npm", "start"]
```

## Construire l'image : 

```sh
docker build . -t my-app
```

## Démarrer l'image : 

```sh
docker run -p PORT_MACHINE:PORT_CONTAINER my-app 
```

- On expose l'application sur le container PORT_MACHINE
- L'application est exposé en extérieur sur localhost:PORT_CONTAINER


```sh
docker tag my-app augustinseguin/my-app:NUMERO_TAG
```

```sh
docker push augustinseguin/getting-started
```

