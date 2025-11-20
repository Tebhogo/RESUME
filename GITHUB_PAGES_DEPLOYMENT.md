# How to Host Your Portfolio on GitHub Pages

This guide will help you deploy your Angular portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account (create one at https://github.com if you don't have one)
2. Git installed on your computer
3. Node.js and npm installed (you already have this)

## Step 1: Install GitHub Pages Deployment Package

Run this command in your project directory:

```bash
npm install --save-dev angular-cli-ghpages
```

## Step 2: Update package.json

Add a deployment script to your `package.json`:

```json
"scripts": {
  "deploy": "ng build --configuration production --base-href=/YOUR-REPO-NAME/ && npx angular-cli-ghpages --dir=dist/liynadah-portfolio"
}
```

**Important:** Replace `YOUR-REPO-NAME` with your actual GitHub repository name.

## Step 3: Initialize Git Repository

If you haven't already, initialize Git in your project:

```bash
git init
```

## Step 4: Create .gitignore File

Make sure you have a `.gitignore` file that excludes:
- `node_modules/`
- `dist/`
- `.angular/`
- Other build artifacts

## Step 5: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `liynadah-portfolio` or `portfolio`)
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

## Step 6: Connect Local Repository to GitHub

Run these commands (replace `YOUR-USERNAME` and `YOUR-REPO-NAME`):

```bash
git add .
git commit -m "Initial commit - Portfolio website"

git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 7: Update baseHref in angular.json

The `baseHref` in `angular.json` should match your repository name:

```json
"baseHref": "/YOUR-REPO-NAME/"
```

## Step 8: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your Angular app for production
2. Deploy it to the `gh-pages` branch
3. Make it available on GitHub Pages

## Step 9: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

## Step 10: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

It may take a few minutes for the site to be live after deployment.

## Updating Your Website

Whenever you make changes:

1. Make your changes
2. Commit them:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Deploy again:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Issue: 404 errors on routes
- Make sure `baseHref` in `angular.json` matches your repository name
- Ensure you're using HashLocationStrategy or have a 404.html file

### Issue: Assets not loading
- Check that all assets are in the `src/assets/` folder
- Verify paths use relative paths or include the baseHref

### Issue: Build fails
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

## Quick Reference Commands

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Start development server
npm start

# Check Git status
git status

# Add and commit changes
git add .
git commit -m "Your message"
git push
```




