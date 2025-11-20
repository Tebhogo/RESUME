@echo off
echo ========================================
echo Push to GitHub Repository
echo ========================================
echo.
echo Repository: git@github.com:Tebhogo/RESUME.git
echo.

echo Step 1: Adding all files...
call git add .
if errorlevel 1 (
    echo Failed to add files!
    pause
    exit /b 1
)

echo.
echo Step 2: Committing changes...
call git commit -m "Portfolio website - Angular 17 with Tailwind CSS"
if errorlevel 1 (
    echo Failed to commit! You may need to configure Git user:
    echo   git config --global user.name "Your Name"
    echo   git config --global user.email "your.email@example.com"
    pause
    exit /b 1
)

echo.
echo Step 3: Setting main branch...
call git branch -M main

echo.
echo Step 4: Pushing to GitHub...
call git push -u origin main
if errorlevel 1 (
    echo.
    echo Push failed! This might be because:
    echo 1. The repository already has content - you may need to pull first
    echo 2. SSH key is not set up - use HTTPS instead
    echo.
    echo To use HTTPS instead, run:
    echo   git remote set-url origin https://github.com/Tebhogo/RESUME.git
    echo   Then run this script again
    pause
    exit /b 1
)

echo.
echo ========================================
echo Successfully pushed to GitHub!
echo ========================================
echo.
echo Next step: Deploy to GitHub Pages
echo Run: deploy-to-github.bat
echo.
pause



