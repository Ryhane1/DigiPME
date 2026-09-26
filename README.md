# DigiPME Maroc

## Plateforme intelligente d'accompagnement à la transformation digitale des PME marocaines

DigiPME Maroc est une application web qui a pour objectif d'accompagner les petites et moyennes entreprises (PME) marocaines dans leur transformation digitale.

La plateforme permet aux PME d'identifier leurs besoins numériques, d'évaluer leur maturité digitale, de trouver des prestataires informatiques adaptés et de gérer leurs projets de transformation digitale.

Elle permet également aux freelances et prestataires informatiques de créer leur profil, consulter les projets publiés par les PME et proposer leurs services.

---

## 🎯 Objectif du projet

Le projet DigiPME Maroc vise à faciliter l'accès des PME marocaines aux solutions et compétences numériques.

La plateforme propose un espace permettant de :

- Évaluer la maturité digitale d'une PME.
- Identifier ses besoins en transformation numérique.
- Proposer des recommandations adaptées.
- Publier des projets digitaux.
- Rechercher des freelances et prestataires informatiques.
- Recevoir et gérer des propositions.
- Suivre les projets.
- Communiquer avec les prestataires.
- Évaluer les prestataires après la réalisation des projets.

---

## 👥 Utilisateurs de la plateforme

### 🏢 PME

Les PME peuvent :

- Créer un compte.
- Se connecter.
- Réaliser un diagnostic digital.
- Consulter leur niveau de maturité digitale.
- Recevoir des recommandations.
- Publier des projets.
- Rechercher des prestataires.
- Consulter les propositions reçues.
- Sélectionner un prestataire.
- Suivre leurs projets.
- Évaluer les prestataires.

### 💻 Freelance / Prestataire

Les freelances peuvent :

- Créer un compte.
- Se connecter.
- Créer et gérer leur profil.
- Ajouter leurs spécialités et compétences.
- Consulter les projets disponibles.
- Envoyer des propositions.
- Gérer leurs missions.
- Communiquer avec les PME.
- Consulter leurs évaluations.

### 👨‍💼 Administrateur

L'administrateur assure la gestion et la supervision de la plateforme.

Il peut notamment :

- Gérer les utilisateurs.
- Consulter les PME.
- Gérer les freelances.
- Consulter les projets.
- Superviser les activités de la plateforme.

---

# ⚙️ Fonctionnalités principales

## 1. Authentification

La plateforme permet aux utilisateurs de :

- Créer un compte PME.
- Créer un compte Freelance.
- Se connecter.
- Accéder à un espace personnel selon leur rôle.

Les rôles principaux sont :

```text
PME
FREELANCE
ADMIN
```

---

## 2. Diagnostic de maturité digitale

La PME peut effectuer un diagnostic permettant d'identifier son niveau de maturité numérique.

Le diagnostic permet d'identifier les principaux besoins de l'entreprise afin de proposer des recommandations adaptées.

---

## 3. Gestion des projets

Une PME peut publier un projet de transformation digitale en précisant notamment :

- Le titre du projet.
- La description.
- Les besoins.
- Les compétences recherchées.
- Le budget.
- Les informations nécessaires à la réalisation du projet.

---

## 4. Recherche de prestataires

Les PME peuvent rechercher des freelances et prestataires selon leurs compétences et spécialités.

---

## 5. Gestion des propositions

Les freelances peuvent consulter les projets publiés par les PME et envoyer leurs propositions.

La PME peut consulter les différentes propositions et sélectionner le prestataire correspondant à ses besoins.

---

## 6. Suivi des projets

Après la sélection d'un prestataire, la PME peut suivre l'avancement de son projet.

---

## 7. Évaluations

À la fin d'un projet, la PME peut évaluer le prestataire et laisser un commentaire.

---

# 🏗️ Architecture

DigiPME Maroc utilise une architecture **Client / Serveur**.

```text
                 ┌──────────────────────┐
                 │       Frontend       │
                 │        React         │
                 │                      │
                 │ Interface utilisateur│
                 └──────────┬───────────┘
                            │
                       REST API
                            │
                 ┌──────────▼───────────┐
                 │       Backend        │
                 │     Spring Boot      │
                 │                      │
                 │ Controller           │
                 │ Service              │
                 │ Repository           │
                 │ Security             │
                 └──────────┬───────────┘
                            │
                       JPA / Hibernate
                            │
                 ┌──────────▼───────────┐
                 │      PostgreSQL      │
                 │       Database       │
                 └──────────────────────┘
```

