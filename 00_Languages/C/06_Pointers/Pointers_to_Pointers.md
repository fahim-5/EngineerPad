
# Pointers to Pointers in C

## Introduction
A pointer to a pointer is a variable that stores the address of another pointer. This creates multiple levels of indirection:
- Single pointer: Stores address of a variable
- Double pointer: Stores address of a pointer variable
- And so on (triple pointers, etc.)

## Declaration Syntax

### Double Pointer
```c
datatype **pointer_name;
```

### Triple Pointer
```c
datatype ***pointer_name;
```

## Basic Example

```c
int value = 10;
int *ptr = &value;
int **dptr = &ptr;

printf("Value: %d\n", value);      // 10
printf("Single pointer: %d\n", *ptr);      // 10
printf("Double pointer: %d\n", **dptr);    // 10
```

## Memory Representation

```
+--------+     +--------+     +--------+
| dptr   | --> | ptr    | --> | value  |
+--------+     +--------+     +--------+
```

## Common Use Cases

### 1. Dynamic 2D Arrays

```c
int rows = 3, cols = 4;
int **matrix;

// Allocate memory for rows
matrix = (int **)malloc(rows * sizeof(int *));

// Allocate memory for columns
for(int i = 0; i < rows; i++) {
    matrix[i] = (int *)malloc(cols * sizeof(int));
}

// Usage
matrix[1][2] = 5;  // Access element at row 1, column 2

// Free memory
for(int i = 0; i < rows; i++) {
    free(matrix[i]);
}
free(matrix);
```

### 2. Modifying Pointer Variables in Functions

```c
void allocateMemory(int **ptr) {
    *ptr = (int *)malloc(sizeof(int));
    **ptr = 42;
}

int main() {
    int *p = NULL;
    allocateMemory(&p);
    printf("%d", *p);  // 42
    free(p);
    return 0;
}
```

### 3. Array of Strings

```c
char **string_array;
int count = 3;

// Allocate memory for array
string_array = (char **)malloc(count * sizeof(char *));

// Allocate memory for each string
string_array[0] = "Hello";
string_array[1] = "World";
string_array[2] = "!";

// Print all strings
for(int i = 0; i < count; i++) {
    printf("%s ", string_array[i]);
}
// Output: Hello World !

free(string_array);
```

## Triple Pointers Example

```c
int value = 100;
int *ptr = &value;
int **dptr = &ptr;
int ***tptr = &dptr;

printf("Original value: %d\n", value);        // 100
printf("Single pointer: %d\n", *ptr);         // 100
printf("Double pointer: %d\n", **dptr);       // 100
printf("Triple pointer: %d\n", ***tptr);      // 100

// Modify through triple pointer
***tptr = 200;
printf("Modified value: %d\n", value);        // 200
```

## Pointer to Pointer with Arrays

```c
int arr[3] = {10, 20, 30};
int *ptr = arr;
int **dptr = &ptr;

// Access array elements
printf("%d\n", (*dptr)[1]);   // 20 (same as ptr[1])
printf("%d\n", *(*dptr + 2)); // 30 (same as *(ptr + 2))
```

## Common Pitfalls

1. **Uninitialized Pointers**
```c
int **dptr;  // Uninitialized
**dptr = 5;  // Undefined behavior (crash likely)
```

2. **Memory Leaks**
```c
int **matrix = malloc(3 * sizeof(int *));
// Forgot to allocate memory for each row
// Then trying to use matrix[0][0] = 1; would crash
```

3. **Incorrect Dereferencing**
```c
int x = 5;
int *p = &x;
int **pp = &p;

printf("%d", *pp);  // Prints address of x, not value
// Should be: printf("%d", **pp);
```

4. **Type Mismatch**
```c
int x = 10;
int *p = &x;
float **pp = &p;  // Wrong type - compiler warning
```

## Practical Example: Command Line Arguments

The classic `main` function parameters use pointers to pointers:

```c
int main(int argc, char **argv) {
    // argv is array of pointers to char (strings)
    for(int i = 0; i < argc; i++) {
        printf("Argument %d: %s\n", i, argv[i]);
    }
    return 0;
}
```

## Advanced Usage: Function Parameter Modification

```c
void createRecord(void ***data, int *size) {
    *size = 5;
    *data = malloc(*size * sizeof(void *));
    for(int i = 0; i < *size; i++) {
        (*data)[i] = malloc(10 * sizeof(char));
        sprintf((char *)(*data)[i], "Item %d", i);
    }
}

int main() {
    void **records = NULL;
    int count = 0;
    
    createRecord(&records, &count);
    
    for(int i = 0; i < count; i++) {
        printf("%s\n", (char *)records[i]);
        free(records[i]);
    }
    free(records);
    
    return 0;
}
```

## Pointer Levels Cheat Sheet

| Level | Declaration | Access |
|-------|-------------|--------|
| Single | `int *p` | `*p` |
| Double | `int **pp` | `**pp` |
| Triple | `int ***ppp` | `***ppp` |
| N-level | Add more `*` | Add more `*` when dereferencing |
```