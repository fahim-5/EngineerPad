# HTML Headings: `<h1>` to `<h6>`

## What Are Heading Tags?
Headings define the hierarchy and structure of your web content. HTML provides six levels of headings, from `<h1>` (most important) to `<h6>` (least important).

## Basic Syntax
```html
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Minor Heading</h4>
<h5>Small Heading</h5>
<h6>Least Important Heading</h6>
```

## Key Characteristics

1. **Semantic Importance**
   - `<h1>`: Highest importance (typically main page title)
   - `<h2>`-`<h6>`: Decreasing levels of importance

2. **Default Styling**
   - Bolder and larger font sizes (h1 largest → h6 smallest)
   - Automatic margins (top and bottom)

3. **SEO Value**
   - Search engines use headings to understand content structure
   - Proper hierarchy improves accessibility and SEO

## Best Practices

### 1. Hierarchy Structure
```html
<h1>Main Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>
      <h4>Detail 2.1.1</h4>
```

### 2. Content Guidelines
- **One `<h1>` per page** (typically your page title)
- **Don't skip levels** (avoid going from h2 directly to h4)
- **Keep headings concise** (1-2 lines maximum)
- **Use keywords naturally** (but avoid stuffing)

### 3. Accessibility
- Screen readers use headings for navigation
- Never use headings just for visual styling
- Maintain logical reading order

## Common Mistakes

❌ **Using multiple h1 tags** (except in HTML5 article/section contexts)  
❌ **Skipping heading levels** (h1 → h3 without h2)  
❌ **Using headings for visual effects only**  
❌ **Making headings too long**  
❌ **Putting interactive elements inside headings**  

## Styling Headings

While browsers provide default styles, you should customize them with CSS:

```css
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

h2 {
  font-size: 2rem;
  margin: 1.5rem 0 0.75rem;
  border-bottom: 1px solid #eee;
}
```

## Semantic vs Visual Hierarchy

**Don't choose headings based on size alone** - use CSS to adjust appearance while maintaining proper semantic structure:

```html
<!-- Correct semantic use -->
<h2 class="large-heading">Featured Products</h2>

<!-- Incorrect semantic use -->
<h4 class="large-heading">Featured Products</h4> <!-- Wrong! -->
```

## SEO Considerations
- Search engines give more weight to higher-level headings
- Keywords in h1/h2 carry more importance
- Proper structure helps search bots understand content

## Example: Proper Document Outline
```html
<h1>How to Bake Chocolate Chip Cookies</h1>
  <h2>Ingredients</h2>
    <h3>Dry Ingredients</h3>
    <h3>Wet Ingredients</h3>
  <h2>Instructions</h2>
    <h3>Preparation</h3>
    <h3>Baking</h3>
      <h4>Oven Temperature</h4>
      <h4>Baking Time</h4>
  <h2>Serving Suggestions</h2>
```

Remember: Headings create the skeleton of your document. Use them thoughtfully to create clear content structure for both users and search engines.
