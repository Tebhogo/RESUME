@echo off
echo ========================================
echo GitHub Pages Deployment Script
echo ========================================
echo.

REM Check if angular-cli-ghpages is installed
if not exist "node_modules\angular-cli-ghpages" (
    echo Installing angular-cli-ghpages...
    call npm install --save-dev angular-cli-ghpages
    echo.
)

echo Step 1: Building for production...
call npm run build -- --configuration production
if errorlevel 1 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Step 2: Deploying to GitHub Pages...
echo.
echo IMPORTANT: Make sure you have:
echo 1. Created a GitHub repository
echo 2. Updated baseHref in angular.json to match your repo name
echo 3. Connected your local repo to GitHub
echo.
pause

call npx angular-cli-ghpages --dir=dist/liynadah-portfolio/browser

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Settings ^> Pages
echo 3. Select branch: gh-pages
echo 4. Select folder: / (root)
echo 5. Save
echo.
echo Your site will be available at:
echo https://Tebhogo.github.io/RESUME/
echo.
pause

