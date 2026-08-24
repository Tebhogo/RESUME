# Liynadah Tebhogo Hela - Portfolio Website

A modern, responsive CV/Portfolio website built with Angular 17+ and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with orange/white/black color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Pages**: Home, About, Skills, Projects, Reports, and Contact pages
- **Dynamic Content**: Projects and skills loaded from JSON files
- **Contact Form**: Reactive form with validation
- **CV Download**: Download CV functionality from multiple locations
- **Smooth Navigation**: Sticky navbar with smooth transitions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- Angular CLI (v17 or higher)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your CV PDF:**
   - Place your CV file at: `src/assets/cv/liynadah_hela_cv.pdf`
   - The file should be named exactly: `liynadah_hela_cv.pdf`

## 🏃 Running the Application

### Development Server

Run the development server:

```bash
ng serve
```

Or using npm:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

### Production Build

Build the project for production:

```bash
ng build
```

Or:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── navigation/
│   │   └── project-card/
│   ├── pages/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── reports/
│   │   └── skills/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   ├── cv/
│   │   └── liynadah_hela_cv.pdf (add your CV here)
│   └── data/
│       ├── projects.json
│       └── skills.json
├── index.html
├── main.ts
└── styles.css
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- Primary Orange: `#f97316`
- Background: White
- Text: Black

### Content

- **Projects**: Edit `src/assets/data/projects.json`
- **Skills**: Edit `src/assets/data/skills.json`
- **Personal Info**: Update components directly or create a data file

## 📄 Pages

- **Home** (`/`): Hero section, featured projects, and core skills
- **About** (`/about`): Personal information and professional summary
- **Skills** (`/skills`): Complete list of technical skills
- **Projects** (`/projects`): All projects with details
- **Reports** (`/reports`): Business reports information
- **Contact** (`/contact`): Contact form and information

## 🔧 Technologies Used

- **Angular 17+**: Modern Angular framework with standalone components
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **RxJS**: Reactive programming
- **Angular Reactive Forms**: Form handling and validation

## 📝 Notes

- The contact form currently logs submissions to the console (no backend integration)
- Placeholder images are used for projects (you can add actual images to `src/assets/images/`)
- Ensure your CV PDF is placed in the correct location for download functionality

## 🐛 Troubleshooting

### CV Download Not Working
- Ensure the file exists at `src/assets/cv/liynadah_hela_cv.pdf`
- Check that the filename matches exactly (case-sensitive)

### Data Not Loading
- Verify JSON files are in `src/assets/data/`
- Check browser console for errors
- Ensure HttpClient is properly configured

### Styling Issues
- Run `npm install` to ensure Tailwind is installed
- Check that `tailwind.config.js` is configured correctly
- Verify `postcss.config.js` exists

## 📧 Contact

**Liyandah Tebhogo Hela**  
Analyst Programmer  
Harare, Zimbabwe

- Phone: +263 774 914 287 / +263 786 272 730
- Email: liyandahhella12@gmail.com

## 📜 License

This project is private and proprietary.

---

Built with ❤️ using Angular and Tailwind CSS




