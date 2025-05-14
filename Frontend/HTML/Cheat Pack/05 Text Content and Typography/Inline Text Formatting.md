# HTML Inline Text Formatting

## Semantic Text Formatting

### 1. Emphasis (`<em>`)
```html
<p>This is <em>emphasized</em> text.</p>
```
- Indicates stress emphasis (typically renders as italic)
- Screen readers may change intonation

### 2. Strong Importance (`<strong>`)
```html
<p>This is <strong>important</strong> text.</p>
```
- Indicates strong importance (typically bold)
- Carries more weight than `<b>` for screen readers

### 3. Small Text (`<small>`)
```html
<p>Main text <small>with smaller secondary text</small></p>
```
- Represents side-comments or fine print
- Reduces text size while maintaining semantic meaning

## Presentational Formatting

### 1. Bold (`<b>`)
```html
<p>This text contains <b>bold</b> words.</p>
```
- Stylistically offset text without importance
- Use when you want bold without semantic meaning

### 2. Italic (`<i>`)
```html
<p>The <i>Voyager</i> spacecraft launched in 1977.</p>
```
- Alternative voice or mood (technical terms, thoughts)
- Not for emphasis - use `<em>` instead

### 3. Underline (`<u>`)
```html
<p>This text has <u>underlined</u> portions.</p>
```
- Indicates non-textual annotation
- Avoid for links (can cause confusion)

## Technical & Typographic Elements

### 1. Code (`<code>`)
```html
<p>Use <code>console.log()</code> for debugging.</p>
```
- Displays inline code snippets
- Typically renders in monospace font

### 2. Keyboard Input (`<kbd>`)
```html
<p>Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save.</p>
```
- Indicates user keyboard input
- Useful in technical documentation

### 3. Variable (`<var>`)
```html
<p>The variable <var>x</var> represents...</p>
```
- Marks mathematical or programming variables

## Text Annotation Elements

### 1. Highlight (`<mark>`)
```html
<p>Search results for <mark>HTML</mark> formatting.</p>
```
- Highlights text for reference
- Default yellow background (customizable with CSS)

### 2. Deleted Text (`<del>`)
```html
<p>Original price: <del>$99</del> $59</p>
```
- Shows deleted/removed content
- Typically renders with strikethrough

### 3. Inserted Text (`<ins>`)
```html
<p>Meeting at <ins>3:00 PM</ins>.</p>
```
- Indicates added content
- Typically renders with underline

## Best Practices

1. **Prefer semantic elements** (`<strong>` over `<b>`) when meaning matters
2. **Use CSS for pure visual styling** (color, font-weight, etc.)
3. **Don't overuse formatting** - let content structure speak first
4. **Maintain accessibility** - ensure proper contrast for highlighted text
5. **Combine elements carefully**:
   ```html
   <p><strong><em>Important warning</em></strong></p>
   ```

## Complete Example
```html
<p>
  In <mark>HTML5</mark>, the <code><strong></code> element indicates 
  <strong>strong importance</strong>, while <code><b></code> is just for 
  <b>stylistic bold text</b>. For variables, use <var>x</var> and 
  for user input show <kbd>Enter</kbd> key.
</p>

<p>
  <del>Old content</del> <ins>New revision</ins> with 
  <small>supplementary notes</small> and <i>alternative terms</i>.
</p>
```

## Accessibility Considerations
- Screen readers interpret semantic elements differently
- Formatting shouldn't be the only way to convey meaning
- Ensure sufficient color contrast for highlighted text
- Use ARIA attributes when needed for complex cases
