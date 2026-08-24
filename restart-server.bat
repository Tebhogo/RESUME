@echo off
title Portfolio Website - Restart Server
color 0C
cls

echo.
echo ========================================
echo   Stopping any running servers...
echo ========================================
echo.

taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   Starting Development Server
echo ========================================
echo.

cd /d "%~dp0"
call npm start

pause




