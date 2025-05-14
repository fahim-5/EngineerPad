
# Input and Output in C

## Introduction
Input and output (I/O) operations are fundamental in C programming for interacting with users and external devices. C provides several built-in functions in the standard library (stdio.h) to handle I/O operations.

## Basic I/O Functions

### 1. printf() - Formatted Output
Used to print formatted output to the standard output (usually the screen).

```c
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    printf("Number: %d, Float: %.2f\n", 42, 3.14159);
    return 0;
}
```

### 2. scanf() - Formatted Input
Reads formatted input from the standard input (usually keyboard).

```c
#include <stdio.h>
int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\n", age);
    return 0;
}
```

## Character I/O

### 1. getchar() and putchar()
- `getchar()` reads a single character
- `putchar()` writes a single character

```c
#include <stdio.h>
int main() {
    char c = getchar();  // Reads one character
    putchar(c);          // Prints the character
    return 0;
}
```

### 2. gets() and puts() (Deprecated in modern C)
For string input/output (Note: `gets()` is unsafe, use `fgets()` instead)

```c
#include <stdio.h>
int main() {
    char name[50];
    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin);  // Safe alternative
    puts(name);                       // Outputs string with newline
    return 0;
}
```

## File I/O

### 1. Opening and Closing Files
```c
FILE *fptr;
fptr = fopen("file.txt", "mode");  // Modes: "r", "w", "a", etc.
fclose(fptr);                      // Always close files
```

### 2. Reading/Writing Files
```c
#include <stdio.h>
int main() {
    FILE *fptr = fopen("example.txt", "w");
    if (fptr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    fprintf(fptr, "Writing to file.\n");
    fclose(fptr);
    return 0;
}
```

### 3. Reading from Files
```c
#include <stdio.h>
int main() {
    char buffer[100];
    FILE *fptr = fopen("example.txt", "r");
    while (fgets(buffer, sizeof(buffer), fptr) != NULL) {
        printf("%s", buffer);
    }
    fclose(fptr);
    return 0;
}
```

## Advanced I/O Concepts

### 1. Binary I/O
```c
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
```

### 2. Error Handling
```c
if (ferror(file)) {
    printf("Error reading file!\n");
}
```

### 3. Stream Buffering
```c
setvbuf(file, buffer, _IOFBF, BUFSIZ);  // Full buffering
```

## Best Practices
1. Always check if files opened successfully
2. Close all opened files
3. Prefer `fgets()` over `gets()`
4. Handle potential buffer overflows
5. Use proper format specifiers in `printf`/`scanf`

## Common Format Specifiers
| Specifier | Description           |
|-----------|-----------------------|
| %d        | Integer               |
| %f        | Float                 |
| %c        | Character             |
| %s        | String                |
| %p        | Pointer address       |
| %x        | Hexadecimal           |
| %e        | Scientific notation   |

## Conclusion
Understanding I/O operations is crucial for C programming. Start with basic console I/O, then progress to file operations and advanced concepts. Always practice safe I/O operations to prevent common vulnerabilities.
```