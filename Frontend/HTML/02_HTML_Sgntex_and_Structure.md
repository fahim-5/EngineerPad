# HTML Basics: Tags, Elements, and Best Practices

## Tags, Elements, and Attributes

### **Tags**
- Tags are the basic building blocks of HTML.
- Usually come in pairs: an opening tag `<tagname>` and a closing tag `</tagname>`.

**Example:**
```html
<p>This is a paragraph.</p>
```

### **Elements**
- An element consists of the opening tag, content, and closing tag.
- Some elements are self-closing (void elements).

**Example of a standard element:**
```html
<h1>Hello World</h1>
```

**Example of a self-closing element:**
```html
<img src="image.jpg" alt="Image description" />
```

### **Attributes**
- Attributes provide additional information about elements.
- Placed within the opening tag, always in `name="value"` format.

**Example:**
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

---

## Nesting Rules and Best Practices

### **Nesting Rules**
- Elements must be properly nested — opened and closed in the correct order.
- Improper nesting can break layout and cause rendering issues.

**Correct Nesting:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

**Incorrect Nesting (Avoid this):**
```html
<ul>
  <li>Item 1
<ul>
```

### **Best Practices**
- Use semantic HTML elements for better structure and accessibility (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Close all tags properly (especially important in XHTML and React).
- Keep indentation consistent for readability.
- Avoid inline styles where possible — separate structure (HTML) and style (CSS).

---

## Comments and Whitespace Management

### **Comments**
- Use comments to explain code or temporarily disable parts of the code.
- Comments are ignored by the browser.

**Syntax:**
```html
<!-- This is a comment -->
```

### **Whitespace Management**
- HTML ignores multiple spaces and line breaks.
- Use `<br>` for line breaks and `&nbsp;` for non-breaking spaces when needed.
- Indent nested elements for clarity, even though it doesn't affect rendering.

**Example:**
```html
<p>This    text     has   many spaces.</p>
<!-- Will render as: This text has many spaces. -->
```

---

*Author: Fahim Faysal*