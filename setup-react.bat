@echo off
echo ========================================
echo React Portfolio Setup Script
echo ========================================
echo.

echo Step 1: Backing up Angular files...
if not exist "backup-angular" mkdir backup-angular
if exist "package.json" copy "package.json" "backup-angular\package.json.backup"
if exist "vite.config.ts" copy "vite.config.ts" "backup-angular\vite.config.ts.backup"
if exist "index.html" copy "index.html" "backup-angular\index.html.backup"
if exist "tailwind.config.js" copy "tailwind.config.js" "backup-angular\tailwind.config.js.backup"
if exist "postcss.config.js" copy "postcss.config.js" "backup-angular\postcss.config.js.backup"
if exist "src" xcopy "src" "backup-angular\src" /E /I /Y
echo [OK] Angular files backed up
echo.

echo Step 2: Installing React dependencies...
call npm install react react-dom react-router-dom
call npm install --save-dev @vitejs/plugin-react vite @types/react @types/react-dom gh-pages
echo [OK] Dependencies installed
echo.

echo Step 3: Setting up React configuration...
if exist "package-react.json" (
    copy "package-react.json" "package.json" /Y
    echo [OK] package.json updated
)
if exist "vite-react.config.js" (
    copy "vite-react.config.js" "vite.config.js" /Y
    echo [OK] vite.config.js updated
)
if exist "index-react.html" (
    copy "index-react.html" "index.html" /Y
    echo [OK] index.html updated
)
if exist "tailwind-react.config.js" (
    copy "tailwind-react.config.js" "tailwind.config.js" /Y
    echo [OK] tailwind.config.js updated
)
if exist "postcss-react.config.js" (
    copy "postcss-react.config.js" "postcss.config.js" /Y
    echo [OK] postcss.config.js updated
)
if exist "404-react.html" (
    copy "404-react.html" "404.html" /Y
    echo [OK] 404.html updated
)
echo.

echo Step 4: Setting up React source files...
if exist "src-react" (
    if exist "src" rmdir /S /Q "src"
    xcopy "src-react" "src" /E /I /Y
    echo [OK] React source files copied
)
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Open: http://localhost:5173
echo.
echo To build for production:
echo   npm run build
echo.
echo To deploy to GitHub Pages:
echo   npm run deploy
echo.
pause




