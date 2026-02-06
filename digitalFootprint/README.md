# Digital Footprint - Projet de sensibilisation à l'empreinte numérique

Projet interactif de sensibilisation aux dangers de l'empreinte numérique, développé avec React et Vite.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- npm (inclus avec Node.js) ou yarn

## 🚀 Installation

1. **Cloner le projet** (si ce n'est pas déjà fait)
   ```bash
   git clone <url-du-repo>
   cd digitalFootprint
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```
   ou avec yarn :
   ```bash
   yarn install
   ```

## 💻 Lancement du projet

### Mode développement

Pour lancer le serveur de développement avec rechargement automatique :

```bash
npm run dev
```

ou avec yarn :

```bash
yarn dev
```

Le site sera accessible à l'adresse : **http://localhost:5173**

### Mode production

Pour construire le projet pour la production :

```bash
npm run build
```

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 🛠️ Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version optimisée pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 📦 Technologies utilisées

- **React 19** - Bibliothèque UI
- **Vite** - Outil de build et serveur de développement
- **React Icons** - Bibliothèque d'icônes
- **React Quiz Component** - Composant de quiz interactif

## 📂 Structure du projet

```
digitalFootprint/
├── public/           # Fichiers statiques
├── src/
│   ├── elements/     # Composants UI (Quiz, Settings, Window, etc.)
│   ├── contexts/     # Contextes React (LanguageContext)
│   ├── windows/      # Configurations des fenêtres
│   ├── assets/       # Images et ressources
│   ├── App.jsx       # Composant principal
│   └── main.jsx      # Point d'entrée
└── data/             # Données et contenus

```

## 🌐 Langues disponibles

Le site est disponible en :
- 🇫🇷 Français
- 🇬🇧 English

## 📝 Notes

- Le projet utilise Vite pour un rechargement ultra-rapide en développement
- Les vidéos et contenus sont intégrés via iframe YouTube
- Le site simule un environnement de bureau interactif
