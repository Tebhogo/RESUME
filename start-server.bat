@echo off
title Portfolio Website - Development Server
color 0A
cls

echo.
echo ========================================
echo   Liynadah Portfolio Website
echo   Development Server
echo ========================================
echo.
echo Starting server...
echo.
echo Website will be available at:
echo   http://localhost:4200
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

cd /d "%~dp0"
call npm start

pause



