
# Loops in C

Loops are control structures used to repeat a block of code multiple times until a specified condition is met. They are essential for automating repetitive tasks efficiently.

## Types of Loops in C

C provides three types of loops:
1. `for` loop
2. `while` loop
3. `do-while` loop

---

## 1. `for` Loop

The `for` loop is used when the number of iterations is known beforehand.

### Syntax:
```c
for (initialization; condition; update) {
    // Code to be executed
}
```

### Example:
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    return 0;
}
```
**Output:** `1 2 3 4 5`

### Explanation:
- **Initialization:** `int i = 1` (loop starts with `i = 1`).
- **Condition:** `i <= 5` (loop runs while `i` is ≤ 5).
- **Update:** `i++` (increment `i` after each iteration).

---

## 2. `while` Loop

The `while` loop is used when the number of iterations is not known in advance.

### Syntax:
```c
while (condition) {
    // Code to be executed
}
```

### Example:
```c
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}
```
**Output:** `1 2 3 4 5`

### Explanation:
- The loop continues as long as the condition `i <= 5` is true.
- The variable `i` is incremented inside the loop.

---

## 3. `do-while` Loop

The `do-while` loop is similar to the `while` loop but executes the code block at least once before checking the condition.

### Syntax:
```c
do {
    // Code to be executed
} while (condition);
```

### Example:
```c
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d ", i);
        i++;
    } while (i <= 5);
    return 0;
}
```
**Output:** `1 2 3 4 5`

### Explanation:
- The loop body executes first, then the condition `i <= 5` is checked.
- Even if the condition is false initially, the loop runs once.

---

## Loop Control Statements

### 1. `break`
Terminates the loop immediately.

**Example:**
```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    printf("%d ", i);
}
```
**Output:** `1 2 3 4`

### 2. `continue`
Skips the current iteration and continues to the next.

**Example:**
```c
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    printf("%d ", i);
}
```
**Output:** `1 2 4 5`

### 3. `goto`
Jumps to a labeled statement (not recommended for loops).

**Example:**
```c
int i = 1;
start:
    printf("%d ", i);
    i++;
    if (i <= 5) goto start;
```
**Output:** `1 2 3 4 5`

---

## Nested Loops

A loop inside another loop is called a nested loop.

### Example:
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("(%d, %d) ", i, j);
        }
        printf("\n");
    }
    return 0;
}
```
**Output:**
```
(1, 1) (1, 2) (1, 3) 
(2, 1) (2, 2) (2, 3) 
(3, 1) (3, 2) (3, 3) 
```

---

## Infinite Loop

A loop that never terminates due to an unmet condition.

### Example:
```c
while (1) {
    printf("Infinite loop\n");
}
```
**Use Case:** Often used in embedded systems or menu-driven programs.

---

## Best Practices
1. **Avoid infinite loops** unless intentional.
2. **Initialize loop variables** properly.
3. **Update loop counters** correctly to prevent infinite loops.
4. **Use `for` loops** when the number of iterations is known.
5. **Prefer `while` loops** for condition-based repetition.

---

## Summary Table

| Loop Type     | When to Use                     | Example                     |
|--------------|--------------------------------|----------------------------|
| `for`        | Known iterations               | `for (int i=0; i<5; i++)`  |
| `while`      | Unknown iterations             | `while (i < 5)`            |
| `do-while`   | At least one iteration required| `do { ... } while (i < 5)` |

```