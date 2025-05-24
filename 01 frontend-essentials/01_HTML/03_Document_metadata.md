# HTML Document Metadata

Metadata in HTML provides information about the document that isn’t displayed directly on the web page. It's essential for browser behavior, SEO, and social sharing.

---

## `<!DOCTYPE>` Declaration

- Defines the document type and version of HTML.
- Must be the first line in the HTML document.

**HTML5 Example:**
```html
<!DOCTYPE html>
```

This tells the browser to render the page in standards mode.

---

## `<html>`, `<head>`, `<meta>`, `<title>`

### `<html>`
- Root element that wraps the entire HTML content.

**Example:**
```html
<html lang="en">
  ...
</html>
```

### `<head>`
- Contains metadata, links to stylesheets, scripts, and SEO-related info.

**Example:**
```html
<head>
  <title>My Portfolio</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

### `<meta>`
- Defines metadata like character encoding, author, description, and viewport settings.

**Common Meta Tags:**
```html
<meta charset="UTF-8" />
<meta name="author" content="Fahim Faysal" />
<meta name="description" content="Portfolio of Fahim Faysal – Full Stack Developer" />
<meta name="keywords" content="HTML, CSS, JavaScript, Portfolio, Web Developer" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### `<title>`
- Sets the title shown in the browser tab.

```html
<title>Fahim's Web Dev Journey</title>
```

---

## SEO Basics with Meta Tags

Search engines use meta tags to understand page content and ranking.

**Example for SEO:**
```html
<meta name="description" content="Learn HTML with modern best practices and real-world examples." />
<meta name="keywords" content="HTML tutorial, HTML5, web development" />
<meta name="robots" content="index, follow" />
```

- `description`: Affects click-through rate in search engine results.
- `keywords`: Used less now, but still relevant for some platforms.
- `robots`: Controls indexing behavior.

---

## Social Sharing Tags

### Open Graph (Used by Facebook, LinkedIn, etc.)
```html
<meta property="og:title" content="Learn HTML from Scratch" />
<meta property="og:description" content="A beginner-friendly guide to mastering HTML." />
<meta property="og:image" content="https://example.com/images/html-guide.png" />
<meta property="og:url" content="https://example.com/html-guide" />
<meta property="og:type" content="website" />
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="HTML Crash Course" />
<meta name="twitter:description" content="Everything you need to start writing HTML." />
<meta name="twitter:image" content="https://example.com/images/html-twitter-card.png" />
```

These tags improve how your site looks when shared on social platforms, boosting engagement and click-through rates.

---

*Author: Fahim Faysal*