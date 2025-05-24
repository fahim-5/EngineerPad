# JavaScript Array Methods: map, filter, reduce, and more

JavaScript provides powerful array methods that allow you to manipulate and transform data efficiently. Here's a detailed explanation of the most commonly used array methods with examples:

## 1. map()

The `map()` method creates a new array by applying a function to each element of the original array.

**Syntax:**
```javascript
array.map(function(currentValue, index, arr), thisValue)
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Convert numbers to strings
const strings = numbers.map(num => num.toString());
console.log(strings); // ['1', '2', '3', '4', '5']
```

**Key Points:**
- Doesn't modify the original array
- Returns a new array with the same length as the original
- Great for transforming data

## 2. filter()

The `filter()` method creates a new array with all elements that pass a test implemented by the provided function.

**Syntax:**
```javascript
array.filter(function(currentValue, index, arr), thisValue)
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// Get numbers greater than 5
const largeNumbers = numbers.filter(num => num > 5);
console.log(largeNumbers); // [6, 7, 8, 9, 10]
```

**Key Points:**
- Returns a new array that may be smaller than the original
- Doesn't modify the original array
- The callback should return a boolean (true to keep the element)

## 3. reduce()

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

**Syntax:**
```javascript
array.reduce(function(accumulator, currentValue, index, arr), initialValue)
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Find maximum number
const max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
console.log(max); // 5

// Flatten an array of arrays
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]
```

**Key Points:**
- Returns a single value (not necessarily an array)
- Takes an initial value for the accumulator (optional but recommended)
- Powerful for aggregating data

## 4. forEach()

The `forEach()` method executes a provided function once for each array element.

**Syntax:**
```javascript
array.forEach(function(currentValue, index, arr), thisValue)
```

**Example:**
```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Print each fruit
fruits.forEach(fruit => console.log(fruit));
// apple
// banana
// cherry

// Modify array elements (not recommended)
const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers); // [2, 4, 6]
```

**Key Points:**
- Doesn't return anything (returns undefined)
- Can modify the original array (though generally not recommended)
- Used for side effects rather than transformations

## 5. find()

The `find()` method returns the value of the first element in the array that satisfies the provided testing function.

**Syntax:**
```javascript
array.find(function(currentValue, index, arr), thisValue)
```

**Example:**
```javascript
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

// Find user with id 2
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Jane' }

const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12
```

**Key Points:**
- Returns the first matching element or undefined if none found
- Stops iterating once a match is found
- Similar to filter() but returns only one element

## 6. some() and every()

**some()** tests whether at least one element passes the test.
**every()** tests whether all elements pass the test.

**Examples:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// some()
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every()
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false
```

**Key Points:**
- Both return a boolean
- some() stops at the first truthy result
- every() stops at the first falsy result

## 7. sort()

The `sort()` method sorts the elements of an array in place and returns the sorted array.

**Syntax:**
```javascript
array.sort(compareFunction)
```

**Example:**
```javascript
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

const numbers = [40, 1, 5, 200];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 5, 40, 200]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [200, 40, 5, 1]
```

**Key Points:**
- Modifies the original array
- Default sort is by string Unicode code points
- For numbers, you need a compare function

## 8. includes()

The `includes()` method determines whether an array includes a certain value.

**Syntax:**
```javascript
array.includes(valueToFind, fromIndex)
```

**Example:**
```javascript
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('orange')); // false
```

**Key Points:**
- Returns a boolean
- Uses strict equality comparison (===)
- Works well for primitive values (not objects)

## Chaining Array Methods

You can chain these methods together for powerful data transformations:

```javascript
const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 499, inStock: true },
  { id: 4, name: 'Monitor', price: 299, inStock: true },
  { id: 5, name: 'Keyboard', price: 99, inStock: false }
];

// Get names of in-stock products with prices over 300
const result = products
  .filter(product => product.inStock && product.price > 300)
  .map(product => product.name);

console.log(result); // ['Laptop', 'Tablet']
```

These array methods are fundamental to modern JavaScript development, enabling you to write more declarative and functional-style code.