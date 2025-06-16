
### 3. Creating and Exporting Components.md

# 🏗️ Creating and Exporting Components

## Step 1: Create a Component File
```jsx
// Button.js
function Button() {
  return <button>Click Me</button>;
}
```

## Step 2: Export the Component
```jsx
// Named export (recommended)
export function Button() { /* ... */ }

// Default export
export default function Button() { /* ... */ }
```

## Step 3: Import and Use
```jsx
// For named export
import { Button } from './Button';

// For default export
import Button from './Button';

// Usage
<Button />
```

## Best Practices
1. **One component per file**
2. **PascalCase filenames** (Button.js, not button.js)
3. **Folder organization**:
   ```
   /components
     /Button
       Button.js
       Button.css
   ```

## Example Project Structure
```
src/
  components/
    Header/
      Header.js
      Header.css
    Card/
      Card.js
      index.js  // Re-export pattern
```
```
