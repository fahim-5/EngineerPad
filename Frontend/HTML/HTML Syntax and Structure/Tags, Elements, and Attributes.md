
# Tags, Elements, and Attributes in HTML

## 1. **Tags**
HTML **tags** are keywords enclosed in angle brackets (`< >`) that define the structure and content of web pages.

### Examples:
- `<p>`: Defines a paragraph
- `<h1>`: Defines a top-level heading
- `<a>`: Defines a hyperlink

### Types:
- **Opening Tag:** `<p>`
- **Closing Tag:** `</p>`
- **Self-Closing Tag:** `<img />`, `<br />`

---

## 2. **Elements**
An **HTML element** is everything from the start tag to the end tag, including content.

### Syntax:
```html
<tagname>Content goes here</tagname>
```

### Example:
```html
<p>This is a paragraph element.</p>
```

### Types of Elements:
- **Block-level elements:** `<div>`, `<p>`, `<h1>`-`<h6>`, `<section>`, etc.
- **Inline elements:** `<span>`, `<a>`, `<img>`, `<strong>`, etc.
- **Empty elements (void):** `<br>`, `<hr>`, `<img>` — don't have closing tags

---

## 3. **Attributes**
Attributes provide additional information about HTML elements. They are always included in the opening tag and follow a key-value format.

### Syntax:
```html
<tagname attribute="value">Content</tagname>
```

### Common Attributes:
- `id`: Uniquely identifies an element
- `class`: Assigns the element to one or more CSS classes
- `src`: Specifies the source of an image (`<img>`)
- `href`: Specifies the URL for a link (`<a>`)
- `alt`: Provides alternative text for an image
- `style`: Inline CSS styling

### Examples:
```html
<img src="logo.png" alt="Website Logo" width="150" height="150">
<a href="https://example.com" target="_blank">Visit Example</a>
```

---

## Summary Table
| Concept    | Description | Examples |
|------------|-------------|----------|
| Tags       | Keywords defining structure | `<p>`, `<h1>`, `<a>` |
| Elements   | Tags + content | `<p>Hello</p>`, `<a href="#">Link</a>` |
| Attributes | Additional element info | `id`, `class`, `src`, `href` |

---

## Conclusion
Understanding tags, elements, and attributes is essential to writing clean, well-structured HTML. These core concepts lay the groundwork for building interactive and visually rich web pages.


