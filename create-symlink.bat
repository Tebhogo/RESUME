@echo off
title Create Symbolic Link - Fix Path Spaces Issue
color 0E
cls

echo.
echo ========================================
echo   Create Symbolic Link
echo   (Fixes spaces in path issue)
echo ========================================
echo.
echo This will create a symbolic link at:
echo   C:\LiyandahPortfolio
echo.
echo That points to your current project folder.
echo.
echo You can then run the project from C:\LiyandahPortfolio
echo without any path space issues!
echo.
echo NOTE: You need to run this as Administrator!
echo.
pause

echo.
echo Creating symbolic link...
echo.

mklink /D "C:\LiyandahPortfolio" "%~dp0"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   SUCCESS!
    echo ========================================
    echo.
    echo Symbolic link created at: C:\LiyandahPortfolio
    echo.
    echo Now you can:
    echo   1. Navigate to: cd C:\LiyandahPortfolio
    echo   2. Run: npm start
    echo.
) else (
    echo.
    echo ========================================
    echo   ERROR!
    echo ========================================
    echo.
    echo Failed to create symbolic link.
    echo.
    echo Make sure you:
    echo   1. Run this file as Administrator (Right-click -^> Run as Administrator)
    echo   2. The folder C:\LiyandahPortfolio doesn't already exist
    echo.
)

pause




