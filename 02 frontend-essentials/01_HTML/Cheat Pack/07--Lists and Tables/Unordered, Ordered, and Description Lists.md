
# HTML Lists: Unordered, Ordered & Description Lists - Complete Guide

Lists are fundamental HTML elements for organizing content. This guide covers all three list types with semantic use cases, styling techniques, and accessibility best practices.

## Table of Contents
1. [Unordered Lists (`<ul>`)](#unordered-lists-ul)
   - [Basic Syntax](#unordered-list-basic-syntax)
   - [Use Cases](#unordered-list-use-cases)
   - [Styling Options](#unordered-list-styling)
2. [Ordered Lists (`<ol>`)](#ordered-lists-ol)
   - [Basic Syntax](#ordered-list-basic-syntax)
   - [Numbering Variations](#ordered-list-numbering-variations)
   - [Advanced Attributes](#ordered-list-advanced-attributes)
3. [Description Lists (`<dl>`)](#description-lists-dl)
   - [Basic Syntax](#description-list-basic-syntax)
   - [Semantic Uses](#description-list-semantic-uses)
4. [Nested Lists](#nested-lists)
5. [Accessibility Considerations](#accessibility-considerations)
6. [Practical Examples](#practical-examples)

## Unordered Lists (`<ul>`)

### Basic Syntax
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Use Cases
- Navigation menus
- Feature lists
- Any collection without inherent sequence
- Form controls grouping (with ARIA)

### Styling Options
```css
/* Custom bullet styles */
ul {
  list-style-type: square; /* disc (default), circle, none */
}

/* Using images */
ul.custom-bullets {
  list-style-image: url('bullet.png');
}

/* Modern ::marker pseudo-element */
li::marker {
  color: #3a86ff;
  font-size: 1.2em;
}
```

## Ordered Lists (`<ol>`)

### Basic Syntax
```html
<ol>
  <li>Preheat oven</li>
  <li>Mix ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>
```

### Numbering Variations
| Type | CSS Value | Example |
|------|-----------|---------|
| Decimal | `decimal` | 1, 2, 3 |
| Lower Alpha | `lower-alpha` | a, b, c |
| Upper Roman | `upper-roman` | I, II, III |
| Leading Zero | `decimal-leading-zero` | 01, 02 |

### Advanced Attributes
```html
<ol start="5">            <!-- Starts from 5 -->
  <li value="10">Item</li> <!-- Overrides position -->
  <li reversed>Item</li>   <!-- Reverse counting -->
</ol>
```

## Description Lists (`<dl>`)

### Basic Syntax
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

### Semantic Uses
- Glossaries
- Metadata displays
- Key-value pairs
- FAQ sections

```html
<dl class="faq">
  <dt>What's your return policy?</dt>
  <dd>30 days money back guarantee</dd>
</dl>
```

## Nested Lists

### Proper Structure
```html
<ul>
  <li>Main item
    <ol>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ol>
  </li>
</ul>
```

### Styling Nested Lists
```css
ul ul, ol ol {
  margin-left: 1.5rem;
}

ul ul {
  list-style-type: circle;
}

ol ol {
  list-style-type: lower-alpha;
}
```

## Accessibility Considerations

1. **List Role Mapping**
   - `<ul>` = `list` role
   - `<ol>` = `list` role
   - `<li>` = `listitem` role

2. **Screen Reader Best Practices**
   ```html
   <ul aria-label="Feature checklist">
     <li aria-checked="false">Dark mode</li>
   </ul>
   ```

3. **Avoid Div Lists**
   ```html
   <!-- Bad -->
   <div class="list">
     <div class="item">Item</div>
   </div>

   <!-- Good -->
   <ul>
     <li>Item</li>
   </ul>
   ```

## Practical Examples

### Recipe Instructions
```html
<ol class="recipe-steps">
  <li>
    <h3>Prepare ingredients</h3>
    <ul>
      <li>Chop onions</li>
      <li>Mince garlic</li>
    </ul>
  </li>
  <li>Cook for 20 minutes</li>
</ol>
```

### Pricing Comparison
```html
<dl class="pricing-features">
  <dt>Basic Plan</dt>
  <dd>
    <ul>
      <li>5 projects</li>
      <li>1GB storage</li>
    </ul>
  </dd>
  
  <dt>Pro Plan</dt>
  <dd>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
    </ul>
  </dd>
</dl>
```

### Interactive Checklist
```html
<ul role="listbox" aria-multiselectable="true">
  <li role="option" tabindex="0" aria-selected="false">Buy milk</li>
  <li role="option" tabindex="0" aria-selected="true">Pay bills</li>
</ul>
```

## List Style Resets
When creating custom list components:
```css
.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* For flex/grid layouts */
.clean-list li {
  display: inline-block; /* or flex/grid items */
}
```

Remember: Choose list types based on content semantics, not visual presentation.
```

This guide provides complete coverage of HTML list elements with modern implementation techniques, following the same detailed format as your previous tutorials. It includes semantic usage patterns, styling approaches, and accessibility considerations.
