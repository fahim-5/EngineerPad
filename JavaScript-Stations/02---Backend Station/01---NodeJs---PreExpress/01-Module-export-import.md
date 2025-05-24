# Modules in Node.js

A module in Node.js is a self-contained piece of code that encapsulates related functionality. Modules help you organize your code into logical units, making it more maintainable and reusable. Node.js uses the CommonJS module system by default (though ES modules are also supported).

## Local Modules

Local modules are files you create in your project that export functionality to be used in other parts of your application.

### Exporting from a Module

There are two main ways to export from a local module:

1. **module.exports** - Assign what you want to export to this object
2. **exports** - A shorthand for module.exports (but with some caveats)

#### Example: Creating a local module

```javascript
// myModule.js

// Exporting a single function
const greet = (name) => {
  return `Hello, ${name}!`;
};

module.exports = greet;

// Alternatively, you could export multiple things:
/*
module.exports = {
  greet,
  anotherFunction,
  someVariable
};
*/
```

### Importing a Module

You use the `require()` function to import a module:

```javascript
// app.js

const greet = require('./myModule.js');

console.log(greet('Alice')); // Output: Hello, Alice!
```

## More Export/Import Examples

### Exporting multiple items

```javascript
// mathUtils.js

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const PI = 3.14159;

// Method 1: Attaching to exports object
exports.add = add;
exports.subtract = subtract;
exports.PI = PI;

// Method 2: Assigning an object to module.exports
/*
module.exports = {
  add,
  subtract,
  PI
};
*/
```

### Importing multiple items

```javascript
// calculator.js

// Destructuring the imported object
const { add, subtract, PI } = require('./mathUtils');

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(PI);             // 3.14159

// Alternatively, import the whole object
/*
const math = require('./mathUtils');
console.log(math.add(5, 3));
*/
```

## ES Modules (import/export syntax)

Node.js also supports ES modules (the standard module system in JavaScript). To use this:

1. Either use `.mjs` file extension, or
2. Add `"type": "module"` to your package.json

### ES Module Export Example

```javascript
// esModule.mjs

export const greet = (name) => `Hello, ${name}!`;
export const farewell = (name) => `Goodbye, ${name}!`;

const secret = "I'm a secret";
export default secret;
```

### ES Module Import Example

```javascript
// app.mjs

import { greet, farewell } from './esModule.mjs';
import secret from './esModule.mjs';

console.log(greet('Bob'));    // Hello, Bob!
console.log(farewell('Bob')); // Goodbye, Bob!
console.log(secret);          // I'm a secret
```

## Key Points

1. **CommonJS** (require/module.exports) is Node.js's original module system
2. **ES Modules** (import/export) are the newer standard and work in both Node.js and browsers
3. Local modules are referenced with relative paths (`./` or `../`)
4. Node.js modules are cached after the first load
5. Modules have their own scope - variables are not global unless explicitly exported

Choose either CommonJS or ES modules for your project and be consistent. In modern Node.js, ES modules are generally preferred for new projects.