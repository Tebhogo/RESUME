@echo off
echo ========================================
echo GitHub Repository Setup Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo Step 1: Initializing Git repository...
if exist ".git" (
    echo Git repository already exists.
) else (
    call git init
    echo Git repository initialized.
)

echo.
echo Step 2: Creating .gitignore if it doesn't exist...
if not exist ".gitignore" (
    (
        echo node_modules/
        echo dist/
        echo .angular/
        echo *.log
        echo .DS_Store
        echo Thumbs.db
    ) > .gitignore
    echo .gitignore created.
) else (
    echo .gitignore already exists.
)

echo.
echo Step 3: Installing angular-cli-ghpages...
call npm install --save-dev angular-cli-ghpages

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo.
echo 1. Create a repository on GitHub:
echo    - Go to https://github.com
echo    - Click "+" ^> New repository
echo    - Name it (e.g., liynadah-portfolio)
echo    - DO NOT initialize with README
echo.
echo 2. Update angular.json:
echo    - Change baseHref to: "/YOUR-REPO-NAME/"
echo    - Replace YOUR-REPO-NAME with your actual repo name
echo.
echo 3. Connect to GitHub (replace YOUR-USERNAME and YOUR-REPO-NAME):
echo    git add .
echo    git commit -m "Initial commit"
echo    git branch -M main
echo    git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
echo    git push -u origin main
echo.
echo 4. Deploy using: deploy-to-github.bat
echo.
pause



