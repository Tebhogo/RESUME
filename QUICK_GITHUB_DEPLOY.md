# Quick Guide: Deploy to GitHub Pages

## 🚀 Quick Start (3 Steps)

### Step 1: Run Setup Script
Double-click `setup-github.bat` to initialize Git and install deployment tools.

### Step 2: Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name it: `liynadah-portfolio` (or your preferred name)
4. **DO NOT** check "Initialize with README"
5. Click "Create repository"

### Step 3: Connect & Deploy

**Option A: Using Batch Files (Easiest)**
1. Run `setup-github.bat` (if you haven't already)
2. Update `angular.json` - change `baseHref` to match your repo name:
   ```json
   "baseHref": "/liynadah-portfolio/"
   ```
3. Connect to GitHub (replace YOUR-USERNAME):
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/liynadah-portfolio.git
   git push -u origin main
   ```
4. Run `deploy-to-github.bat` to deploy

**Option B: Manual Commands**
```bash
# Install deployment tool
npm install --save-dev angular-cli-ghpages

# Build and deploy
npm run deploy
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` → `/ (root)`
5. Save

## 📍 Your Website URL
After deployment, your site will be at:
```
https://Tebhogo.github.io/RESUME/
```

## 🔄 Updating Your Site
After making changes:
```bash
git add .
git commit -m "Update description"
git push
npm run deploy
```

## ⚠️ Important Notes

1. **Update baseHref**: In `angular.json`, change `baseHref` to match your repository name
2. **Repository Name**: If you use a different name, update it in:
   - `angular.json` (baseHref)
   - `package.json` (deploy script)
3. **First Time**: It may take 5-10 minutes for GitHub Pages to activate

## 🐛 Troubleshooting

**404 Errors**: Make sure `baseHref` in `angular.json` matches your repo name exactly (including the slashes)

**Build Fails**: Run `npm install` first, then try again

**Assets Not Loading**: Check that all files are in `src/assets/` folder