---

# 🛠️ Technologies utilisées

### Frontend

- React
- Vite
- React Router
- Axios
- Lucide React
- CSS

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- JWT
- MapStruct
- Bean Validation

### Base de données

- PostgreSQL

### Outils

- Git
- GitHub
- Postman
- Swagger / OpenAPI
- Docker

---

# 📊 Diagrammes UML

Les diagrammes UML du projet sont disponibles dans le dossier :

```text
docs/
└── uml/
```

## Diagramme de classes

Le diagramme de classes représente les principales entités de l'application et leurs relations.

![Diagramme de classes](docs/uml/diagramme-classes.png)

---

## Diagramme de cas d'utilisation

Le diagramme de cas d'utilisation présente les principales interactions entre les acteurs et la plateforme.

Les principaux acteurs sont :

- PME
- Freelance
- Administrateur

![Diagramme de cas d'utilisation](docs/uml/diagramme-use-case.png)

---

## Diagramme de séquence

Le diagramme de séquence représente les interactions entre les différents composants de l'application lors d'un scénario d'utilisation.

Exemple : publication d'un projet par une PME et soumission d'une proposition par un freelance.

![Diagramme de séquence](docs/uml/diagramme-sequence.png)

---

# 📁 Structure du projet

```text
DigiPME-Maroc/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── org/
│   │               └── example/
│   │                   └── digipme/
│   │                       ├── Controller/
│   │                       ├── Model/
│   │                       ├── Repository/
│   │                       ├── Service/
│   │                       ├── DTO/
│   │                       ├── Mapper/
│   │                       └── Security/
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── docs/
│   └── uml/
│       ├── diagramme-classes.png
│       ├── diagramme-use-case.png
│       └── diagramme-sequence.png
│
└── README.md
```

---

# 🚀 Installation

## Cloner le projet

```bash
git clone https://github.com/USERNAME/DigiPME-Maroc.git

cd DigiPME-Maroc
```

## Frontend

Accéder au dossier frontend :

```bash
cd frontend
```

Installer les dépendances :

```bash
npm install
```

Lancer l'application :

```bash
npm run dev
```

---

## Backend

Accéder au dossier backend :

```bash
cd backend
```

Lancer l'application Spring Boot :

```bash
./mvnw spring-boot:run
```

Sous Windows :

```bash
mvnw.cmd spring-boot:run
```

---

# 🔄 Fonctionnement général

```text
        PME
         │
         ▼
   Création de compte
         │
         ▼
  Diagnostic digital
         │
         ▼
 Identification
 des besoins
         │
         ▼
 Recommandations
         │
         ▼
 Publication du projet
         │
         ▼
 Recherche de prestataires
         │
         ▼
   Propositions
         │
         ▼
 Sélection du freelance
         │
         ▼
  Réalisation du projet
         │
         ▼
      Évaluation
```

---

# 🔐 Sécurité

La sécurité de l'application repose sur :

- Spring Security
- JWT
- Authentification des utilisateurs
- Gestion des rôles
- Protection des endpoints

Les rôles sont utilisés pour contrôler l'accès aux différentes fonctionnalités de la plateforme.

---

# 📌 État du projet

Le projet est actuellement en cours de développement.

### Frontend

- [x] Page d'accueil
- [x] Inscription PME
- [x] Inscription Freelance
- [x] Connexion
- [x] Dashboard PME
- [x] Dashboard Freelance
- [x] Dashboard Admin

### Backend

- [x] Modèle utilisateur
- [x] Modèle PME
- [x] Modèle Freelance
- [x] Modèle Projet
- [x] Modèle Offre
- [x] Modèle Review
- [ ] Authentification JWT complète
- [ ] Gestion complète des projets
- [ ] Gestion des offres
- [ ] Diagnostic digital
- [ ] Système de recommandations
- [ ] Messagerie
- [ ] Gestion complète des évaluations

---

# 👨‍💻 Auteur

**Rihane Harchi**

Projet académique — **DigiPME Maroc**

Master Management de la Propriété Intellectuelle, Innovation et Transfert Technologique

---

# 📄 Licence

Projet développé dans un cadre académique.
