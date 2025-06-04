
# Parameter Passing in C

## Introduction
Parameter passing is the mechanism of transferring data between functions in C. Understanding how arguments are passed to functions is crucial for writing efficient and bug-free code.

## Types of Parameter Passing
In C, there are two main ways to pass parameters to functions:

1. **Pass by Value**
2. **Pass by Reference**

---

## 1. Pass by Value
- A copy of the actual parameter's value is passed to the function
- Changes made inside the function don't affect the original value
- Default parameter passing mechanism in C

### Example
```c
#include <stdio.h>

void modifyValue(int x) {
    x = x + 10;
    printf("Inside function: %d\n", x);
}

int main() {
    int num = 5;
    modifyValue(num);
    printf("Outside function: %d\n", num);
    return 0;
}
```

**Output:**
```
Inside function: 15
Outside function: 5
```

### Characteristics
- Simple and safe
- Original data remains unchanged
- Uses more memory for large data types (as copies are made)

---

## 2. Pass by Reference
- The address of the variable is passed to the function
- Changes made inside the function affect the original value
- Achieved using pointers in C

### Example
```c
#include <stdio.h>

void modifyReference(int *x) {
    *x = *x + 10;
    printf("Inside function: %d\n", *x);
}

int main() {
    int num = 5;
    modifyReference(&num);
    printf("Outside function: %d\n", num);
    return 0;
}
```

**Output:**
```
Inside function: 15
Outside function: 15
```

### Characteristics
- More memory efficient for large data
- Allows modification of original data
- Requires careful handling to avoid unintended side effects

---

## Comparing Both Methods

| Feature            | Pass by Value | Pass by Reference |
|--------------------|---------------|-------------------|
| Parameter Type     | Actual value  | Address of value  |
| Memory Usage      | More          | Less              |
| Data Modification | Not possible | Possible          |
| Safety            | Safer         | Requires caution  |
| Speed             | Slower        | Faster            |

---

## Advanced Concepts

### 1. Arrays as Parameters
In C, arrays are always passed by reference (as pointers) even when not explicitly using pointers.

```c
void modifyArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        arr[i] *= 2;
    }
}
```

### 2. Const Parameters
Prevents modification of passed parameters:

```c
void printArray(const int arr[], int size) {
    // arr[0] = 5; // This would cause compiler error
}
```

### 3. Passing Structures
Structures can be passed by value or reference:

```c
struct Point { int x; int y; };

// Pass by value
void movePointByVal(struct Point p) {
    p.x += 10;
}

// Pass by reference
void movePointByRef(struct Point *p) {
    p->x += 10;
}
```

---

## Best Practices
1. Use pass by value for small data types that shouldn't be modified
2. Use pass by reference for large data structures to avoid copying
3. Mark parameters as `const` when they shouldn't be modified
4. Clearly document when functions modify their parameters

---

## Common Pitfalls
1. Modifying value parameters expecting changes to reflect outside
2. Forgetting to use address-of operator (`&`) when passing to pointer parameters
3. Dereferencing NULL pointers passed as arguments
4. Assuming array parameters contain size information

---

## Conclusion
Understanding parameter passing is fundamental in C programming. While pass by value is simpler and safer, pass by reference is more efficient for large data and when modifications are needed. Choosing the right method depends on your specific requirements and the data you