# Version Control & Deployment Guide for HTML Projects

## Table of Contents
1. [Using Git & GitHub for HTML Projects](#using-git--github-for-html-projects)
2. [Deploying Your Project](#deploying-your-project)
   - [GitHub Pages](#github-pages)
   - [Netlify](#netlify)
   - [Vercel](#vercel)
3. [Folder Structures](#folder-structures)
4. [File Naming Conventions](#file-naming-conventions)

---

## Using Git & GitHub for HTML Projects

Git is a version control system that helps you track changes to your code. GitHub is a platform that hosts Git repositories online.

### Basic Git Workflow

1. **Initialize a Git repository**:
   ```bash
   git init
   ```

2. **Check status of your files**:
   ```bash
   git status
   ```

3. **Add files to staging area**:
   ```bash
   git add index.html  # Add specific file
   git add .          # Add all files
   ```

4. **Commit changes**:
   ```bash
   git commit -m "Initial commit with basic HTML structure"
   ```

5. **Connect to GitHub**:
   - Create a new repository on GitHub
   - Link your local repository:
     ```bash
     git remote add origin https://github.com/yourusername/your-repo.git
     ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

### Example HTML Project Setup

1. Create project folder:
   ```bash
   mkdir my-html-project
   cd my-html-project
   ```

2. Create HTML file:
   ```html
   <!-- index.html -->
   <!DOCTYPE html>
   <html>
   <head>
       <title>My Project</title>
   </head>
   <body>
       <h1>Hello World!</h1>
   </body>
   </html>
   ```

3. Follow the Git workflow above to push to GitHub

---

## Deploying Your Project

### GitHub Pages

The simplest way to deploy a static HTML site.

1. Push your code to GitHub (as shown above)
2. Go to your repository settings
3. Find "Pages" in the left menu
4. Select the branch (usually `main` or `master`)
5. Click "Save"

Your site will be available at: `https://yourusername.github.io/your-repo/`

**Note**: Your main HTML file must be named `index.html` for GitHub Pages to recognize it.

### Netlify

Netlify offers more features than GitHub Pages.

1. Push your code to GitHub
2. Sign up at [netlify.com](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Leave build settings as default (for basic HTML)
6. Click "Deploy site"

Your site will get a random URL like `https://happy-mcclintock-123456.netlify.app/`

**Advanced**: You can add a `netlify.toml` file for custom settings:
```toml
[build]
  publish = "dist"  # If your files are in a dist folder
```

### Vercel

Vercel is great for modern web projects.

1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com/)
3. Click "New Project"
4. Select your repository
5. Leave settings as default
6. Click "Deploy"

Your site will get a URL like `https://your-repo.vercel.app/`

---

## Folder Structures

For simple HTML projects, a flat structure often works best:

```
my-project/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
└── images/
    └── logo.png
```

For larger projects:

```
my-project/
├── public/          # Files that will be deployed
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── css/
│       ├── js/
│       └── img/
├── src/             # Source files (if using build tools)
│   ├── scss/
│   ├── js/
│   └── images/
└── README.md
```

---

## File Naming Conventions

Good naming makes your project more maintainable:

1. **Use lowercase**:
   - Good: `about-us.html`
   - Bad: `AboutUs.HTML`

2. **Use hyphens for spaces**:
   - Good: `contact-page.html`
   - Bad: `contact page.html` or `contact_page.html`

3. **Be descriptive but concise**:
   - Good: `product-gallery.js`
   - Bad: `pg.js` or `script_for_product_gallery_animation.js`

4. **Main HTML files**:
   - Always name your main file `index.html`
   - Other pages: `about.html`, `contact.html`, etc.

5. **Asset files**:
   - CSS: `main.css` or `styles.css`
   - JavaScript: `app.js` or `main.js`
   - Images: `logo.png`, `hero-image.jpg`

### Example Structure with Good Naming

```
portfolio-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   ├── main.css
│   └── utilities.css
├── js/
│   ├── main.js
│   └── contact-form.js
└── images/
    ├── profile-pic.jpg
    ├── project-1-screenshot.png
    └── icons/
        ├── github-icon.svg
        └── twitter-icon.svg
```

---

## Tips for Beginners

1. **Commit often**: Small, frequent commits are better than huge ones
2. **Write good commit messages**: Explain what changed and why
3. **Keep your structure simple**: Don't overcomplicate folders for small projects
4. **Test deployments**: Always check your deployed site looks right
5. **Use .gitignore**: Exclude files like `.DS_Store` or `node_modules`

Example `.gitignore`:
```
.DS_Store
node_modules/
*.log
```