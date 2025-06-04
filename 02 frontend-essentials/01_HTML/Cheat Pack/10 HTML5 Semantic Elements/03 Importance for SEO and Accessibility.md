# Replacing Non-Semantic Elements with Semantic HTML5

The shift from non-semantic `<div>` and `<span>` elements to semantic HTML5 elements is one of the most important improvements in modern web development. Here's how to properly replace non-semantic markup:

## Common Replacements

### 1. Replace Generic Wrappers
**Before (Non-semantic):**
```html
<div id="header">...</div>
<div id="main">...</div>
<div id="footer">...</div>
```

**After (Semantic):**
```html
<header>...</header>
<main>...</main>
<footer>...</footer>
```

### 2. Replace Navigation Containers
**Before:**
```html
<div class="nav">
  <ul>...</ul>
</div>
```

**After:**
```html
<nav>
  <ul>...</ul>
</nav>
```

### 3. Replace Content Sections
**Before:**
```html
<div class="article">
  <div class="article-header">...</div>
  <div class="article-body">...</div>
</div>
```

**After:**
```html
<article>
  <header>...</header>
  <section>...</section>
</article>
```

### 4. Replace Sidebar Containers
**Before:**
```html
<div class="sidebar">...</div>
```

**After:**
```html
<aside>...</aside>
```

## When to Keep Non-Semantic Elements

1. **Pure Styling Containers**
   - When you only need an element for CSS styling or JavaScript hooks
   ```html
   <div class="grid-container">
     <!-- semantic elements inside -->
   </div>
   ```

2. **Text Wrapping Without Meaning**
   - For inline styling without semantic importance
   ```html
   <p>This is <span class="highlight">important</span> text</p>
   ```

3. **Legacy Browser Support**
   - When supporting very old browsers that don't recognize HTML5 elements
   (though polyfills can usually solve this)

## Migration Strategy

1. **Start With Major Structural Elements**
   ```html
   <!-- Before -->
   <body>
     <div id="container">
       <div id="header">...</div>
       <div id="content">...</div>
       <div id="sidebar">...</div>
       <div id="footer">...</div>
     </div>
   </body>

   <!-- After -->
   <body>
     <header>...</header>
     <main>...</main>
     <aside>...</aside>
     <footer>...</footer>
   </body>
   ```

2. **Progressively Enhance Components**
   ```html
   <!-- Before -->
   <div class="product-card">
     <div class="product-title">...</div>
     <div class="product-description">...</div>
   </div>

   <!-- After -->
   <article class="product-card">
     <h2 class="product-title">...</h2>
     <p class="product-description">...</p>
   </article>
   ```

3. **Update CSS Selectors**
   ```css
   /* Before */
   #header, #footer { ... }
   .article { ... }

   /* After */
   header, footer { ... }
   article { ... }
   ```

## Benefits of Replacement

1. **Improved Accessibility**
   - Screen readers can navigate by landmarks
   - Better default focus order

2. **Enhanced SEO**
   - Search engines better understand content structure
   - Clearer content hierarchy

3. **More Maintainable Code**
   - Self-documenting structure
   - Easier to understand relationships

4. **Future-Proofing**
   - Built for evolving web standards
   - Better compatibility with new technologies

## Advanced Scenarios

### 1. Nested Semantic Elements
```html
<article>
  <header>
    <nav>...</nav> <!-- Article-specific navigation -->
  </header>
  <section>
    <aside>...</aside> <!-- Content-related aside -->
  </section>
</article>
```

### 2. Wrapping Semantic Groups
```html
<div class="article-list"> <!-- Styling wrapper -->
  <article>...</article>
  <article>...</article>
</div>
```

### 3. Hybrid Approach (When Needed)
```html
<div class="card-container"> <!-- Layout container -->
  <article class="card">
    <header>...</header>
    <div class="card-content"> <!-- Complex content needs -->
      ...
    </div>
  </article>
</div>
```

## Tools for Conversion

1. **HTML Validators** (W3C)
2. **Accessibility Checkers** (axe, WAVE)
3. **Semantic HTML Linters** (HTMLHint)
4. **Browser Developer Tools** (Inspect element relationships)

Remember: The goal isn't to eliminate all `<div>` and `<span>` elements, but to use semantic elements where they add meaning while keeping non-semantic elements for pure presentation needs.