# CSS Functions and Math: calc(), clamp(), min(), max(), var(), and inherit

CSS has evolved to include powerful functions that allow for dynamic calculations and more flexible styling. Here's an explanation of each:

## Calculation Functions

### 1. `calc()`
The `calc()` function lets you perform calculations when specifying CSS property values.

**Syntax:** `calc(expression)`

**Examples:**
```css
.container {
  width: calc(100% - 40px); /* 100% width minus 40px */
  height: calc(50vh + 20px); /* 50% viewport height plus 20px */
  font-size: calc(1rem + 1vw); /* Responsive font sizing */
}
```

**Key points:**
- Can mix units (px, %, em, rem, vh, etc.)
- Supports +, -, *, / operators
- Spaces around operators are required

### 2. `min()`
Selects the smallest value from a list of comma-separated expressions.

**Syntax:** `min(value1, value2, ...)`

**Examples:**
```css
.container {
  width: min(80%, 1200px); /* Will never exceed 1200px */
  padding: min(2vw, 20px); /* Smaller of 2vw or 20px */
}
```

### 3. `max()`
Selects the largest value from a list of comma-separated expressions.

**Syntax:** `max(value1, value2, ...)`

**Examples:**
```css
.container {
  width: max(50%, 300px); /* At least 300px, more if 50% is larger */
  font-size: max(1rem, 12px); /* Ensures text is never too small */
}
```

### 4. `clamp()`
Defines a value between a minimum and maximum, based on a preferred value.

**Syntax:** `clamp(min, preferred, max)`

**Examples:**
```css
.container {
  font-size: clamp(1rem, 2.5vw, 2rem); /* Responsive but constrained */
  width: clamp(300px, 50%, 800px); /* Between 300px and 800px */
}
```

**How it works:**
- If preferred value is between min and max → use preferred
- If preferred < min → use min
- If preferred > max → use max

## Reusability Functions

### 5. `var()`
Allows you to use CSS custom properties (variables) in your stylesheets.

**Syntax:** `var(--variable-name, fallback-value)`

**Examples:**
```css
:root {
  --primary-color: #4285f4;
  --padding: 16px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--padding) var(--padding-large, 24px);
  /* Falls back to 24px if --padding-large not defined */
}
```

**Key points:**
- Variables are defined with `--` prefix
- Fallback values are optional
- Useful for theming and consistent design systems

### 6. `inherit`
Makes an element inherit a computed value from its parent.

**Syntax:** `property: inherit;`

**Examples:**
```css
.child {
  color: inherit; /* Takes parent's color */
  font-size: inherit; /* Takes parent's font-size */
  border: inherit; /* Takes parent's border */
}
```

**Key points:**
- Forces inheritance even for non-inherited properties
- Useful for components that need to match parent styling
- Different from `initial` (resets to default) and `unset` (acts as inherit or initial based on property)

## Practical Combinations

These functions can be combined for powerful effects:

```css
:root {
  --base-size: 16px;
  --max-width: 1200px;
}

.container {
  width: min(calc(100% - 2rem), var(--max-width));
  font-size: clamp(var(--base-size), 2.5vw, calc(var(--base-size) * 1.5));
  margin: inherit;
}
```

These CSS functions enable responsive, maintainable, and dynamic styling without JavaScript.