
# Common String Functions in C

String functions in C are essential for manipulating and working with strings efficiently. These functions are declared in the `<string.h>` header file. Below is a comprehensive guide from beginner to advanced levels.

---

## Table of Contents
1. [Introduction to Strings in C](#introduction-to-strings-in-c)
2. [Basic String Functions](#basic-string-functions)
   - [strlen()](#strlen)
   - [strcpy()](#strcpy)
   - [strcat()](#strcat)
   - [strcmp()](#strcmp)
3. [Intermediate String Functions](#intermediate-string-functions)
   - [strchr()](#strchr)
   - [strstr()](#strstr)
   - [strtok()](#strtok)
4. [Advanced String Functions](#advanced-string-functions)
   - [memcpy()](#memcpy)
   - [memset()](#memset)
   - [strncpy()](#strncpy)
   - [strncat()](#strncat)
5. [Safety Considerations](#safety-considerations)

---

## Introduction to Strings in C
In C, a string is an array of characters terminated by a null character (`'\0'`). For example:
```c
char greeting[] = "Hello, World!";
```

---

## Basic String Functions

### `strlen()`
Calculates the length of a string (excluding the null terminator).

**Syntax:**
```c
size_t strlen(const char *str);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";
    printf("Length: %zu\n", strlen(str)); // Output: 5
    return 0;
}
```

### `strcpy()`
Copies one string to another.

**Syntax:**
```c
char *strcpy(char *dest, const char *src);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Copy me!";
    char dest[20];
    strcpy(dest, src);
    printf("Destination: %s\n", dest); // Output: Copy me!
    return 0;
}
```

### `strcat()`
Concatenates (appends) one string to another.

**Syntax:**
```c
char *strcat(char *dest, const char *src);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char dest[20] = "Hello";
    char src[] = " World!";
    strcat(dest, src);
    printf("Result: %s\n", dest); // Output: Hello World!
    return 0;
}
```

### `strcmp()`
Compares two strings lexicographically.

**Syntax:**
```c
int strcmp(const char *str1, const char *str2);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "apple";
    char str2[] = "banana";
    int result = strcmp(str1, str2);
    printf("Comparison result: %d\n", result); // Output: negative value (apple < banana)
    return 0;
}
```

---

## Intermediate String Functions

### `strchr()`
Finds the first occurrence of a character in a string.

**Syntax:**
```c
char *strchr(const char *str, int c);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Find the 'e'!";
    char *ptr = strchr(str, 'e');
    printf("Found at position: %ld\n", ptr - str); // Output: 6
    return 0;
}
```

### `strstr()`
Finds the first occurrence of a substring in a string.

**Syntax:**
```c
char *strstr(const char *haystack, const char *needle);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char haystack[] = "Search for 'fun' in this string!";
    char needle[] = "fun";
    char *ptr = strstr(haystack, needle);
    printf("Substring found: %s\n", ptr); // Output: fun in this string!
    return 0;
}
```

### `strtok()`
Splits a string into tokens using a delimiter.

**Syntax:**
```c
char *strtok(char *str, const char *delim);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Split,this,string";
    char *token = strtok(str, ",");
    while (token != NULL) {
        printf("%s\n", token);
        token = strtok(NULL, ",");
    }
    return 0;
}
```

---

## Advanced String Functions

### `memcpy()`
Copies a block of memory from one location to another.

**Syntax:**
```c
void *memcpy(void *dest, const void *src, size_t n);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Copy this memory!";
    char dest[50];
    memcpy(dest, src, strlen(src) + 1);
    printf("Copied string: %s\n", dest);
    return 0;
}
```

### `memset()`
Fills a block of memory with a specified value.

**Syntax:**
```c
void *memset(void *ptr, int value, size_t num);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[50] = "Hello, World!";
    memset(str, '*', 5);
    printf("After memset: %s\n", str); // Output: *****, World!
    return 0;
}
```

### `strncpy()`
Copies up to `n` characters from one string to another (safer than `strcpy`).

**Syntax:**
```c
char *strncpy(char *dest, const char *src, size_t n);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Copy safely!";
    char dest[10];
    strncpy(dest, src, sizeof(dest));
    dest[sizeof(dest) - 1] = '\0'; // Ensure null-termination
    printf("Destination: %s\n", dest); // Output: Copy safe
    return 0;
}
```

### `strncat()`
Concatenates up to `n` characters from one string to another.

**Syntax:**
```c
char *strncat(char *dest, const char *src, size_t n);
```

**Example:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char dest[20] = "Hello";
    char src[] = " World!";
    strncat(dest, src, 3); // Append only 3 characters
    printf("Result: %s\n", dest); // Output: Hello Wo
    return 0;
}
```

---

## Safety Considerations
- Always ensure the destination buffer is large enough to avoid buffer overflows.
- Prefer safer functions like `strncpy()`, `strncat()`, and `snprintf()` over `strcpy()` and `strcat()`.
- Null-terminate strings manually when using functions like `strncpy()`.
```