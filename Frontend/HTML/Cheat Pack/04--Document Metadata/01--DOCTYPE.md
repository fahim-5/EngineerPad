
# HTML `<!DOCTYPE>` Declaration

## What is it?
- Not an HTML tag, but a document type declaration
- Must be the first line in HTML documents
- Tells browsers which HTML version to use
- Affects page rendering mode

## Syntax
```html
<!DOCTYPE html>  <!-- HTML5 (modern standard) -->
```

## Common Declarations
```html
<!-- HTML5 -->
<!DOCTYPE html>

<!-- HTML 4.01 Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
  "http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Why It Matters
- Triggers standards mode (vs quirks mode)
- Ensures consistent rendering
- Required for valid HTML
- Affects CSS/JavaScript behavior

## Best Practices
1. Always use `<!DOCTYPE html>` for new projects
2. Place it before `<html>` tag
3. Don't include any content before it
4. No closing tag needed

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Title</title>
</head>
<body>
  Page content
</body>
</html>
```

> Note: For modern web development, always use the simple HTML5 doctype (`<!DOCTYPE html>`)
> 

This covers the essentials in a minimal format while including all key information. The content is organized with clear headings and examples for quick reference.
