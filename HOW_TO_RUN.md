# How to Run the Portfolio Website

## Quick Start (3 Steps)

### Step 1: Open Terminal/PowerShell
Open PowerShell or Command Prompt in the project folder:
```
C:\Liyanda project\CV FOR LIYANDAh
```

### Step 2: Install Dependencies (First Time Only)
```bash
npm install
```
Wait for installation to complete (takes 2-5 minutes).

### Step 3: Start the Server
```bash
ng serve
```
OR
```bash
npm start
```

### Step 4: Open Browser
Once you see:
```
** Angular Live Development Server is listening on localhost:4200 **
```

Open your browser and go to:
```
http://localhost:4200
```

---

## Alternative: If `ng serve` doesn't work

If you get an error that `ng` is not recognized, use:
```bash
npx ng serve
```

---

## Stop the Server

Press `Ctrl + C` in the terminal to stop the server.

---

## Troubleshooting

**Problem:** "ng: command not found"
**Solution:** Use `npx ng serve` instead

**Problem:** Port 4200 is already in use
**Solution:** Use a different port: `ng serve --port 4201`

**Problem:** Dependencies not installed
**Solution:** Run `npm install` first

---

## What You'll See

✅ Home page with your information
✅ Navigation menu (Home, About, Skills, Projects, Reports, Contact)
✅ All pages working
✅ Responsive design
✅ Contact form

The website will automatically reload when you make changes!



