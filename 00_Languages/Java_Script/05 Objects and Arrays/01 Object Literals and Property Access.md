# Object Literals and Property Access in JavaScript

## Object Literals

In JavaScript, an object literal is a way to create an object using a comma-separated list of key-value pairs wrapped in curly braces `{}`. It's the most common and simplest way to create objects in JavaScript.

### Syntax:
```javascript
const objectName = {
  key1: value1,
  key2: value2,
  // ...
  keyN: valueN
};
```

### Example:
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "swimming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York"
  }
};
```

## Property Access

There are two main ways to access properties of an object in JavaScript:

### 1. Dot Notation
```javascript
objectName.propertyName
```

Example:
```javascript
console.log(person.firstName); // "John"
console.log(person.age);      // 30
console.log(person.address.city); // "New York"
```

### 2. Bracket Notation
```javascript
objectName['propertyName']
```

Example:
```javascript
console.log(person['lastName']); // "Doe"
console.log(person['hobbies'][1]); // "swimming"
```

### When to use bracket notation:
- When the property name contains spaces or special characters
- When the property name is stored in a variable
- When accessing properties dynamically

Example:
```javascript
const propertyName = 'age';
console.log(person[propertyName]); // 30

const weirdKey = 'favorite color';
const obj = {
  [weirdKey]: 'blue'
};
console.log(obj[weirdKey]); // "blue"
```

## Adding and Modifying Properties

You can add or modify properties after object creation:

```javascript
// Adding new properties
person.email = "john@example.com";
person['phone'] = "555-1234";

// Modifying existing properties
person.age = 31;
person['isEmployed'] = false;
```

## Deleting Properties

Use the `delete` operator to remove a property:

```javascript
delete person.phone;
delete person['hobbies'];
```

## Object Methods

Objects can also contain functions (methods):

```javascript
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  // Shorthand syntax (ES6)
  sayBye() {
    console.log("Goodbye!");
  }
};

person.greet(); // "Hello, my name is Alice"
person.sayBye(); // "Goodbye!"
```

## Computed Property Names (ES6)

You can use expressions as property names using square brackets:

```javascript
const prefix = 'user_';
const obj = {
  [prefix + 'name']: 'John',
  [prefix + 'age']: 30
};

console.log(obj.user_name); // "John"
```

Object literals provide a flexible way to organize and structure data in JavaScript, and property access methods give you different ways to work with that data.