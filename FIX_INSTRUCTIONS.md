# Fix "Invalid URL" Error - Step by Step

## The Problem
Your project folder has spaces in the name: `C:\Liyanda project\CV FOR LIYANDAh`
This causes Angular/Vite to fail when parsing URLs.

## ✅ EASIEST FIX: Create Symbolic Link

### Step 1: Run as Administrator
1. **Right-click** on `create-symlink.bat`
2. Select **"Run as Administrator"**
3. Follow the prompts

### Step 2: Use the New Path
After the symbolic link is created:

1. **Open PowerShell or Command Prompt**
2. **Navigate to the new path:**
   ```bash
   cd C:\LiyandahPortfolio
   ```
3. **Start the server:**
   ```bash
   npm start
   ```

That's it! The project will work from the path without spaces.

---

## Alternative: Manual Symbolic Link

If the batch file doesn't work, create it manually:

1. **Open PowerShell as Administrator**
2. **Run:**
   ```powershell
   mklink /D "C:\LiyandahPortfolio" "C:\Liyanda project\CV FOR LIYANDAh"
   ```
3. **Navigate to the new path:**
   ```powershell
   cd C:\LiyandahPortfolio
   ```
4. **Start the server:**
   ```powershell
   npm start
   ```

---

## Why This Works
- Symbolic links create an alias to your folder
- The alias has no spaces: `C:\LiyandahPortfolio`
- Angular/Vite can parse this path correctly
- All your files stay in the original location
- You just access them through the new path

---

## After Fixing
Once you're running from `C:\LiyandahPortfolio`:
- ✅ The error will be gone
- ✅ The server will start normally
- ✅ Your website will work at `http://localhost:4200`

---

## Need Help?
If you still get errors after using the symbolic link:
1. Make sure you're in the `C:\LiyandahPortfolio` folder
2. Try deleting `node_modules` and running `npm install` again
3. Check that the symbolic link was created correctly



