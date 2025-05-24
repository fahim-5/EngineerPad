
# HTML Tags, Elements, and Attributes

## Table of Contents
1. [HTML Building Blocks](#html-building-blocks)
2. [HTML Tags](#html-tags)
3. [HTML Elements](#html-elements)
4. [HTML Attributes](#html-attributes)
5. [Global Attributes](#global-attributes)
6. [Event Attributes](#event-attributes)
7. [Best Practices](#best-practices)
8. [Common Mistakes](#common-mistakes)
9. [Validation](#validation)

## HTML Building Blocks

HTML documents are constructed from three fundamental components:
1. **Tags** - Markers that define elements
2. **Elements** - Complete components including tags and content
3. **Attributes** - Additional information about elements

## HTML Tags

### Basic Structure
Tags are denoted by angle brackets:
- Opening tag: `<tagname>`
- Closing tag: `</tagname>`
- Void elements: `<tagname>` (self-closing)

### Categories of Tags
1. **Structural Tags**
   ```html
   <html>, <head>, <body>, <div>, <span>
   ```

2. **Semantic Tags** (HTML5)
   ```html
   <header>, <footer>, <article>, <section>, <nav>
   ```

3. **Content Tags**
   ```html
   <h1>-<h6>, <p>, <a>, <img>, <ul>, <ol>, <li>
   ```

4. **Form Tags**
   ```html
   <form>, <input>, <textarea>, <select>, <button>
   ```

5. **Table Tags**
   ```html
   <table>, <tr>, <th>, <td>, <thead>, <tbody>
   ```

### Void Elements (Self-closing Tags)
Elements that don't have closing tags:
```html
<br>, <hr>, <img>, <input>, <meta>, <link>
```

## HTML Elements

An HTML element consists of:
- Opening tag
- Content (optional)
- Closing tag (except for void elements)

### Element Structure
```html
<tag attribute="value">Content</tag>
```

### Nested Elements
```html
<div>
  <p>This is a <strong>nested</strong> element.</p>
</div>
```

## HTML Attributes

Attributes provide additional information about elements and are always specified in the opening tag.

### Basic Syntax
```html
<element attribute="value"></element>
```

### Common Attributes
| Attribute | Description | Example |
|-----------|-------------|---------|
| `id`      | Unique identifier | `<div id="header">` |
| `class`   | Space-separated class names | `<p class="intro highlight">` |
| `style`   | Inline CSS styles | `<p style="color:red;">` |
| `src`     | Source URL for media | `<img src="image.jpg">` |
| `href`    | Hyperlink reference | `<a href="page.html">` |
| `alt`     | Alternative text | `<img src="pic.jpg" alt="Description">` |
| `title`   | Advisory information | `<abbr title="World Wide Web">WWW</abbr>` |

## Global Attributes

These can be used on any HTML element:

1. **Core Attributes**
   - `id` - Unique identifier
   - `class` - Space-separated class list
   - `style` - Inline CSS
   - `title` - Tooltip text

2. **Language Attributes**
   - `lang` - Language code (`en`, `es`, etc.)
   - `dir` - Text direction (`ltr`, `rtl`)

3. **Accessibility Attributes**
   - `role` - ARIA role
   - `aria-*` - ARIA attributes
   - `tabindex` - Tab order control

4. **Data Attributes**
   ```html
   <div data-user-id="1234" data-role="admin"></div>
   ```

## Event Attributes

Used to trigger JavaScript code:

### Common Event Attributes
- Window Events
  ```html
  <body onload="init()" onunload="cleanUp()">
  ```

- Form Events
  ```html
  <input onchange="validate()" onsubmit="processForm()">
  ```

- Mouse Events
  ```html
  <button onclick="handleClick()" onmouseover="showTooltip()">
  ```

- Keyboard Events
  ```html
  <input onkeydown="checkKey()" onkeyup="updateCount()">
  ```

> Note: For better separation of concerns, it's recommended to use JavaScript event listeners instead of HTML event attributes.

## Best Practices

1. **Semantic Markup**
   ```html
   <!-- Good -->
   <article>
     <h1>Article Title</h1>
     <p>Article content...</p>
   </article>

   <!-- Avoid -->
   <div class="article">
     <div class="title">Article Title</div>
     <div class="content">Article content...</div>
   </div>
   ```

2. **Attribute Ordering**
   Suggested order:
   1. `class`
   2. `id`
   3. `data-*`
   4. Everything else
   5. `style`

3. **Quoting Attributes**
   Always use double quotes:
   ```html
   <!-- Recommended -->
   <input type="text" name="username">

   <!-- Avoid -->
   <input type=text name=username>
   ```

4. **Boolean Attributes**
   For boolean attributes, the presence of the attribute means true:
   ```html
   <input type="checkbox" checked disabled>
   ```

## Common Mistakes

1. **Missing Closing Tags**
   ```html
   <!-- Incorrect -->
   <p>Some text
   <p>More text

   <!-- Correct -->
   <p>Some text</p>
   <p>More text</p>
   ```

2. **Incorrect Nesting**
   ```html
   <!-- Incorrect -->
   <p>Text <div>inside</div> paragraph</p>

   <!-- Correct -->
   <div><p>Text inside paragraph</p></div>
   ```

3. **Overusing divs**
   ```html
   <!-- Avoid -->
   <div class="header">
     <div class="nav">
       <div class="nav-item">Home</div>
     </div>
   </div>

   <!-- Better -->
   <header>
     <nav>
       <ul>
         <li>Home</li>
       </ul>
     </nav>
   </header>
   ```

4. **Missing Required Attributes**
   ```html
   <!-- Missing alt attribute -->
   <img src="logo.jpg">

   <!-- Correct -->
   <img src="logo.jpg" alt="Company Logo">
   ```

## Validation

Always validate your HTML:
1. **W3C Validator**: [https://validator.w3.org/](https://validator.w3.org/)
2. **Browser Developer Tools**: Check the Elements panel
3. **IDE/Editor Plugins**: HTMLHint, ESLint with HTML plugins

### Validation Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Valid HTML</title>
</head>
<body>
  <!-- Semantic structure -->
  <header>
    <h1>Proper HTML</h1>
  </header>
  <main>
    <article>
      <p>This document validates as HTML5.</p>
    </article>
  </main>
</body>
</html>


## Conclusion

Understanding HTML tags, elements, and attributes is fundamental to web development. Key takeaways:

1. Use semantic HTML5 elements when possible
2. Always include required attributes
3. Follow consistent attribute ordering
4. Validate your markup regularly
5. Separate structure (HTML), presentation (CSS), and behavior (JavaScript)
``` 

This comprehensive guide covers all essential aspects of HTML tags, elements, and attributes, following the same professional format as the previous nesting rules tutorial. The content is organized logically with clear examples and best practices.
