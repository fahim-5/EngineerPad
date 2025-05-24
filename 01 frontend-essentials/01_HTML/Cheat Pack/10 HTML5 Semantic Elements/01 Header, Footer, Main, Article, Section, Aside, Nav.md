# HTML5 Semantic Elements: Structure & Meaning

HTML5 introduced semantic elements that clearly describe their meaning to both browsers and developers. Here's a detailed look at the key structural elements:

## 1. `<header>`
**Purpose:** Represents introductory content or navigational aids
**Typical Uses:**
- Page header with logo and main navigation
- Article heading (can be nested in `<article>`)
- Section heading (can be nested in `<section>`)

**Example:**
```html
<header>
  <h1>Website Title</h1>
  <nav>...</nav>
</header>

<article>
  <header>
    <h2>Article Title</h2>
    <p>Published on <time datetime="2023-05-15">May 15</time></p>
  </header>
  ...
</article>
```

## 2. `<footer>`
**Purpose:** Contains footer information for its nearest ancestor
**Typical Uses:**
- Main page footer with copyright/contact info
- Article footer with author/meta information
- Section footer with related links

**Example:**
```html
<footer>
  <p>&copy; 2023 Company Name</p>
  <address>contact@example.com</address>
</footer>

<article>
  ...
  <footer>
    <p>Author: John Doe</p>
  </footer>
</article>
```

## 3. `<main>`
**Purpose:** Contains the dominant content of the document
**Key Points:**
- Should be unique (only one per page)
- Not for repeated content like headers/footers
- Should not be descendant of article, aside, footer, header, or nav

**Example:**
```html
<body>
  <header>...</header>
  <main>
    <h1>Primary Content Heading</h1>
    <p>Main content of the page...</p>
  </main>
  <footer>...</footer>
</body>
```

## 4. `<article>`
**Purpose:** Self-contained composition that could be distributed independently
**Typical Uses:**
- Blog posts
- News articles
- Forum posts
- Product cards
- Comments

**Example:**
```html
<article>
  <h2>How to Use Semantic HTML</h2>
  <p>Semantic HTML improves accessibility...</p>
  <footer>Posted in Web Development</footer>
</article>
```

## 5. `<section>`
**Purpose:** Thematic grouping of content with a heading
**Key Points:**
- Should have its own heading (h2-h6)
- Used when content makes sense to be grouped
- More specific than `<div>` but more generic than `<article>`

**Example:**
```html
<section>
  <h2>Chapter 1: Introduction</h2>
  <p>Content about the introduction...</p>
</section>

<section>
  <h2>Chapter 2: Main Content</h2>
  <p>Primary content section...</p>
</section>
```

## 6. `<aside>`
**Purpose:** Content indirectly related to main content
**Typical Uses:**
- Sidebars
- Pull quotes
- Advertising
- Groups of nav elements

**Example:**
```html
<main>
  <article>
    <!-- Main article content -->
  </article>
  
  <aside>
    <h3>Related Articles</h3>
    <ul>...</ul>
  </aside>
</main>
```

## 7. `<nav>`
**Purpose:** Major navigation blocks
**Key Points:**
- Not all links need to be in nav (just major navigation)
- Common locations: main menu, table of contents, pagination
- Screen readers may offer quick navigation to these sections

**Example:**
```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

## Proper Nesting Example

```html
<body>
  <header>
    <h1>Site Title</h1>
    <nav>...</nav>
  </header>
  
  <main>
    <article>
      <header>
        <h2>Article Title</h2>
      </header>
      
      <section>
        <h3>First Section</h3>
        <p>Content...</p>
      </section>
      
      <section>
        <h3>Second Section</h3>
        <p>More content...</p>
      </section>
      
      <footer>
        <p>Article footer</p>
      </footer>
    </article>
    
    <aside>
      <h3>Related Links</h3>
      <nav>
        <ul>...</ul>
      </nav>
    </aside>
  </main>
  
  <footer>
    <p>Copyright information</p>
  </footer>
</body>
```

These semantic elements create a meaningful document structure that improves both machine readability (for SEO) and human understanding of your content organization.