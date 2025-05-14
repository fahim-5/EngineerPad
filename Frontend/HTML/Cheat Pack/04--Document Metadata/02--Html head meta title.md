# HTML Document Structure: `<html>`, `<head>`, `<meta>`, `<title>`

## `<html>` Element
- The root element of an HTML document
- Contains all other HTML elements
- Should include the `lang` attribute for accessibility

```html
<html lang="en">
  <!-- All content goes here -->
</html>
```

## `<head>` Element
- Container for metadata (data about the document)
- Placed between `<html>` and `<body>`
- Contains non-visible elements that inform the browser

```html
<head>
  <!-- Metadata goes here -->
</head>
```

## `<meta>` Element
- Provides metadata about the HTML document
- Typically used for:
  - Character encoding (`<meta charset="UTF-8">`)
  - Viewport settings (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
  - Page description (`<meta name="description" content="Page description">`)

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free Web tutorials">
</head>
```

## `<title>` Element
- Defines the title of the document
- Shown in browser tabs and search results
- Required in all HTML documents
- Should be descriptive and concise

```html
<head>
  <title>My Awesome Website</title>
</head>
```

## Complete Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Visible content goes here -->
</body>
</html>
```

## Key Notes
1. The `<head>` section contains only metadata
2. Only one `<title>` element should exist per page
3. UTF-8 charset meta tag should always be first in `<head>`
4. Viewport meta tag is essential for responsive design
5. The `<html>` element wraps all content except `<!DOCTYPE>`
6. 

This covers the essential information about these fundamental HTML elements in a clear, structured format with examples.
