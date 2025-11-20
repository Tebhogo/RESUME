@echo off
title Portfolio Website - Install and Start
color 0B
cls

echo.
echo ========================================
echo   Portfolio Website Setup
echo ========================================
echo.
echo Step 1: Installing dependencies...
echo This may take a few minutes...
echo.

cd /d "%~dp0"
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Installation failed!
    echo Please check the error messages above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo Step 2: Starting development server...
echo.
echo Website will be available at:
echo   http://localhost:4200
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm start

pause




