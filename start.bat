@echo off
echo ========================================
echo Starting Portfolio Website...
echo ========================================
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting development server...
echo.
echo The website will be available at: http://localhost:4200
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
call npm start
pause



