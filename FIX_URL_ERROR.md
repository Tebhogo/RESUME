# Fix for "Invalid URL" Error

## The Problem
The error occurs because the development server needs to be restarted after configuration changes, or there might be cached files causing issues.

## Solution

### Option 1: Restart the Server (Recommended)
1. **Stop the current server**: Press `Ctrl + C` in the terminal window
2. **Wait 5 seconds**
3. **Start again**: Double-click `start-server.bat` or run `npm start`

### Option 2: Clean Restart
1. **Stop the server**: Press `Ctrl + C`
2. **Clear cache**: Delete the `.angular` folder (if it exists)
3. **Restart**: Run `npm start` or use `start-server.bat`

### Option 3: Use the Restart Script
1. **Double-click**: `restart-server.bat`
2. This will automatically stop any running servers and restart

## If Error Persists

The error might be caused by:
- Spaces in the project path (the folder name has spaces)
- Cached build files

**Try this:**
1. Stop the server
2. Delete these folders (if they exist):
   - `.angular`
   - `node_modules/.cache`
   - `dist`
3. Run `npm install` again
4. Run `npm start`

## Alternative: Move Project to Path Without Spaces

If the error continues, consider moving the project to a path without spaces:
- From: `C:\Liyanda project\CV FOR LIYANDAh`
- To: `C:\LiyandahPortfolio` or `C:\Projects\Portfolio`

Then run `npm install` and `npm start` from the new location.




