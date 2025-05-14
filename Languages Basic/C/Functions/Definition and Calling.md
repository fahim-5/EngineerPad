
# Definition and Calling a Function in C

## Introduction
A function in C is a self-contained block of code that performs a specific task. Functions help in breaking down complex problems into smaller, manageable parts, promoting code reusability and modularity.

---

## 1. Function Definition
A function definition consists of:
- **Return Type**: The data type of the value returned by the function.
- **Function Name**: Identifier used to call the function.
- **Parameters**: Inputs to the function (optional).
- **Function Body**: Statements executed when the function is called.

### Syntax
```c
return_type function_name(parameters) {
    // Function body
    return value; // Optional (depends on return type)
}
```

### Example
```c
int add(int a, int b) {  // Function definition
    return a + b;
}
```

---

## 2. Function Declaration (Prototype)
A function declaration tells the compiler about the function's name, return type, and parameters. It is optional if the function is defined before use.

### Syntax
```c
return_type function_name(parameters);
```

### Example
```c
int add(int a, int b);  // Declaration
```

---

## 3. Calling a Function
To execute a function, you "call" it by its name and pass arguments (if required).

### Syntax
```c
function_name(arguments);
```

### Example
```c
int result = add(5, 3);  // Function call
printf("Sum: %d", result);  // Output: Sum: 8
```

---

## 4. Types of Functions
### a) Built-in Functions
Predefined in C libraries (e.g., `printf()`, `scanf()`).

### b) User-defined Functions
Created by the programmer (e.g., `add()` in the example above).

---

## 5. Function Categories
### a) Functions with No Return Type and No Parameters
```c
void greet() {
    printf("Hello, World!");
}
```

### b) Functions with Return Type but No Parameters
```c
int getRandomNumber() {
    return rand() % 100;
}
```

### c) Functions with Parameters but No Return Type
```c
void printSum(int a, int b) {
    printf("Sum: %d", a + b);
}
```

### d) Functions with Both Return Type and Parameters
```c
float divide(float x, float y) {
    return x / y;
}
```

---

## 6. Key Points
- A function must be **declared or defined** before it is called.
- If a function returns a value, use the `return` statement.
- Functions can call other functions (**Nested Calls**).
- **Recursion**: A function calling itself.

---

## 7. Advanced Concepts
### a) Pass by Value vs. Pass by Reference
- **Pass by Value**: Copies the argument's value (default in C).
  ```c
  void modify(int x) { x = 10; }
  ```
- **Pass by Reference**: Uses pointers to modify the original value.
  ```c
  void modify(int *x) { *x = 10; }
  ```

### b) Static Variables in Functions
Retains its value between function calls.
```c
void counter() {
    static int count = 0;
    count++;
    printf("Count: %d", count);
}
```

### c) Inline Functions
Optimized for speed (suggested to the compiler using `inline`).
```c
inline int square(int x) { return x * x; }
```

---

## 8. Example Program
```c
#include <stdio.h>

// Function declaration
int multiply(int a, int b);

int main() {
    int x = 5, y = 4;
    int product = multiply(x, y);  // Function call
    printf("Product: %d", product);
    return 0;
}

// Function definition
int multiply(int a, int b) {
    return a * b;
}
```

---

## Conclusion
Functions are essential for structured programming in C. They improve readability, reusability, and debugging efficiency. Start with simple functions and gradually explore advanced concepts like recursion and pointers.
```