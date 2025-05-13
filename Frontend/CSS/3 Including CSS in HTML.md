Here's the raw Markdown (`.md`) file for including CSS in HTML with beginner-friendly examples:

```markdown
# Including CSS in HTML

## Three Ways to Add CSS

### 1. Inline Styles (Highest Priority)
Add styles directly to HTML elements using the `style` attribute:

```html
<h1 style="color: red; font-size: 24px;">Hello World!</h1>
<p style="background: yellow; padding: 10px;">This is a highlighted paragraph.</p>
```

**When to use:**
- Quick testing
- Single-element overrides
- Dynamic styles with JavaScript

**Limitations:**
- Hard to maintain
- Not reusable
- Mixes content with presentation

---

### 2. Internal/Embedded Styles
Add CSS within `<style>` tags in the HTML `<head>`:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .warning {
      color: orange;
      font-weight: bold;
    }
    #main-header {
      background: #333;
      color: white;
    }
  </style>
</head>
<body>
  <h1 id="main-header">Welcome</h1>
  <p class="warning">This is important!</p>
</body>
</html>
```

**When to use:**
- Small projects
- Single-page websites
- When you can't use external files

**Advantages over inline:**
- Reusable styles
- Better organization
- Still loads with the HTML

---

### 3. External Stylesheets (Best Practice)
Link to a separate `.css` file:

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

**styles.css:**
```css
/* Global styles */
body {
  margin: 0;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Navigation */
nav {
  background: #f8f8f8;
  padding: 15px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #4CAF50;
  color: white;
  text-decoration: none;
}
```

**When to use:**
- Almost always (best practice)
- Multi-page websites
- Team projects

**Benefits:**
- Reusable across pages
- Better performance (caching)
- Separation of concerns
- Easier maintenance

---

## Using @import

Import other CSS files within a stylesheet:

```css
/* main.css */
@import url('reset.css');
@import url('typography.css');

body {
  /* Your styles */
}
```

**Note:** 
- Creates additional HTTP requests
- Slower than using multiple `<link>` tags
- Useful for organizing large projects

---

## CSS Precedence Rules

When styles conflict, this priority order applies:

1. **Inline styles** (style attribute)
2. **Internal styles** (in `<style>` tags)
3. **External styles** (linked .css files)
4. **Browser defaults**

```html
<head>
  <style>
    p { color: blue; } /* Internal */
  </style>
  <link rel="stylesheet" href="external.css"> 
  <!-- external.css: p { color: green; } -->
</head>
<body>
  <p style="color: red;">What color am I?</p> <!-- Wins: red (inline) -->
  <p>What color am I?</p> <!-- blue (internal beats external) -->
</body>
```

---

## Best Practices

1. **Use external stylesheets** for most projects
2. **Limit inline styles** to JavaScript-controlled styles
3. **Place CSS in `<head>`** for faster rendering
4. **Order matters**: Later rules override earlier ones
5. **Use meaningful names** for classes/IDs
6. **Mobile-first**: Put media queries at the end

```html
<!-- Recommended structure -->
<head>
  <!-- External CSS first -->
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="main.css">
  
  <!-- Internal CSS only if necessary -->
  <style>
    /* Critical above-the-fold styles */
  </style>
</head>
```

---

## Common Mistakes to Avoid

❌ **Overusing !important**  
```css
.text { color: blue !important; } /* Hard to override */
```

❌ **Deeply nested selectors**  
```css
/* Bad */
div#main ul.nav li a { ... }

/* Better */
.nav-link { ... }
```

❌ **Mixing units**  
```css
/* Inconsistent */
.container {
  width: 100%;
  padding: 15px;
  margin: 2em;
}
```

❌ **Not using shorthand**  
```css
/* Verbose */
p {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}

/* Better */
p {
  margin: 10px 15px;
}
```

---

## Practical Example

**File structure:**
```
project/
├── index.html
├── css/
│   ├── reset.css
│   ├── typography.css
│   └── main.css
└── images/
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Content -->
</body>
</html>
```

This structure keeps your code organized and maintainable as your project grows.
```