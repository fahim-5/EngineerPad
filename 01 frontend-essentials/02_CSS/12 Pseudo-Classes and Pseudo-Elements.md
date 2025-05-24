# CSS Pseudo-Classes and Pseudo-Elements

Pseudo-classes and pseudo-elements are powerful CSS features that allow you to style specific parts of your document or elements in particular states.

## Pseudo-Classes

Pseudo-classes select elements based on their state or characteristics, not just their name, attributes, or content.

### Common Pseudo-Classes:

1. **Link-related states**:
   - `:link` - unvisited links
   - `:visited` - visited links
   - `:hover` - when mouse is over the element
   - `:active` - while being clicked/activated
   - `:focus` - when element has keyboard focus

   ```css
   a:link { color: blue; }
   a:visited { color: purple; }
   a:hover { text-decoration: underline; }
   ```

2. **Structural pseudo-classes**:
   - `:first-child` - first child of its parent
   - `:last-child` - last child of its parent
   - `:nth-child(n)` - nth child (e.g., `:nth-child(odd)`, `:nth-child(2n+1)`)
   - `:nth-of-type(n)` - nth element of its type
   - `:not(selector)` - elements that don't match the selector

   ```css
   li:first-child { font-weight: bold; }
   tr:nth-child(even) { background: #f2f2f2; }
   p:not(.special) { color: #333; }
   ```

3. **Form-related states**:
   - `:checked` - checked radio/checkbox
   - `:disabled` - disabled form elements
   - `:valid`/`:invalid` - form validation states
   - `:required` - required form fields

   ```css
   input:checked { background: green; }
   input:invalid { border-color: red; }
   ```

## Pseudo-Elements

Pseudo-elements style specific parts of an element rather than the element itself.

### Common Pseudo-Elements:

1. `::before` and `::after` - inserts content before/after element's content
   ```css
   .note::before {
     content: "Note: ";
     font-weight: bold;
   }
   ```

2. `::first-letter` - styles the first letter of a block-level element
   ```css
   p::first-letter {
     font-size: 200%;
     color: red;
   }
   ```

3. `::first-line` - styles the first line of a block-level element
   ```css
   p::first-line {
     font-weight: bold;
   }
   ```

4. `::selection` - styles text selected by the user
   ```css
   ::selection {
     background: yellow;
     color: black;
   }
   ```

## Key Differences

- **Syntax**: Pseudo-classes use single colon (`:`), pseudo-elements use double colon (`::`) (though single colon works for backward compatibility)
- **Purpose**: Pseudo-classes target element states, pseudo-elements target specific parts of elements
- **Content generation**: Only pseudo-elements can use the `content` property

## Best Practices

1. Use `::` for pseudo-elements for forward compatibility
2. Order matters for link pseudo-classes: `:link`, `:visited`, `:hover`, `:active` (LoVe HAte)
3. Pseudo-elements require a `content` property to be displayed (even if empty)
4. Combine pseudo-classes and pseudo-elements for powerful selectors:
   ```css
   a:hover::after {
     content: " (click me!)";
   }
   ```

These features provide powerful ways to enhance your styling without cluttering your HTML with extra classes or elements.