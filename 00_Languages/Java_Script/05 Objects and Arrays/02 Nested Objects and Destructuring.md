# Nested Objects and Destructuring in JavaScript

## Nested Objects

Nested objects are objects that contain other objects as properties. This allows you to create complex, hierarchical data structures.

### Example of Nested Objects:
```javascript
const user = {
  id: 101,
  name: "John Doe",
  contact: {
    email: "john@example.com",
    phone: {
      home: "555-1234",
      work: "555-5678"
    }
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false
    }
  }
};
```

### Accessing Nested Properties:
```javascript
// Dot notation
console.log(user.contact.email); // "john@example.com"
console.log(user.preferences.notifications.sms); // false

// Bracket notation
console.log(user['contact']['phone']['work']); // "555-5678"
```

### Modifying Nested Properties:
```javascript
user.contact.phone.mobile = "555-9012";
user.preferences.theme = "light";
```

## Object Destructuring

Destructuring allows you to unpack values from objects into distinct variables in a concise way.

### Basic Destructuring:
```javascript
const person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 28
};

// Traditional way
// const firstName = person.firstName;
// const lastName = person.lastName;

// With destructuring
const { firstName, lastName } = person;
console.log(firstName); // "Jane"
console.log(lastName);  // "Smith"
```

### Destructuring with Different Variable Names:
```javascript
const { firstName: fName, lastName: lName } = person;
console.log(fName); // "Jane"
console.log(lName); // "Smith"
```

### Default Values:
```javascript
const { firstName, lastName, middleName = "", age } = person;
console.log(middleName); // "" (default value)
```

### Nested Destructuring:
```javascript
const user = {
  id: 101,
  name: "John Doe",
  contact: {
    email: "john@example.com",
    phone: "555-1234"
  }
};

// Destructuring nested objects
const { 
  name, 
  contact: { email, phone } 
} = user;

console.log(name);  // "John Doe"
console.log(email); // "john@example.com"
console.log(phone); // "555-1234"
```

### Destructuring Function Parameters:
```javascript
function printUser({ name, contact: { email } }) {
  console.log(`Name: ${name}, Email: ${email}`);
}

printUser(user); // "Name: John Doe, Email: john@example.com"
```

### Rest Pattern in Destructuring:
```javascript
const { id, ...rest } = user;
console.log(id);    // 101
console.log(rest);  // { name: "John Doe", contact: { ... } }
```

## Practical Examples

### Example 1: Deep Destructuring
```javascript
const company = {
  name: "Tech Corp",
  employees: {
    count: 150,
    departments: {
      engineering: 80,
      marketing: 40,
      hr: 30
    }
  }
};

const { 
  name: companyName,
  employees: { 
    count: totalEmployees,
    departments: { engineering, marketing }
  }
} = company;

console.log(companyName);      // "Tech Corp"
console.log(totalEmployees);   // 150
console.log(engineering);      // 80
```

### Example 2: Combined with Arrays
```javascript
const userData = {
  id: 101,
  posts: [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
  ]
};

const { 
  posts: [firstPost, secondPost] 
} = userData;

console.log(firstPost.title);  // "First Post"
console.log(secondPost.id);    // 2
```

Nested objects help organize complex data, while destructuring provides a clean way to extract values from these structures. Together, they make working with hierarchical data in JavaScript more efficient and readable.