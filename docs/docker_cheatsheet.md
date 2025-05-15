# 🐳 Docker Cheat Sheet – 15 Commandes Essentielles

## 🔧 Gestion des conteneurs

1. **Lister les conteneurs actifs**
```bash
docker ps
```

2. **Lister tous les conteneurs (actifs et arrêtés)**
```bash
docker ps -a
```

3. **Démarrer un conteneur**
```bash
docker start <container_id>
```

4. **Arrêter un conteneur**
```bash
docker stop <container_id>
```

5. **Supprimer un conteneur**
```bash
docker rm <container_id>
```

6. **Accéder à un conteneur en shell**
```bash
docker exec -it <container_id> /bin/sh
```

---

## 🧱 Gestion des images

7. **Lister les images**
```bash
docker images
```

8. **Construire une image à partir d’un Dockerfile**
```bash
docker build -t mon-image .
```

9. **Supprimer une image**
```bash
docker rmi <image_id>
```

---

## 📦 Volumes & Réseaux

10. **Lister les volumes**
```bash
docker volume ls
```

11. **Lister les réseaux**
```bash
docker network ls
```

---

## 🛠️ Docker Compose

12. **Démarrer les services définis dans docker-compose.yml**
```bash
docker-compose up
```

13. **Démarrer en forçant la reconstruction des images**
```bash
docker-compose up --build
```

14. **Arrêter les services**
```bash
docker-compose down
```

---

## 🧹 Nettoyage

15. **Nettoyer tout ce qui est inutilisé (dangling images, conteneurs arrêtés, etc.)**
```bash
docker system prune
```

---

📁 *Ce fichier est une aide-mémoire rapide pour les opérations courantes avec Docker et Docker Compose.*
