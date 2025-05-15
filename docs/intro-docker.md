# Docker

- Docker est une plateforme open-source pour développer, déployer et exécuter des applications dans des conteneurs.
- Les conteneurs isolent les applications avec leurs dépendances pour une exécution cohérente.
- Cela améliore l'efficacité des workflows de développement et de déploiement.

## VM vs Docker

### VM (Machines Virtuelles) :

- Isolation : Complète, chaque VM a son propre OS.
- Ressources : Consommation élevée (CPU, mémoire, stockage).
- Démarrage : Lent.
- Utilisation : Idéal pour exécuter plusieurs OS.

### Docker :

- Isolation : Partielle, partage le noyau de l'hôte.
- Ressources : Consommation faible.
- Démarrage : Rapide.
- Utilisation : Idéal pour exécuter plusieurs applications sur le même OS.

## Avantages de Docker

- **Flexible** : Docker permet de créer des environnements isolés pour chaque application, facilitant ainsi le développement, le test et le déploiement.
- **Léger** : Les conteneurs Docker partagent le noyau de l'hôte, ce qui les rend beaucoup plus légers que les machines virtuelles.
- **Portable** : Les conteneurs peuvent être exécutés de manière cohérente sur n'importe quelle infrastructure, que ce soit en local, sur le cloud ou sur des serveurs dédiés.
- **Autosuffisant** : Chaque conteneur inclut tout ce dont l'application a besoin pour fonctionner, y compris les bibliothèques et les dépendances, garantissant ainsi une exécution uniforme.
- **Auto-documenté** : Les fichiers Dockerfile servent de documentation pour la configuration et le déploiement des applications, facilitant la compréhension et la maintenance.
- **Scalable** : Docker permet de mettre à l'échelle les applications rapidement et facilement, en ajoutant ou en supprimant des conteneurs selon les besoins.
- **Sécurisé** : L'isolation des conteneurs réduit les risques de conflits entre les applications et améliore la sécurité globale du système.



