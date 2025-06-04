
# JavaScript Basics: Syntax and Variables

JavaScript is a versatile programming language used for web development. Understanding its syntax and variables is fundamental for any JavaScript programmer.

## Basic Syntax

JavaScript syntax is the set of rules that define how programs are written.

### 1. Statements
A JavaScript program is a list of **statements** executed by the browser.

```javascript
console.log("Hello, World!"); // This is a statement
```

### 2. Semicolons
Semicolons (`;`) separate statements (optional but recommended).

```javascript
let x = 5;
let y = 10;
```

### 3. Comments
- **Single-line comments**: `// Comment here`
- **Multi-line comments**: `/* Comment here */`

```javascript
// This is a single-line comment
/* This is a 
   multi-line comment */
```

### 4. Case Sensitivity
JavaScript is case-sensitive (`myVar` ≠ `myvar`).

---

## Variables in JavaScript

Variables store data values. JavaScript uses `var`, `let`, and `const` for variable declarations.

### 1. `var` (Older way, function-scoped)
```javascript
var name = "Alice";
console.log(name); // Output: Alice
```

### 2. `let` (Block-scoped, reassignable)
```javascript
let age = 25;
age = 26; // Reassignment allowed
console.log(age); // Output: 26
```

### 3. `const` (Block-scoped, immutable)
```javascript
const PI = 3.1416;
// PI = 3.14; // Error: Assignment to constant variable
console.log(PI); // Output: 3.1416
```

### Variable Naming Rules
- Must start with a letter, `_`, or `$`.
- Cannot use reserved keywords (e.g., `let`, `if`).
- Use camelCase (e.g., `myVariableName`).

```javascript
let firstName = "John"; // Valid
// let 123name = "Error"; // Invalid
```

---

## Data Types in JavaScript

JavaScript is dynamically typed (no explicit type definition).

### 1. Primitive Types
- **String**: `let name = "Alice";`
- **Number**: `let age = 30;`
- **Boolean**: `let isStudent = true;`
- **Undefined**: `let x;` (default `undefined`)
- **Null**: `let y = null;` (explicit empty value)

### 2. Non-Primitive Types
- **Object**: `let person = { name: "Bob", age: 25 };`
- **Array**: `let colors = ["red", "green", "blue"];`

```javascript
let score = 95; // Number
let greeting = "Hello"; // String
let isLoggedIn = false; // Boolean
```

---

## Variable Scope

### 1. Global Scope
Variables declared outside any function.

```javascript
let globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}
test();
```

### 2. Local (Function) Scope
Variables declared inside a function.

```javascript
function greet() {
  let message = "Hello!";
  console.log(message); // Works
}
// console.log(message); // Error: message not defined
```

### 3. Block Scope (`let` and `const`)
Variables inside `{}` (e.g., `if`, `for`).

```javascript
if (true) {
  let blockVar = "I'm block-scoped";
  console.log(blockVar); // Works
}
// console.log(blockVar); // Error: blockVar not defined
```

---

## Hoisting

JavaScript moves declarations to the top (only with `var`).

```javascript
console.log(a); // undefined (not an error)
var a = 5;
```

`let` and `const` are **not hoisted** (Temporal Dead Zone).

```javascript
// console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
```

---

## Best Practices
1. Use `const` by default, `let` if reassignment is needed.
2. Avoid `var` (legacy, can cause scope issues).
3. Use meaningful variable names (`userAge` instead of `x`).

```javascript
const MAX_USERS = 100;
let currentUsers = 5;
```

---

Now you have a solid understanding of JavaScript syntax and variables! 🚀
```