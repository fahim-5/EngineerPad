
# Constants and Literals in C

## Introduction
Constants and literals are fundamental concepts in C programming that represent fixed values. They cannot be modified during program execution.

## Constants
Constants are identifiers whose values remain fixed throughout the program. There are two ways to define constants:

### 1. Using `#define` Preprocessor
```c
#define PI 3.14159
#define MAX_SIZE 100
```

### 2. Using `const` Keyword
```c
const float pi = 3.14159;
const int max_size = 100;
```

## Literals
Literals are fixed values that appear directly in the code. They can be of different types:

### 1. Integer Literals
```c
int decimal = 42;       // Decimal
int octal = 052;        // Octal (starts with 0)
int hex = 0x2A;         // Hexadecimal (starts with 0x)
```

### 2. Floating-point Literals
```c
float f1 = 3.14;
float f2 = 3.14f;       // 'f' suffix for float
double d1 = 3.14;       // Default is double
double d2 = 3.14l;      // 'l' suffix for long double
```

### 3. Character Literals
```c
char ch1 = 'A';
char ch2 = '\n';        // Escape sequence for newline
char ch3 = '\x41';      // Hexadecimal representation
```

### 4. String Literals
```c
char str[] = "Hello, World!";
```

### 5. Escape Sequences
Special character combinations that represent non-printable characters:
```c
'\n'    // Newline
'\t'    // Tab
'\\'    // Backslash
'\''    // Single quote
'\"'    // Double quote
'\0'    // Null character
```

## Advanced Concepts

### 1. Constant Expressions
Expressions evaluated at compile-time:
```c
const int size = 2 * 50 + 1;
```

### 2. Enumeration Constants
```c
enum Color {RED, GREEN, BLUE};
enum Color c = RED;
```

### 3. Compound Literals (C99)
```c
int *ptr = (int[]){1, 2, 3};  // Anonymous array
```

### 4. Type Suffixes
```c
unsigned int val1 = 30u;
long int val2 = 30l;
long long int val3 = 30ll;
```

## Best Practices
1. Use uppercase names for `#define` constants (e.g., `MAX_SIZE`)
2. Prefer `const` over `#define` for type safety
3. Use meaningful names for constants
4. For magic numbers, always use named constants
5. Be consistent with literal suffixes (e.g., `3.14f` vs `3.14`)

## Common Pitfalls
1. Forgetting that `#define` performs simple text substitution
2. Modifying `const` variables through pointers (undefined behavior)
3. Confusing integer division with floating-point division
4. Not considering integer overflow with large literals
```