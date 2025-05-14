
# Jump Statements in C

Jump statements in C are used to alter the normal flow of program execution. They allow you to transfer control to another part of the program unconditionally or based on certain conditions.

## Types of Jump Statements

1. **`break` Statement**
2. **`continue` Statement**
3. **`goto` Statement**
4. **`return` Statement**

---

## 1. `break` Statement
The `break` statement is used to terminate the nearest enclosing loop (`for`, `while`, `do-while`) or `switch` statement.

### Syntax:
```c
break;
```

### Example:
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break; // Exit the loop when i is 5
        }
        printf("%d ", i);
    }
    return 0;
}
```
**Output:**
```
1 2 3 4
```

### Key Points:
- Used in loops to exit early.
- Used in `switch` to prevent fall-through.

---

## 2. `continue` Statement
The `continue` statement skips the current iteration of the loop and moves to the next iteration.

### Syntax:
```c
continue;
```

### Example:
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue; // Skip iteration when i is 3
        }
        printf("%d ", i);
    }
    return 0;
}
```
**Output:**
```
1 2 4 5
```

### Key Points:
- Only skips the remaining code in the current iteration.
- Works in `for`, `while`, and `do-while` loops.

---

## 3. `goto` Statement
The `goto` statement transfers control to a labeled statement within the same function.

### Syntax:
```c
goto label;
...
label: statement;
```

### Example:
```c
#include <stdio.h>

int main() {
    int num = 5;
    if (num % 2 == 0) {
        goto even;
    } else {
        goto odd;
    }

even:
    printf("Number is even.\n");
    return 0;

odd:
    printf("Number is odd.\n");
    return 0;
}
```
**Output:**
```
Number is odd.
```

### Key Points:
- Avoid excessive use; can make code hard to read.
- Useful for breaking out of nested loops.

---

## 4. `return` Statement
The `return` statement exits a function and optionally returns a value to the caller.

### Syntax:
```c
return [expression];
```

### Example:
```c
#include <stdio.h>

int add(int a, int b) {
    return a + b; // Return the sum
}

int main() {
    int result = add(3, 4);
    printf("Sum: %d\n", result);
    return 0; // Return 0 to indicate success
}
```
**Output:**
```
Sum: 7
```

### Key Points:
- In `void` functions, `return;` exits without a value.
- In non-`void` functions, must return a value of the correct type.

---

## Comparison Table
| Statement   | Used In          | Purpose                                  |
|-------------|------------------|------------------------------------------|
| `break`     | Loops, `switch`  | Exits the loop/switch immediately.       |
| `continue`  | Loops            | Skips current iteration.                 |
| `goto`      | Anywhere         | Jumps to a labeled statement.            |
| `return`    | Functions        | Exits function and returns a value.      |

---

## Best Practices
1. Prefer `break` and `continue` over `goto` for better readability.
2. Use `return` to make functions modular and reusable.
3. Avoid deep nesting of `goto` statements.

---

## Advanced Use Cases
### Breaking Nested Loops with `goto`
```c
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j == 6) {
            goto exit_loops;
        }
    }
}
exit_loops:
printf("Loops exited.\n");
```

### Using `return` for Error Handling
```c
int divide(int a, int b, int *result) {
    if (b == 0) {
        return -1; // Error code
    }
    *result = a / b;
    return 0; // Success
}
```

---

## Summary
Jump statements provide flexibility in controlling program flow. Use them wisely to write efficient and readable code.
```