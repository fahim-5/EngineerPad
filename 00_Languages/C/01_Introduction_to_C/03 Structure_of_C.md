
# Structure of a C Program

## Introduction

Understanding the structure of a C program is fundamental to mastering the language. A typical C program is modular, readable, and logically organized. It consists of several building blocks such as headers, functions, variables, and control statements.

---

## Basic Structure

```c
#include <stdio.h>  // 1. Preprocessor Directive

// 2. Global Declarations (optional)

int main() {        // 3. Main Function
    // 4. Variable Declarations
    int a, b, sum;

    // 5. Input/Output Statements
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    // 6. Processing
    sum = a + b;

    // 7. Output Result
    printf("Sum = %d\n", sum);

    return 0;       // 8. Return Statement
}

// 9. User-Defined Functions (optional)
```

---

## Components Explained

### 1. Preprocessor Directives
- Begin with `#` (e.g., `#include <stdio.h>`).
- Used to include header files or define macros before compilation.

### 2. Global Declarations
- Variables and functions declared outside `main()`.
- Accessible from any function in the program.

### 3. Main Function
- Entry point of every C program: `int main()`.
- Must return an integer (typically `0` for success).

### 4. Variable Declarations
- All variables must be declared before use.
- Example: `int age; float salary;`.

### 5. Input/Output Statements
- Input: `scanf()`.
- Output: `printf()`.

### 6. Processing/Logic
- Core logic or computations.
- Includes arithmetic, loops, conditions, etc.

### 7. Return Statement
- Ends the program and optionally returns a value to the OS.
- `return 0;` indicates successful execution.

### 8. User-Defined Functions
- Optional modular functions defined by the programmer.
- Enhance reusability and readability.

---

## Example: C Program to Find the Square of a Number

```c
#include <stdio.h>

int square(int n);  // Function Declaration

int main() {
    int num, result;

    printf("Enter a number: ");
    scanf("%d", &num);

    result = square(num);  // Function Call
    printf("Square = %d\n", result);

    return 0;
}

// Function Definition
int square(int n) {
    return n * n;
}
```

---

## Conclusion

A well-structured C program is easier to read, debug, and scale. Mastering its structure lays the groundwork for writing efficient, modular, and maintainable code.

> “Structure is the backbone of every great program. In C, it’s not just syntax — it’s strategy.”

---

## References
- *The C Programming Language* by Kernighan & Ritchie.
- [cplusplus.com](https://www.cplusplus.com).
- [GeeksforGeeks - C Programming](https://www.geeksforgeeks.org/c-programming-language/).
