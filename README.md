# Sharan Vivek Chunamari - Portfolio Website

A modern, visually stunning portfolio website showcasing data engineering expertise with premium design, smooth animations, and impactful visuals.

## 🌟 Features

- **Premium Design**: Dark theme with vibrant gradient accents (purple, blue, cyan)
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/svivekc/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

That's it! No build process required - it's a pure HTML/CSS/JavaScript website.

## 📦 Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub named `portfolio` (or any name you prefer)
2. Upload all files (`index.html`, `style.css`, `script.js`) to the repository
3. Go to repository **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at `https://svivekc.github.io/portfolio/`

### Option 2: Using Git Command Line

1. Initialize Git repository (if not already done):
   ```bash
   cd /Users/svc/.gemini/antigravity/scratch/portfolio-sharan
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. Create a new repository on GitHub (https://github.com/new)
   - Repository name: `portfolio` (or your preferred name)
   - Make it public
   - Don't initialize with README (we already have files)

3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/svivekc/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**

5. Your portfolio will be live at: `https://svivekc.github.io/portfolio/`

## 📁 Project Structure

```
portfolio-sharan/
├── index.html      # Main HTML structure
├── style.css       # Comprehensive CSS with animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🎨 Customization

### Colors

All colors are defined as CSS variables in `style.css`. To customize the color scheme, edit the `:root` section:

```css
:root {
    --color-gradient-start: #667eea;
    --color-gradient-mid: #764ba2;
    --color-gradient-end: #f093fb;
    /* ... more color variables */
}
```

### Content

Update your personal information in `index.html`:
- Hero section: Name, title, description
- About section: Bio and stats
- Skills section: Technical skills by category
- Experience section: Job history
- Projects section: Featured projects
- Education section: Degrees and certifications
- Contact section: Email and social links

### Typography

The portfolio uses **Inter** font from Google Fonts. To change the font, update the Google Fonts link in `index.html` and the `--font-family` variable in `style.css`.

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks, pure JS for performance
- **Google Fonts**: Inter font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

**Sharan Vivek Chunamari**
- Email: svivekc350@gmail.com
- LinkedIn: [linkedin.com/in/sharanvivek](https://www.linkedin.com/in/sharanvivek)
- GitHub: [github.com/svivekc](https://github.com/svivekc)

---

Built with 💜 by Sharan Vivek Chunamari
