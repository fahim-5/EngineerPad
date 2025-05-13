```markdown
# CSS Colors and Units

## Color Models in CSS

### 1. HEX Colors
6-digit hexadecimal values representing Red, Green, and Blue:

```css
h1 {
  color: #ff0000; /* Pure red */
  background-color: #00ff00; /* Pure green */
}
```

### 2. RGB/RGBA Colors
Red, Green, Blue with optional Alpha (transparency):

```css
div {
  color: rgb(255, 0, 0); /* Red */
  background-color: rgba(0, 255, 0, 0.5); /* Semi-transparent green */
}
```

### 3. HSL/HSLA Colors
Hue, Saturation, Lightness with optional Alpha:

```css
button {
  color: hsl(120, 100%, 50%); /* Pure green */
  background-color: hsla(240, 100%, 50%, 0.3); /* Semi-transparent blue */
}
```

## CSS Units

### Absolute Units
Fixed sizes (use sparingly for print styles):

```css
.print-page {
  width: 8.5in;  /* Inches */
  height: 11in;
  margin: 1cm;    /* Centimeters */
  font-size: 12pt; /* Points */
}
```

### Relative Units
Scale relative to other elements:

```css
body {
  font-size: 16px;
}

h1 {
  font-size: 2em;    /* 32px (2 × parent element) */
  margin: 1.5rem;    /* 24px (1.5 × root element) */
  width: 50%;        /* 50% of parent width */
  height: 50vh;      /* 50% of viewport height */
  padding: 2vw;      /* 2% of viewport width */
}
```

## CSS Variables (Custom Properties)

Define reusable values:

```css
:root {
  --primary-color: #3498db;
  --spacing-unit: 1rem;
  --max-width: 1200px;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
}
```

## Practical Comparison

| Unit Type | Example | Relative To |
|-----------|---------|-------------|
| px        | 16px    | Screen pixels |
| em        | 1.5em   | Parent font size |
| rem       | 2rem    | Root font size |
| %         | 50%     | Parent element |
| vw/vh     | 10vw    | Viewport width/height |
| ch        | 20ch    | Width of "0" character |

```css
/* Responsive typography example */
html {
  font-size: calc(16px + 0.25vw); /* Scales with viewport */
}

/* Perfect fourth scale */
:root {
  --ratio: 1.333;
  --s0: 1rem;
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
}
```