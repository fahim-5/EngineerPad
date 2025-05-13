# Project-Based Learning Guide for HTML/CSS Beginners

## Table of Contents
1. [Project 1: Portfolio Landing Page](#project-1-portfolio-landing-page)
2. [Project 2: Blog Page with Semantic HTML](#project-2-blog-page-with-semantic-html)
3. [Project 3: Interactive Form with Validations](#project-3-interactive-form-with-validations)
4. [Project 4: Responsive Navigation Menu](#project-4-responsive-navigation-menu)

---

## Project 1: Portfolio Landing Page

### Project Structure
```
portfolio-landing/
├── index.html          # Main landing page
├── about.html          # About me section
├── projects/           # Project showcase
│   └── project1.html   # Individual project pages
├── css/
│   ├── styles.css      # Main styles
│   └── utilities.css   # Helper classes
├── js/
│   └── main.js         # Basic interactivity
└── assets/
    ├── images/         # Portfolio images
    ├── icons/          # SVG icons
    └── resume.pdf      # Downloadable resume
```

### Key Features to Include
- Hero section with name and brief introduction
- Skills/technologies section with icons
- Project showcase grid
- Contact information section
- Responsive design for all screen sizes

### Learning Outcomes
- Basic HTML structure
- CSS styling fundamentals
- Image optimization
- Simple page linking

---

## Project 2: Blog Page with Semantic HTML

### Project Structure
```
semantic-blog/
├── index.html          # Blog home with article previews
├── articles/           # Individual blog posts
│   ├── post-1.html
│   └── post-2.html
├── css/
│   ├── blog.css        # Blog-specific styles
│   └── typography.css  # Text styling
├── images/             # Blog post images
└── about-author.html   # Author bio page
```

### Semantic Elements to Use
- `<header>` for blog title and navigation
- `<main>` for primary content
- `<article>` for each blog post
- `<section>` for content groupings
- `<aside>` for related content/widgets
- `<footer>` for copyright and links

### Learning Outcomes
- Proper HTML5 semantic structure
- Content hierarchy best practices
- Accessibility considerations
- Basic typography styling

---

## Project 3: Interactive Form with Validations

### Project Structure
```
form-project/
├── index.html          # Main form page
├── success.html        # Submission confirmation
├── css/
│   ├── form.css        # Form-specific styles
│   └── validation.css  # Error states
└── js/
    ├── validation.js   # Client-side validation
    └── form-handler.js # Submission logic
```

### Form Components to Include
- Text inputs with proper labels
- Radio buttons and checkboxes
- Select dropdown
- Date picker
- File upload
- Submit/reset buttons
- Real-time validation feedback

### Learning Outcomes
- Form structure and accessibility
- Client-side validation techniques
- Error message styling
- Basic form submission handling

---

## Project 4: Responsive Navigation Menu

### Project Structure
```
responsive-nav/
├── index.html          # Demo page with nav
├── css/
│   ├── navigation.css  # Nav-specific styles
│   └── breakpoints.css # Media queries
└── js/
    └── menu-toggle.js  # Mobile menu functionality
```

### Responsive Patterns to Implement
- Horizontal desktop menu
- Hamburger menu for mobile
- Dropdown/submenu support
- Active state styling
- Smooth transitions
- Accessibility considerations (keyboard nav, ARIA)

### Learning Outcomes
- CSS media queries
- Mobile-first approach
- JavaScript menu toggle
- Responsive design principles
- Viewport meta tag usage

---

## General Project Tips

1. **Start Simple**: Begin with basic functionality then enhance
2. **Mobile First**: Design for small screens first, then scale up
3. **Progressive Enhancement**: Ensure core works without JavaScript
4. **Consistent Structure**: Maintain similar folder patterns across projects
5. **Version Control**: Use Git from the beginning for each project

For each project:
1. Plan your structure before coding
2. Create wireframes or sketches
3. Build the HTML structure first
4. Add styling progressively
5. Implement interactivity last
6. Test at each development stage