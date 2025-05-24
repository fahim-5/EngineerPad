# Loops in JavaScript

Loops are fundamental programming constructs that allow you to execute a block of code repeatedly. JavaScript provides several types of loops to handle different looping requirements:

## 1. `for` Loop
The most common loop, ideal when you know how many times you want to iterate.

```javascript
for (initialization; condition; finalExpression) {
  // code to be executed
}

// Example:
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0, 1, 2, 3, 4
}
```

## 2. `while` Loop
Executes a block of code as long as a specified condition is true.

```javascript
while (condition) {
  // code to be executed
}

// Example:
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## 3. `do...while` Loop
Similar to while loop, but guarantees at least one execution of the code block.

```javascript
do {
  // code to be executed
} while (condition);

// Example:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## 4. `for...in` Loop
Used to iterate over the enumerable properties of an object.

```javascript
for (key in object) {
  // code to be executed
}

// Example:
const person = {name: 'John', age: 30};
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

## 5. `for...of` Loop (ES6)
Creates a loop iterating over iterable objects (arrays, strings, etc.).

```javascript
for (variable of iterable) {
  // code to be executed
}

// Example:
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
```

## Loop Control Statements
- `break`: Terminates the loop immediately
- `continue`: Skips the current iteration and continues with the next one

```javascript
// Break example
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // Prints 0-4
}

// Continue example
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Prints 0, 1, 3, 4 (skips 2)
}
```

## Modern Array Iteration Methods
While not technically loops, these methods provide cleaner ways to iterate:

- `array.forEach()`: Executes a function for each element
- `array.map()`: Creates a new array with transformed elements
- `array.filter()`: Creates a new array with elements that pass a test
- `array.reduce()`: Reduces the array to a single value

Each loop type has its specific use cases, and choosing the right one depends on what you're trying to accomplish and what data structure you're working with.
