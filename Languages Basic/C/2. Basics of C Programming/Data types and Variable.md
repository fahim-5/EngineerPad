
# Data Types and Variables in C

## Introduction
In C programming, data types and variables are fundamental concepts that define how data is stored and manipulated. Understanding these is crucial for writing efficient and error-free code.

## Data Types in C
Data types specify the type of data a variable can hold. C has several built-in data types:

### 1. Basic Data Types
- **`int`**: Stores integers (whole numbers).
  ```c
  int age = 25;
  ```
- **`float`**: Stores single-precision floating-point numbers (decimals).
  ```c
  float price = 19.99;
  ```
- **`double`**: Stores double-precision floating-point numbers (more precise decimals).
  ```c
  double pi = 3.1415926535;
  ```
- **`char`**: Stores a single character.
  ```c
  char grade = 'A';
  ```

### 2. Derived Data Types
- **Arrays**: Collection of similar data types.
  ```c
  int numbers[5] = {1, 2, 3, 4, 5};
  ```
- **Pointers**: Stores memory addresses.
  ```c
  int *ptr = &age;
  ```
- **Structures**: Groups different data types.
  ```c
  struct Student {
      char name[50];
      int roll_no;
  };
  ```

### 3. Void Type
- **`void`**: Represents no type. Used in functions that return nothing.
  ```c
  void displayMessage() {
      printf("Hello, World!");
  }
  ```

## Variables in C
Variables are containers for storing data. They must be declared with a data type before use.

### Rules for Naming Variables
1. Must start with a letter or underscore (`_`).
2. Can include letters, digits, and underscores.
3. Cannot use C keywords (e.g., `int`, `float`).
4. Case-sensitive (`age` ≠ `Age`).

### Example:
```c
int score = 90;      // Correct
float _temp = 36.5;  // Correct
char 1name = 'a';    // Incorrect (starts with a digit)
```

### Declaring and Initializing Variables
- **Declaration**: Specifying the variable name and type.
  ```c
  int count;
  ```
- **Initialization**: Assigning a value during declaration.
  ```c
  int count = 10;
  ```

### Example Program
```c
#include <stdio.h>
int main() {
    int num1 = 5;       // Integer variable
    float num2 = 3.14;  // Float variable
    char letter = 'C';  // Character variable

    printf("Integer: %d\n", num1);
    printf("Float: %f\n", num2);
    printf("Character: %c\n", letter);

    return 0;
}
```

## Key Points to Remember
1. Always declare variables before using them.
2. Choose meaningful names (e.g., `salary` instead of `s`).
3. Initialize variables to avoid garbage values.
4. Use the correct data type for the data you want to store.

## Conclusion
Understanding data types and variables is the first step in learning C programming. Practice declaring and using variables to become comfortable with these concepts.
```