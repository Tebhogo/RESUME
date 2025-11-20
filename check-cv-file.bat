@echo off
title Check CV File
color 0E
cls

echo.
echo ========================================
echo   Checking for CV PDF File
echo ========================================
echo.

if exist "src\assets\cv\liynadah_hela_cv.pdf" (
    echo [SUCCESS] CV file found!
    echo.
    echo File location: src\assets\cv\liynadah_hela_cv.pdf
    echo.
    echo The download should work now!
) else (
    echo [ERROR] CV file NOT found!
    echo.
    echo Expected location:
    echo   src\assets\cv\liynadah_hela_cv.pdf
    echo.
    echo Full path:
    echo   %CD%\src\assets\cv\liynadah_hela_cv.pdf
    echo.
    echo ========================================
    echo   WHAT TO DO:
    echo ========================================
    echo.
    echo 1. Find your CV PDF file on your computer
    echo 2. Copy it
    echo 3. Paste it in: src\assets\cv\
    echo 4. Rename it to: liynadah_hela_cv.pdf
    echo 5. Run this script again to verify
    echo.
)

echo.
echo ========================================
echo.
pause



