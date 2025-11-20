# Solution for "Invalid URL" Error with Spaces in Path

## The Problem
Your project path has spaces: `C:\Liyanda project\CV FOR LIYANDAh`
This causes Vite/Angular to fail when parsing URLs because spaces need special handling.

## Solutions (Try in Order)

### Solution 1: Use a Symbolic Link (Recommended - No File Moving)
Create a symbolic link to a path without spaces:

1. **Open PowerShell as Administrator**
2. **Run this command:**
   ```powershell
   mklink /D "C:\LiyandahPortfolio" "C:\Liyanda project\CV FOR LIYANDAh"
   ```
3. **Navigate to the new path:**
   ```powershell
   cd C:\LiyandahPortfolio
   ```
4. **Run the project from there:**
   ```powershell
   npm start
   ```

### Solution 2: Move Project to Path Without Spaces
1. **Create a new folder without spaces:**
   - Example: `C:\Projects\LiyandahPortfolio`
2. **Copy or move all files** from the current location to the new location
3. **Open terminal in the new location**
4. **Run:**
   ```bash
   npm install
   npm start
   ```

### Solution 3: Use Short Path Name (8.3 Format)
Windows has short path names without spaces. Find it:

1. **Open PowerShell in the project folder**
2. **Run:**
   ```powershell
   (Get-Item .).FullName
   ```
3. **Or use the short path:**
   ```powershell
   cmd /c for %I in (.) do @echo %~sI
   ```

### Solution 4: Workaround - Use Different Port
Sometimes changing the port helps:

1. **Edit `angular.json`** - change port from 4200 to 4201
2. **Or run:**
   ```bash
   ng serve --port 4201
   ```

## Quick Fix Script
I've created `vite.config.ts` which should help, but the best solution is to avoid spaces in the path.

## Recommended Action
**Use Solution 1 (Symbolic Link)** - It's the easiest and doesn't require moving files!




