# Deploy Your Portfolio to GitHub Pages

Your project is configured for the repository: **git@github.com:Tebhogo/RESUME.git**

## 🚀 Quick Deployment Steps

### Step 1: Push Code to GitHub

**Option A: Using the batch file (Easiest)**
1. Double-click `push-to-github.bat`
2. If it asks for Git user configuration, run:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
   Then run `push-to-github.bat` again

**Option B: Manual commands**
```bash
git add .
git commit -m "Portfolio website - Angular 17 with Tailwind CSS"
git branch -M main
git push -u origin main
```

**Note:** If you get an error about SSH keys, use HTTPS instead:
```bash
git remote set-url origin https://github.com/Tebhogo/RESUME.git
git push -u origin main
```

### Step 2: Install Deployment Tool

```bash
npm install --save-dev angular-cli-ghpages
```

### Step 3: Deploy to GitHub Pages

**Option A: Using the batch file**
- Double-click `deploy-to-github.bat`

**Option B: Using npm command**
```bash
npm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to https://github.com/Tebhogo/RESUME
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**:
   - Select **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Access Your Website

Your portfolio will be live at:
**https://Tebhogo.github.io/RESUME/**

It may take 5-10 minutes for the site to become available after deployment.

## 🔄 Updating Your Site

After making changes to your code:

1. **Push changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

2. **Deploy again:**
   ```bash
   npm run deploy
   ```
   OR double-click `deploy-to-github.bat`

## ⚙️ Configuration

- **Repository:** git@github.com:Tebhogo/RESUME.git
- **Base URL:** /RESUME/
- **Website URL:** https://Tebhogo.github.io/RESUME/

## 🐛 Troubleshooting

### SSH Key Issues
If you get SSH authentication errors, switch to HTTPS:
```bash
git remote set-url origin https://github.com/Tebhogo/RESUME.git
```

### 404 Errors on Routes
Make sure `baseHref` in `angular.json` is set to `/RESUME/` (already configured)

### Build Fails
```bash
npm install
npm run build
```

### Assets Not Loading
- Check that all assets are in `src/assets/` folder
- Verify file paths are correct

## 📝 Important Files

- `angular.json` - BaseHref configured for `/RESUME/`
- `package.json` - Deploy script configured
- `.gitignore` - Excludes node_modules and build files



