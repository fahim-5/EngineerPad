# HTML Text Content and Typography

Typography in HTML defines how textual content is structured, styled, and displayed. Good typographic practices improve readability, accessibility, and overall user experience.

---

## Headings (`<h1>`–`<h6>`)

HTML offers six levels of headings, from `<h1>` (most important) to `<h6>` (least important). Headings create a content hierarchy and are essential for accessibility and SEO.

**Example:**
```html
<h1>Main Title</h1>
<h2>Subsection</h2>
<h3>Sub-subsection</h3>
<h4>Minor Heading</h4>
<h5>Smaller Heading</h5>
<h6>Least Important Heading</h6>
```

**Best Practices:**
- Use only one `<h1>` per page for the main title.
- Follow a logical order (don't skip levels).
- Headings help screen readers and search engines understand your content.

---

## Paragraphs, Line Breaks, and Horizontal Rules

### `<p>` - Paragraph
Wraps blocks of text into separate paragraphs.

**Example:**
```html
<p>This is a full paragraph of text. It is automatically spaced and separated from other content.</p>
```

### `<br>` - Line Break
Creates a line break within a paragraph or text block. It is a self-closing tag.

**Example:**
```html
<p>Line one.<br>Line two.</p>
```

### `<hr>` - Horizontal Rule
Inserts a horizontal line, typically used to separate content sections.

**Example:**
```html
<p>Section one</p>
<hr>
<p>Section two</p>
```

---

## Inline Text Formatting

These tags modify inline parts of text to add emphasis or styling.

### `<strong>` - Strong Importance (usually bold)
```html
<p>This is <strong>important</strong> information.</p>
```

### `<em>` - Emphasis (usually italic)
```html
<p>This is <em>emphasized</em> text.</p>
```

### `<b>` - Bold text (without semantic importance)
```html
<p>This is <b>bold</b> text for styling only.</p>
```

### `<i>` - Italic text (without emphasis)
```html
<p>This is <i>italic</i> text for visual style.</p>
```

### `<span>` - Generic inline container for styling or scripting
```html
<p><span style="color: blue;">This text is blue.</span></p>
```

**Tip:** Use `<strong>` and `<em>` for accessibility and semantic meaning, and `<b>`, `<i>`, `<span>` for purely visual or scripting purposes.

---

*Author: Fahim Faysal*