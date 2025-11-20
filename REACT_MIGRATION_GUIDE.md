# Converting from Angular to React

This guide explains how to set up and run the React version of your portfolio.

## Quick Setup

### Step 1: Install React Dependencies

```bash
# Copy the React package.json
cp package-react.json package.json

# Install dependencies
npm install
```

### Step 2: Set Up Project Structure

The React version uses:
- `src-react/` - React source files
- `index-react.html` - React HTML entry point
- `vite-react.config.js` - Vite configuration for React

### Step 3: Update Vite Config

Rename `vite-react.config.js` to `vite.config.js` (or update your build scripts)

### Step 4: Run Development Server

```bash
npm run dev
```

### Step 5: Build for Production

```bash
npm run build
```

### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

## File Structure

```
src-react/
├── main.jsx          # React entry point
├── App.jsx           # Main app component with routing
├── index.css         # Global styles (Tailwind)
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

## Key Differences from Angular

1. **Components**: React uses functional components with hooks instead of Angular classes
2. **Routing**: React Router instead of Angular Router
3. **State Management**: useState/useEffect hooks instead of Angular services
4. **Forms**: React forms instead of Angular Reactive Forms
5. **Data Fetching**: fetch API instead of HttpClient

## Migration Status

✅ Navigation Component
✅ Footer Component  
✅ Hero Component
✅ Project Card Component
✅ Home Page
⏳ About Page (in progress)
⏳ Skills Page
⏳ Projects Page
⏳ Reports Page
⏳ Contact Page




