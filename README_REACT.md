# Liyandah Portfolio - React Version

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite.

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

Run the setup script:

```bash
setup-react.bat
```

This will:
- Backup your Angular files
- Install React dependencies
- Set up all configuration files
- Copy React source files

### Option 2: Manual Setup

1. **Install Dependencies:**
   ```bash
   npm install react react-dom react-router-dom
   npm install --save-dev @vitejs/plugin-react vite @types/react @types/react-dom gh-pages
   ```

2. **Update Configuration:**
   - Rename `package-react.json` to `package.json`
   - Rename `vite-react.config.js` to `vite.config.js`
   - Rename `index-react.html` to `index.html`
   - Rename `tailwind-react.config.js` to `tailwind.config.js`
   - Rename `postcss-react.config.js` to `postcss.config.js`
   - Copy `src-react/` to `src/`

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Main app component with routing
├── index.css             # Global styles (Tailwind)
├── components/
│   ├── Navigation.jsx    # Navigation bar
│   ├── Footer.jsx        # Footer component
│   ├── Hero.jsx          # Hero section
│   └── ProjectCard.jsx   # Reusable project card
└── pages/
    ├── Home.jsx          # Home page
    ├── About.jsx         # About page
    ├── Skills.jsx        # Skills page
    ├── Projects.jsx      # Projects page
    ├── Reports.jsx       # Reports page
    └── Contact.jsx       # Contact page with form
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

## 📦 Key Features

- ✅ React 18 with functional components and hooks
- ✅ React Router for navigation
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Dynamic content loading from JSON files
- ✅ Form validation
- ✅ GitHub Pages deployment ready

## 🔧 Configuration

### Base URL for GitHub Pages

The app is configured for GitHub Pages with base URL `/RESUME/`. This is set in:
- `vite.config.js`: `base: '/RESUME/'`
- `src/main.jsx`: `basename="/RESUME"`

### Data Files

Projects and skills are loaded from:
- `/RESUME/assets/data/projects.json`
- `/RESUME/assets/data/skills.json`

## 📝 Key Differences from Angular

1. **Components**: Functional components with hooks instead of Angular classes
2. **Routing**: React Router instead of Angular Router
3. **State**: useState/useEffect hooks instead of Angular services
4. **Forms**: React controlled components instead of Angular Reactive Forms
5. **Data Fetching**: fetch API instead of HttpClient

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

   Or manually:
   ```bash
   npx gh-pages -d dist-react
   ```

### Important Notes

- Make sure `base` in `vite.config.js` matches your repository name
- The `404.html` file is included for client-side routing on GitHub Pages
- All image paths use relative paths (no leading `/`)

## 📄 License

All rights reserved © 2024 Liyandah Tebhogo Hela



