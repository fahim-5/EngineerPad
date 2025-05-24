
# Writing and Running JavaScript

JavaScript is a versatile programming language used for web development, server-side programming, and more. This guide covers everything from basic syntax to advanced concepts.

## Table of Contents
1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Writing JavaScript Code](#writing-javascript-code)
3. [Running JavaScript](#running-javascript)
4. [Variables and Data Types](#variables-and-data-types)
5. [Operators](#operators)
6. [Control Structures](#control-structures)
7. [Functions](#functions)
8. [Objects and Arrays](#objects-and-arrays)
9. [Error Handling](#error-handling)
10. [Advanced Topics](#advanced-topics)

---

## Introduction to JavaScript
JavaScript is a scripting language that enables dynamic content on websites. It runs in web browsers and on servers (Node.js).

### Key Features:
- **Client-side execution**: Runs in the browser.
- **Event-driven**: Responds to user actions.
- **Asynchronous**: Handles tasks without blocking.

Example:
```javascript
console.log("Hello, World!");
```

---

## Writing JavaScript Code
JavaScript can be written in:
1. **HTML files** (inside `<script>` tags)
2. **External `.js` files** (linked via `<script src="file.js">`)
3. **Browser console** (for quick testing)

### Inline JavaScript Example:
```html
<script>
  alert("This is inline JavaScript!");
</script>
```

### External JavaScript Example:
```html
<script src="script.js"></script>
```

---

## Running JavaScript
### 1. In Web Browsers
- Open Developer Tools (F12) → Console tab
- Right-click webpage → "Inspect" → Console

### 2. Using Node.js
Install Node.js, then run:
```bash
node filename.js
```

### 3. Online Editors
- JSFiddle
- CodePen
- Repl.it

---

## Variables and Data Types
### Declaring Variables:
```javascript
let name = "Alice"; // Mutable
const PI = 3.14;    // Immutable
var age = 25;       // Older syntax (avoid in modern JS)
```

### Data Types:
| Type       | Example          |
|------------|------------------|
| String     | `"Hello"`        |
| Number     | `42`, `3.14`     |
| Boolean    | `true`, `false`  |
| Object     | `{name: "Bob"}`  |
| Array      | `[1, 2, 3]`      |
| Null       | `null`           |
| Undefined  | `undefined`      |

---

## Operators
### Arithmetic:
```javascript
let sum = 5 + 3;  // 8
let mod = 10 % 3; // 1
```

### Comparison:
```javascript
5 == "5"   // true (loose equality)
5 === "5"  // false (strict equality)
```

### Logical:
```javascript
true && false  // false
true || false  // true
!true          // false
```

---

## Control Structures
### If-Else:
```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Loops:
```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}
```

---

## Functions
### Basic Function:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
greet("Alice"); // "Hello, Alice!"
```

### Arrow Function (ES6+):
```javascript
const square = (x) => x * x;
square(5); // 25
```

---

## Objects and Arrays
### Object:
```javascript
const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
```

### Array:
```javascript
const colors = ["red", "green", "blue"];
colors.push("yellow"); // Add item
colors.forEach(color => console.log(color));
```

---

## Error Handling
### Try-Catch:
```javascript
try {
  nonExistentFunction();
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Execution complete");
}
```

---

## Advanced Topics
### 1. Promises & Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
```

### 2. ES6+ Features
- Template literals: `` `Hello ${name}` ``
- Destructuring: `const {name, age} = person;`
- Spread operator: `const newArr = [...oldArr, newItem];`

### 3. Modules
```javascript
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

### 4. Closures
```javascript
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
counter(); // 1
counter(); // 2
```

---

## Best Practices
1. Use `const` by default, `let` when reassignment is needed
2. Avoid global variables
3. Use strict mode (`"use strict";`)
4. Follow consistent naming conventions (camelCase)
5. Comment your code
6. Handle errors gracefully
```