
# Operators and Expressions in C

## Table of Contents
1. [Introduction to Operators](#introduction-to-operators)
2. [Types of Operators](#types-of-operators)
   - [Arithmetic Operators](#arithmetic-operators)
   - [Relational Operators](#relational-operators)
   - [Logical Operators](#logical-operators)
   - [Bitwise Operators](#bitwise-operators)
   - [Assignment Operators](#assignment-operators)
   - [Miscellaneous Operators](#miscellaneous-operators)
3. [Expressions in C](#expressions-in-c)
4. [Operator Precedence and Associativity](#operator-precedence-and-associativity)
5. [Type Conversions](#type-conversions)

---

## Introduction to Operators
Operators are symbols that perform operations on variables and values. For example, `+` adds two numbers, while `==` checks equality.

---

## Types of Operators

### Arithmetic Operators
Used for mathematical calculations.

| Operator | Description          | Example  |
|----------|----------------------|----------|
| `+`      | Addition            | `a + b`  |
| `-`      | Subtraction         | `a - b`  |
| `*`      | Multiplication      | `a * b`  |
| `/`      | Division            | `a / b`  |
| `%`      | Modulus (Remainder) | `a % b`  |

**Example:**
```c
int a = 10, b = 3;
printf("%d", a % b); // Output: 1 (remainder)
```

---

### Relational Operators
Compare two values and return `1` (true) or `0` (false).

| Operator | Description          | Example  |
|----------|----------------------|----------|
| `==`     | Equal to             | `a == b` |
| `!=`     | Not equal to         | `a != b` |
| `>`      | Greater than         | `a > b`  |
| `<`      | Less than            | `a < b`  |
| `>=`     | Greater than or equal| `a >= b` |
| `<=`     | Less than or equal   | `a <= b` |

**Example:**
```c
int a = 5, b = 10;
printf("%d", a < b); // Output: 1 (true)
```

---

### Logical Operators
Used for combining conditions.

| Operator | Description          | Example            |
|----------|----------------------|--------------------|
| `&&`     | Logical AND          | `(a > 0) && (b > 0)`|
| `||`     | Logical OR           | `(a > 0) || (b > 0)`|
| `!`      | Logical NOT          | `!(a == b)`         |

**Example:**
```c
int a = 1, b = 0;
printf("%d", a && b); // Output: 0 (false)
```

---

### Bitwise Operators
Perform operations on binary representations.

| Operator | Description          | Example  |
|----------|----------------------|----------|
| `&`      | Bitwise AND          | `a & b`  |
| `|`      | Bitwise OR           | `a | b`  |
| `^`      | Bitwise XOR          | `a ^ b`  |
| `~`      | Bitwise NOT          | `~a`     |
| `<<`     | Left shift           | `a << 2` |
| `>>`     | Right shift          | `a >> 2` |

**Example:**
```c
int a = 5; // Binary: 0101
printf("%d", a << 1); // Output: 10 (Shifted left by 1 bit)
```

---

### Assignment Operators
Assign values to variables.

| Operator | Description           | Example   |
|----------|-----------------------|-----------|
| `=`      | Simple assignment     | `a = 5`   |
| `+=`     | Add and assign        | `a += 3`  |
| `-=`     | Subtract and assign   | `a -= 2`  |
| `*=`     | Multiply and assign   | `a *= 4`  |
| `/=`     | Divide and assign     | `a /= 2`  |

**Example:**
```c
int a = 10;
a += 5; // Equivalent to a = a + 5
printf("%d", a); // Output: 15
```

---

### Miscellaneous Operators
Includes ternary, sizeof, and comma operators.

| Operator | Description                  | Example               |
|----------|------------------------------|-----------------------|
| `?:`     | Ternary (conditional)        | `(a > b) ? a : b`     |
| `sizeof` | Returns size of variable     | `sizeof(int)`         |
| `,`      | Comma (separates expressions)| `a = (b=2, b+3)`      |

**Example:**
```c
int a = 5, b = 10;
int max = (a > b) ? a : b; // Output: 10
```

---

## Expressions in C
An expression is a combination of variables, constants, and operators that evaluates to a value.

**Example:**
```c
int result = (a + b) * (c - d); // Arithmetic expression
```

---

## Operator Precedence and Associativity
Determines the order of evaluation in an expression.

| Precedence | Operators               | Associativity |
|------------|-------------------------|---------------|
| 1 (Highest)| `()`, `[]`, `->`, `.`   | Left-to-right |
| 2          | `!`, `~`, `++`, `--`    | Right-to-left |
| 3          | `*`, `/`, `%`           | Left-to-right |
| 4          | `+`, `-`                | Left-to-right |
| 5          | `<<`, `>>`              | Left-to-right |
| 6          | `<`, `<=`, `>`, `>=`    | Left-to-right |
| 7          | `==`, `!=`              | Left-to-right |
| 8          | `&`                     | Left-to-right |
| 9          | `^`                     | Left-to-right |
| 10         | `|`                     | Left-to-right |
| 11         | `&&`                    | Left-to-right |
| 12         | `||`                    | Left-to-right |
| 13         | `?:`                    | Right-to-left |
| 14         | `=`, `+=`, `-=`, etc.   | Right-to-left |
| 15 (Lowest)| `,`                     | Left-to-right |

**Example:**
```c
int x = 5 + 3 * 2; // Evaluates as 5 + (3 * 2) = 11
```

---

## Type Conversions
### Implicit Conversion (Automatic)
Occurs when mixing data types in expressions.

**Example:**
```c
int a = 5;
float b = 2.5;
float result = a + b; // 'a' converted to float
```

### Explicit Conversion (Type Casting)
Forced conversion using `(type)`.

**Example:**
```c
int a = 10, b = 3;
float result = (float)a / b; // Output: 3.333...
```
```