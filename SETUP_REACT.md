# Setup React Portfolio

## Quick Start

### Step 1: Install Dependencies

```bash
# Install React dependencies
npm install react react-dom react-router-dom
npm install --save-dev @vitejs/plugin-react vite @types/react @types/react-dom gh-pages
```

### Step 2: Update Configuration Files

1. **Rename files:**
   - `package-react.json` → `package.json` (backup old one first)
   - `vite-react.config.js` → `vite.config.js` (backup old one first)
   - `index-react.html` → `index.html` (backup old one first)
   - `tailwind-react.config.js` → `tailwind.config.js` (backup old one first)
   - `postcss-react.config.js` → `postcss.config.js` (backup old one first)

2. **Move React source:**
   - `src-react/` → `src/` (backup old Angular src first)

### Step 3: Run Development Server

```bash
npm run dev
```

### Step 4: Build for Production

```bash
npm run build
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

## File Structure

```
src/
├── main.jsx          # React entry point
├── App.jsx           # Main app with routing
├── index.css         # Global styles
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── ProjectCard.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Reports.jsx
    └── Contact.jsx
```

## Important Notes

- All image paths use relative paths (no leading `/`)
- Data files are loaded from `/RESUME/assets/data/`
- Base URL is configured as `/RESUME/` for GitHub Pages
- All components are functional components using React hooks



