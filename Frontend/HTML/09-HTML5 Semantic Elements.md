# HTML5 Semantic Elements: Structure with Meaning

Semantic elements in HTML5 provide meaningful structure to web documents, making them more understandable for both browsers and developers. Unlike generic `div` elements, semantic tags clearly describe their purpose and content.

## Core Semantic Elements

### 1. `<header>`
Represents introductory content, typically containing:
- Site logo
- Main navigation
- Page title
- Search form

```html
<header>
  <img src="logo.png" alt="Company Logo">
  <h1>Welcome to Our Website</h1>
  <nav>
    <!-- Navigation links -->
  </nav>
</header>
```

### 2. `<nav>`
Defines a section with navigation links (can appear multiple times):

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### 3. `<main>`
Contains the primary content of the document (only one per page):

```html
<main>
  <h2>Featured Products</h2>
  <!-- Primary content goes here -->
</main>
```

### 4. `<article>`
Represents self-contained, independently distributable content:
- Blog posts
- News articles
- Forum posts
- Product cards

```html
<article>
  <h3>How to Bake Perfect Cookies</h3>
  <p>Published on <time datetime="2023-05-15">May 15, 2023</time></p>
  <p>Here's our secret recipe for perfect cookies every time...</p>
</article>
```

### 5. `<section>`
Groups thematically related content with typically a heading:

```html
<section>
  <h2>Customer Testimonials</h2>
  <article>
    <h3>John's Experience</h3>
    <p>Great service!</p>
  </article>
  <article>
    <h3>Sarah's Review</h3>
    <p>Will buy again!</p>
  </article>
</section>
```

### 6. `<aside>`
Contains content tangentially related to main content:
- Sidebars
- Pull quotes
- Advertising
- Related links

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="/blog/cake">Cake Baking Tips</a></li>
    <li><a href="/blog/pie">Perfect Pie Crust</a></li>
  </ul>
</aside>
```

### 7. `<footer>`
Contains information about its containing element:
- Copyright info
- Contact details
- Sitemap links
- Social media links

```html
<footer>
  <p>&copy; 2023 Baking Company</p>
  <address>Contact us at <a href="mailto:info@example.com">info@example.com</a></address>
</footer>
```

## Importance for SEO and Accessibility

### SEO Benefits:
1. **Better Content Understanding**: Search engines can better understand your content structure
2. **Improved Ranking**: Proper semantic markup is a ranking factor
3. **Rich Snippets**: Enables enhanced search results displays
4. **Content Hierarchy**: Helps search engines identify important content

### Accessibility Advantages:
1. **Screen Reader Navigation**: Users can jump between sections easily
2. **Landmark Roles**: Automatic ARIA landmark roles are assigned
   - `<header>` → `banner`
   - `<nav>` → `navigation`
   - `<main>` → `main`
   - `<footer>` → `contentinfo`
3. **Keyboard Navigation**: Better support for keyboard users
4. **Cognitive Accessibility**: Clearer document structure helps all users

## Replacing Non-Semantic Elements

### Before (Non-Semantic):
```html
<div id="header">
  <div class="logo"></div>
  <div id="navigation"></div>
</div>

<div id="content">
  <div class="post"></div>
  <div class="sidebar"></div>
</div>

<div id="footer"></div>
```

### After (Semantic HTML5):
```html
<header>
  <img class="logo" src="logo.png" alt="Company">
  <nav>
    <!-- Navigation links -->
  </nav>
</header>

<main>
  <article>
    <!-- Blog post content -->
  </article>
  <aside>
    <!-- Sidebar content -->
  </aside>
</main>

<footer>
  <!-- Footer content -->
</footer>
```

## Practical Implementation Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Baking Blog - Semantic HTML Example</title>
</head>
<body>
  <header>
    <h1>The Art of Baking</h1>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Perfect Sourdough Bread</h2>
        <p>Published on <time datetime="2023-05-10">May 10, 2023</time></p>
      </header>
      
      <section>
        <h3>Ingredients</h3>
        <ul>
          <li>500g bread flour</li>
          <li>100g sourdough starter</li>
          <li>10g salt</li>
        </ul>
      </section>
      
      <section>
        <h3>Instructions</h3>
        <ol>
          <li>Mix ingredients...</li>
          <li>Knead dough...</li>
        </ol>
      </section>
      
      <footer>
        <p>Posted in: <a href="/category/bread">Bread Recipes</a></p>
      </footer>
    </article>

    <aside aria-label="Related content">
      <section>
        <h3>Popular Recipes</h3>
        <ul>
          <li><a href="/banana-bread">Banana Bread</a></li>
          <li><a href="/chocolate-chip">Chocolate Chip Cookies</a></li>
        </ul>
      </section>
    </aside>
  </main>

  <footer>
    <p>&copy; 2023 The Art of Baking</p>
    <nav aria-label="Footer navigation">
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  </footer>
</body>
</html>
```

## Key Best Practices

1. **Hierarchy Matters**: Use headings (`h1`-`h6`) properly within semantic elements
2. **Avoid Overuse**: Not every `div` needs replacement - use semantic elements where appropriate
3. **Nesting Rules**:
   - `<article>` can contain `<header>`, `<footer>`, and `<section>`
   - `<section>` should typically have a heading
4. **ARIA When Needed**: Use ARIA attributes only when HTML semantics aren't sufficient
5. **Browser Support**: All modern browsers support semantic elements (for older IE, add CSS `display: block`)
6. **One `<main>` Per Page**: There should be only one main content area

Remember: Semantic HTML provides meaning to your content, making it more accessible to both users and machines while improving your site's SEO potential.