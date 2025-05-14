# HTML Paragraphs, Line Breaks & Horizontal Rules

## Paragraphs (`<p>`)
The `<p>` tag defines a paragraph of text.

### Basic Usage
```html
<p>This is a paragraph of text. It will automatically wrap to multiple lines based on the container width.</p>
<p>This is another separate paragraph.</p>
```

### Key Features:
- Creates block-level elements
- Browser adds margins before/after by default
- Should contain flowing text content
- Screen readers pause between paragraphs

### Best Practices:
✅ Use for regular text content  
✅ Keep paragraphs focused (3-5 sentences ideal)  
✅ Style with CSS (don't use for visual spacing only)  

## Line Breaks (`<br>`)
The `<br>` tag creates a line break without starting a new paragraph.

### Basic Usage
```html
<p>First line of text<br>Second line in same paragraph</p>
```

### When to Use:
- Addresses or poetry formatting
- Forcing specific line breaks in text
- Within form fields or other constrained spaces

### Best Practices:
✅ Use sparingly (only when semantic meaning requires)  
✅ Don't use multiple `<br>` for visual spacing (use CSS margin/padding instead)  
❌ Avoid using between paragraphs (use `<p>` tags properly)  

## Horizontal Rules (`<hr>`)
The `<hr>` tag creates a thematic break between content sections.

### Basic Usage
```html
<section>
  <h2>First Section</h2>
  <p>Content...</p>
</section>

<hr>

<section>
  <h2>Second Section</h2>
  <p>More content...</p>
</section>
```

### Modern Usage:
- Semantic separation of content blocks
- Visual divider between sections
- Replaces older decorative border tricks

### Styling Examples:
```css
/* Modern HR styling */
hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

/* Dashed style */
hr.dashed {
  border-top: 1px dashed #bbb;
}

/* Vertical spacing */
hr {
  margin: 2rem 0;
}
```

## Comparison Table

| Element | Purpose | Type | Example Use Case |
|---------|---------|------|------------------|
| `<p>` | Paragraph container | Block | Article body text |
| `<br>` | Line break | Inline | Address formatting |
| `<hr>` | Thematic break | Block | Section divider |

## Accessibility Notes
- Screen readers announce paragraph boundaries
- `<hr>` is announced as a "separator"
- Avoid excessive line breaks which create choppy reading

## Complete Example
```html
<article>
  <h2>Article Title</h2>
  
  <p>This is the introductory paragraph that sets up the main content of the article.</p>
  
  <p>The second paragraph continues the discussion<br>
  with a line break for specific formatting needs.</p>
  
  <hr>
  
  <section>
    <h3>New Section</h3>
    <p>Content after the horizontal rule divider that indicates a thematic change.</p>
  </section>
</article>
```

## Best Practices Summary
1. Use `<p>` for proper paragraph structure
2. Reserve `<br>` for specific line break needs
3. Use `<hr>` for semantic content separation
4. Style all three with CSS rather than HTML attributes
5. Maintain logical content flow for accessibility
