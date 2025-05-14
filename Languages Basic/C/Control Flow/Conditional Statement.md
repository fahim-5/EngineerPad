
# Conditional Statements in C

Conditional statements allow you to control the flow of your program based on certain conditions. In C, these include `if`, `if-else`, `else-if` ladder, and `switch-case`.

## 1. `if` Statement
The simplest conditional statement. Executes a block of code only if the condition is true.

### Syntax:
```c
if (condition) {
    // Code to execute if condition is true
}
```

### Example:
```c
int age = 18;
if (age >= 18) {
    printf("You are eligible to vote.");
}
```

---

## 2. `if-else` Statement
Adds an alternative block of code to execute when the condition is false.

### Syntax:
```c
if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}
```

### Example:
```c
int num = 10;
if (num % 2 == 0) {
    printf("Even number.");
} else {
    printf("Odd number.");
}
```

---

## 3. `else-if` Ladder
Checks multiple conditions in sequence. Useful for handling multiple cases.

### Syntax:
```c
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if all conditions are false
}
```

### Example:
```c
int marks = 85;
if (marks >= 90) {
    printf("Grade A");
} else if (marks >= 80) {
    printf("Grade B");
} else if (marks >= 70) {
    printf("Grade C");
} else {
    printf("Grade D");
}
```

---

## 4. Nested `if` Statements
An `if` or `if-else` statement inside another `if` or `else` block.

### Example:
```c
int a = 10, b = 20;
if (a == 10) {
    if (b == 20) {
        printf("Both conditions are true.");
    }
}
```

---

## 5. `switch-case` Statement
An alternative to `else-if` ladder for comparing a variable against multiple constant values.

### Syntax:
```c
switch (variable) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no case matches
}
```

### Example:
```c
char grade = 'B';
switch (grade) {
    case 'A':
        printf("Excellent!");
        break;
    case 'B':
        printf("Good!");
        break;
    case 'C':
        printf("Average.");
        break;
    default:
        printf("Invalid grade.");
}
```

### Key Notes:
- `break` exits the `switch` block. Without it, execution "falls through" to the next case.
- `default` is optional and runs when no cases match.

---

## Ternary Operator (Conditional Operator)
A shorthand for simple `if-else` statements.

### Syntax:
```c
condition ? expression_if_true : expression_if_false;
```

### Example:
```c
int a = 5, b = 10;
int max = (a > b) ? a : b;
printf("Maximum: %d", max);
```

---

## Best Practices
1. Always use `{}` for blocks, even if they contain a single statement.
2. Avoid deep nesting (more than 3 levels) for better readability.
3. Use `switch-case` for multiple constant comparisons instead of long `else-if` chains.
4. Keep conditions simple; use logical operators (`&&`, `||`, `!`) to combine checks.

---

## Common Mistakes
1. Using `=` (assignment) instead of `==` (comparison) in conditions.
   ```c
   if (x = 5) { } // Wrong! Assigns 5 to x
   if (x == 5) { } // Correct
   ```
2. Forgetting `break` in `switch-case`.
3. Unnecessary conditions:
   ```c
   if (condition == true) // Redundant
   if (condition)         // Better
   ```
```