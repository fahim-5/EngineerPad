
# Arrays and Strings in C

## Table of Contents
1. [Introduction to Arrays](#introduction-to-arrays)
2. [Declaration and Initialization](#declaration-and-initialization)
3. [Accessing Array Elements](#accessing-array-elements)
4. [Multidimensional Arrays](#multidimensional-arrays)
5. [Strings in C](#strings-in-c)
6. [String Functions](#string-functions)
7. [Common Operations](#common-operations)
8. [Advanced Topics](#advanced-topics)

---

## Introduction to Arrays
An array is a collection of items stored at contiguous memory locations. All items are of the **same type**.

**Why use arrays?**
- Store multiple values of same type
- Efficient access using index
- Reduce code complexity

---

## Declaration and Initialization

### 1-D Array
```c
// Declaration
int numbers[5];

// Initialization
int numbers[5] = {1, 2, 3, 4, 5};

// Partial initialization (remaining elements become 0)
int numbers[5] = {1, 2};
```

### 2-D Array (Matrix)
```c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

---

## Accessing Array Elements
Arrays use **zero-based indexing**.

```c
int numbers[3] = {10, 20, 30};

printf("%d", numbers[0]); // Output: 10
numbers[1] = 25; // Modify second element
```

**Important:** Always ensure index is within bounds to avoid undefined behavior.

---

## Multidimensional Arrays
C supports arrays with more than one dimension.

### Example: 2D Array
```c
int grid[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Access element
printf("%d", grid[1][2]); // Output: 6
```

### Memory Layout
Multidimensional arrays are stored in **row-major order** in memory.

---

## Strings in C
In C, strings are arrays of characters terminated by a null character (`'\0'`).

### Declaration
```c
char name1[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
char name2[] = "World"; // Automatically adds '\0'
```

### Important Points:
- String literals are stored in read-only memory
- Always allocate space for null terminator
- `sizeof()` includes null terminator, `strlen()` doesn't

---

## String Functions
C provides several string functions in `<string.h>`:

### Common Functions
```c
char str1[20] = "Hello";
char str2[20];

// Copy string
strcpy(str2, str1);

// Concatenation
strcat(str1, " World");

// Length
int len = strlen(str1);

// Comparison
if (strcmp(str1, str2) == 0) {
    printf("Strings are equal");
}
```

### Safety Note
Always prefer `strncpy()`, `strncat()` over `strcpy()`, `strcat()` to prevent buffer overflows.

---

## Common Operations

### Array Traversal
```c
int arr[5] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}
```

### String Input
```c
char name[50];

// Unsafe (no bounds checking)
scanf("%s", name);

// Safer option
fgets(name, 50, stdin);
```

### Searching in Array
```c
int search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}
```

---

## Advanced Topics

### Dynamic Memory Allocation
Arrays with variable size using `malloc()`:
```c
int *arr = (int*)malloc(n * sizeof(int));
// Use array...
free(arr); // Don't forget to free!
```

### Array of Pointers
```c
char *names[] = {"Alice", "Bob", "Charlie"};
```

### Command Line Arguments
```c
int main(int argc, char *argv[]) {
    // argc - argument count
    // argv - array of argument strings
}
```

### Common Pitfalls
1. Forgetting null terminator in strings
2. Array index out of bounds
3. Not checking malloc return value
4. Modifying string literals

---

## Practice Exercises
1. Write a program to reverse an array
2. Implement your own version of `strlen()`
3. Write a program to multiply two matrices
4. Create a function to count vowels in a string
5. Implement bubble sort for an integer array
```