# HTML Best Practices for Modern Web Development

## Writing Clean, Maintainable HTML

### 1. Semantic Structure
```html
<!-- Good -->
<article>
  <header>
    <h2>Article Title</h2>
    <p class="meta">Published on <time datetime="2023-06-15">June 15, 2023</time></p>
  </header>
  <section>
    <p>Article content...</p>
  </section>
</article>

<!-- Bad -->
<div class="article">
  <div class="header">
    <div class="title">Article Title</div>
  </div>
  <div class="content">
    <div class="text">Article content...</div>
  </div>
</div>
```

### 2. Consistent Formatting
- Use 2-space indentation
- Always include closing tags
- Lowercase all element and attribute names
- Quote all attribute values

### 3. Modular Components
Break HTML into reusable components:
```html
<!-- navigation.component.html -->
<nav class="main-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

### 4. Commenting Strategy
```html
<!-- Main Product Grid Section -->
<section class="product-grid">
  <!-- Product Card (repeats) -->
  <article class="product-card">
    ...
  </article>
</section>
```

### 5. Validation
Always validate your HTML using:
- [W3C Validator](https://validator.w3.org/)
- IDE plugins
- Build tools like HTMLHint

## Accessibility (WCAG Guidelines)

### Core Principles
1. **Perceivable**
   ```html
   <img src="chart.png" alt="Sales growth chart showing 15% increase Q1 2023">
   <video>
     <track kind="captions" src="captions.vtt" srclang="en">
   </video>
   ```

2. **Operable**
   ```html
   <button onclick="submitForm()" tabindex="0">Submit</button>
   <!-- Skip navigation link -->
   <a href="#maincontent" class="skip-link">Skip to main content</a>
   ```

3. **Understandable**
   ```html
   <form>
     <label for="email">Email address</label>
     <input type="email" id="email" aria-describedby="email-help">
     <small id="email-help">We'll never share your email.</small>
   </form>
   ```

4. **Robust**
   ```html
   <!-- Use proper HTML5 doctype and lang attribute -->
   <!DOCTYPE html>
   <html lang="en">
   ```

### Common ARIA Patterns
```html
<!-- Navigation landmark -->
<nav aria-label="Main navigation">...</nav>

<!-- Live region for dynamic content -->
<div aria-live="polite" id="notifications"></div>

<!-- Button with expanded state -->
<button aria-expanded="false" aria-controls="dropdown-menu">
  Menu
</button>
<ul id="dropdown-menu" hidden>
  <li><a href="/item1">Item 1</a></li>
</ul>
```

## SEO Optimization Tips

### 1. Semantic HTML Structure
```html
<!-- Use proper heading hierarchy -->
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### 2. Metadata Optimization
```html
<head>
  <title>Best HTML Practices | Web Development Guide</title>
  <meta name="description" content="Learn professional HTML practices for clean code, accessibility, and SEO optimization.">
  <meta name="keywords" content="HTML, web development, accessibility, SEO">
  <meta property="og:title" content="Best HTML Practices">
  <link rel="canonical" href="https://example.com/html-best-practices">
</head>
```

### 3. URL Structure
```html
<!-- Good -->
<a href="/blog/html-best-practices">HTML Best Practices</a>

<!-- Bad -->
<a href="/p=1234">Click here</a>
```

### 4. Performance Considerations
```html
<!-- Lazy load non-critical images -->
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="Description">

<!-- Preload critical resources -->
<link rel="preload" href="styles.css" as="style">
```

## Mobile-First and Responsive HTML Structure

### 1. Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 2. Responsive Images
```html
<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image example">
</picture>
```

### 3. Flexible Grids
```html
<div class="grid-container">
  <article class="grid-item">...</article>
  <article class="grid-item">...</article>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
</style>
```

### 4. Touch Targets
```html
<!-- Minimum 48x48px touch targets -->
<button style="min-width: 48px; min-height: 48px; padding: 12px;">
  Menu
</button>
```

### 5. Responsive Tables
```html
<div class="table-container">
  <table>
    <caption>Monthly Sales</caption>
    <thead>
      <tr>
        <th scope="col">Month</th>
        <th scope="col">Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Month">January</td>
        <td data-label="Sales">$5,000</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  @media (max-width: 600px) {
    table { border: 0; }
    table caption { font-size: 1.3em; }
    table thead { display: none; }
    table tr { 
      display: block;
      margin-bottom: 1em;
      border: 1px solid #ddd;
    }
    table td {
      display: block;
      text-align: right;
      border-bottom: 1px solid #eee;
    }
    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
</style>
```

## Progressive Enhancement Strategy

### Base Experience
```html
<form id="search-form">
  <input type="text" name="query">
  <input type="submit" value="Search">
</form>
```

### Enhanced Experience
```html
<form id="search-form">
  <div class="search-container">
    <input type="search" name="query" placeholder="Search products..." 
           aria-label="Search through site content">
    <button type="submit" aria-label="Submit search">
      <svg><!-- Search icon --></svg>
    </button>
  </div>
  <datalist id="search-suggestions">
    <option value="HTML">
    <option value="CSS">
  </datalist>
</form>

<script>
  if ('showPicker' in HTMLInputElement.prototype) {
    document.querySelector('input[type="search"]').list = 'search-suggestions';
  }
</script>
```

## Performance Optimization

### Critical CSS Inlining
```html
<head>
  <style>
    /* Inlined critical CSS */
    .header { position: fixed; top: 0; }
    .main-content { margin-top: 80px; }
  </style>
  <!-- Load non-critical CSS asynchronously -->
  <link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
</head>
```

### Resource Hints
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<!-- Prefetch resources for next navigation -->
<link rel="prefetch" href="/about.html" as="document">
```

By following these best practices, you'll create HTML that is:
- Easier to maintain and debug
- More accessible to all users
- Better ranked by search engines
- Optimized for all device sizes
- More performant and user-friendly