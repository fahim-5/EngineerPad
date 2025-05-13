
```markdown
# CSS Text Spacing & Line Breaks

## Line Height (`line-height`)

Controls vertical spacing between lines of text:

```css
/* Unitless value (recommended) */
body {
  line-height: 1.5; /* 1.5 × font size */
}

/* Fixed value */
h1 {
  line-height: 32px;
}

/* Percentage */
p {
  line-height: 150%;
}
```

**Best Practices:**
- Use unitless values (1.4-1.6 for body text)
- Increase line height for longer paragraphs
- Decrease for headings/titles

## Letter Spacing (`letter-spacing`)

Adjusts space between characters:

```css
h2 {
  letter-spacing: 1px; /* Positive adds space */
}

.logo {
  letter-spacing: -0.5px; /* Negative reduces space */
}

.uppercase {
  letter-spacing: 0.1em; /* Relative to font size */
}
```

**When to Use:**
- Improve readability of ALL CAPS text
- Create visual hierarchy
- Enhance logo/brand styling

## Word Spacing (`word-spacing`)

Controls space between words:

```css
.poetic {
  word-spacing: 0.25em;
}

.compact {
  word-spacing: -1px;
}
```

## Word Breaks (`word-break`)

Handles long word behavior:

```css
.container {
  word-break: normal; /* Default (breaks at spaces) */
  word-break: break-all; /* Break anywhere */
  word-break: keep-all; /* No break for CJK text */
}
```

## Word Wrap (`overflow-wrap`/`word-wrap`)

Controls line wrapping:

```css
pre {
  overflow-wrap: normal; /* Default */
  overflow-wrap: break-word; /* Break long words */
  overflow-wrap: anywhere; /* Emergency breaks */
}
```

## White Space (`white-space`)

Handles text wrapping and whitespace:

```css
.code-sample {
  white-space: pre; /* Preserve all whitespace */
}

.nowrap {
  white-space: nowrap; /* Single line */
}

.auto-wrap {
  white-space: pre-wrap; /* Preserve but wrap */
}
```

## Hyphenation (`hyphens`)

Controls automatic hyphenation:

```css
article {
  hyphens: none; /* No hyphenation */
  hyphens: manual; /* Only where &hyphen; exists */
  hyphens: auto; /* Automatic when needed */
}
```

## Practical Example

```css
:root {
  --base-line-height: 1.6;
  --heading-line-height: 1.3;
  --tight-spacing: -0.5px;
}

body {
  line-height: var(--base-line-height);
}

h1, h2, h3 {
  line-height: var(--heading-line-height);
  letter-spacing: var(--tight-spacing);
}

.article-text {
  word-spacing: 0.05em;
  hyphens: auto;
}

.preformatted {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
```

## Common Issues & Fixes

**Problem:** Uneven spacing in justified text
```css
.justified {
  text-align: justify;
  word-spacing: -0.1em; /* Compensate for justification */
}
```

**Problem:** Broken layout from long words
```css
.card {
  overflow-wrap: break-word;
  hyphens: auto;
}
```

**Problem:** Tight letter spacing in headings
```css
h2 {
  letter-spacing: 0.03em;
}
```