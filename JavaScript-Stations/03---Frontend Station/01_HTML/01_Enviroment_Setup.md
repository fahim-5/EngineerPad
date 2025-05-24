# Getting Started with HTML Development

## Choosing a Code Editor

A solid code editor enhances productivity and code quality. Here are some popular editors for HTML development:

### 1. **Visual Studio Code (VSCode)**
- Developed by Microsoft, it’s lightweight yet powerful.
- Rich extension ecosystem (e.g., Live Server, Prettier, Emmet support).
- Integrated terminal, Git support, and debugging tools.

### 2. **Sublime Text**
- Fast and minimalist with a distraction-free UI.
- Supports multiple cursors, syntax highlighting, and powerful search tools.
- Requires manual plugin installation via Package Control.

### 3. **Atom**
- Open-source editor developed by GitHub.
- Highly customizable with packages and themes.
- Built-in GitHub integration and collaborative features.

**Recommended**: VSCode is widely preferred for its extensive features, active community, and frequent updates.

---

## Basic Developer Tools

### 1. **Browser DevTools**
- Built into modern browsers like Chrome, Firefox, Edge.
- Inspect elements, debug JavaScript, and view live changes to HTML/CSS.
- Includes performance, network, and accessibility tools.

**Shortcut**: Right-click on any webpage element → *Inspect* (or press `F12`).

### 2. **Emmet**
- A powerful toolkit built into many editors like VSCode.
- Allows rapid HTML and CSS writing using abbreviations.

**Example**:  
Typing `ul>li*5` + `Tab` will generate:
```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

---

## HTML Boilerplate Templates

An HTML boilerplate is a starter template with basic structure and meta settings to kick off any project.

### Basic HTML5 Boilerplate:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <script src="script.js"></script>
</body>
</html>
```

### Features:
- Declares the document as HTML5 with `<!DOCTYPE html>`.
- Includes `meta` tags for responsiveness and compatibility.
- Links to external CSS and JavaScript files.

---

*Author: Fahim Faysal*