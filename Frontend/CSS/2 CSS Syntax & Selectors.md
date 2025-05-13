
```markdown
# CSS Syntax & Selectors

## Basic Syntax & Structure

CSS consists of **rules** that tell the browser how to style HTML elements. Each rule has two main parts:

```css
selector {
  property: value;
  /* more properties... */
}
```

- **Selector**: Targets the HTML element(s) you want to style
- **Declaration Block**: Contains one or more property-value pairs in curly braces `{}`
- **Property**: The style characteristic you want to change (e.g., `color`, `font-size`)
- **Value**: The specific setting for the property (e.g., `red`, `16px`)

### Example:
```css
p {
  color: blue;
  font-size: 16px;
}
```
This makes all paragraph (`<p>`) text blue with 16px font size.

---

## Element, Class, ID Selectors

### 1. Element Selector
Targets all instances of an HTML element:

```css
h1 {
  text-align: center;
}
```
Styles ALL `<h1>` elements on the page.

### 2. Class Selector (.)
Targets elements with a specific class attribute:

```html
<p class="highlight">This is important</p>
```

```css
.highlight {
  background-color: yellow;
}
```
Styles ANY element with `class="highlight"`.

### 3. ID Selector (#)
Targets one unique element with a specific ID:

```html
<div id="header">Page Header</div>
```

```css
#header {
  border-bottom: 2px solid black;
}
```
Styles ONLY the element with `id="header"`.

---

## Grouping Selectors

Combine multiple selectors to apply the same styles:

```css
h1, h2, h3 {
  font-family: 'Arial', sans-serif;
  color: #333;
}
```
This styles all `<h1>`, `<h2>`, and `<h3>` elements the same way.

---

## Attribute Selectors

Target elements based on their attributes:

```css
/* All links opening in new tab */
a[target="_blank"] {
  color: purple;
}

/* Inputs of type text */
input[type="text"] {
  background-color: #f5f5f5;
}
```

---

## Pseudo-classes (:)

Style elements in special states:

```css
/* Unvisited link */
a:link {
  color: blue;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Mouse over link */
a:hover {
  color: red;
}

/* Selected input field */
input:focus {
  border-color: blue;
}

/* First child element */
li:first-child {
  font-weight: bold;
}
```

---

## Pseudo-elements (::)

Style specific parts of an element:

```css
/* First line of paragraph */
p::first-line {
  font-weight: bold;
}

/* Before element content */
h1::before {
  content: "★ ";
}

/* Selected text */
::selection {
  background: yellow;
  color: black;
}
```

---

## Selector Specificity (Which Style Wins?)

When multiple rules apply, CSS uses this priority order:

1. `!important` (avoid if possible)
   ```css
   p { color: red !important; }
   ```
2. Inline styles (`style="..."` in HTML)
3. ID selectors (`#main`)
4. Class/attribute/pseudo-class selectors (`.button`, `[type="text"]`, `:hover`)
5. Element/pseudo-element selectors (`p`, `::first-line`)

### Example Conflict:
```css
#intro { color: blue; }  /* Wins because ID > class */
.highlight { color: yellow; }
```

---

## Inheritance

Some properties inherit values from parent elements:

```html
<div style="color: green">
  <p>This text will be green</p>
</div>
```

**Common inherited properties:**
- `color`
- `font-family`
- `font-size`
- `line-height`
- `text-align`

**Non-inherited properties:**
- `background`
- `border`
- `margin`
- `padding`
- `width/height`

---

## Best Practices for Beginners

1. Use classes for reusable styles
2. Use IDs for unique elements only
3. Avoid `!important` (it breaks natural cascading)
4. Organize selectors from general to specific
5. Use grouping to keep your CSS DRY (Don't Repeat Yourself)

```css
/* Good practice example */
.primary-button, .secondary-button {
  padding: 10px 20px;
  border-radius: 5px;
}

.primary-button {
  background: blue;
  color: white;
}

.secondary-button {
  background: lightgray;
}
```
```