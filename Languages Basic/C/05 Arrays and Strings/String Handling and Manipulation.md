# String Handling and Manipulation in C

## Introduction to Strings in C

In C programming, a string is a sequence of characters terminated with a null character `'\0'`. Strings are stored as arrays of characters.

### Declaration and Initialization

```c
char str1[20];                  // Declaration
char str2[] = "Hello World";    // Initialization
char str3[20] = {'H', 'e', 'l', 'l', 'o', '\0'};  // Character array initialization
```

## Basic String Operations

### String Input/Output

```c
#include <stdio.h>

int main() {
    char name[50];
    
    printf("Enter your name: ");
    scanf("%s", name);          // Reads until whitespace
    printf("Hello, %s!\n", name);
    
    printf("Enter full name: ");
    fgets(name, 50, stdin);     // Reads entire line including spaces
    printf("Your full name is: %s", name);
    
    return 0;
}
```

### String Length

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Programming";
    int length = strlen(str);
    printf("Length: %d\n", length);  // Output: 11
    return 0;
}
```

## String Manipulation Functions

C provides several built-in functions in the `string.h` library:

### 1. strcpy() - String Copy

```c
char source[] = "Hello";
char destination[10];

strcpy(destination, source);  // Copies source to destination
printf("%s\n", destination);  // Output: Hello
```

### 2. strcat() - String Concatenation

```c
char str1[20] = "Hello";
char str2[] = " World";

strcat(str1, str2);  // Concatenates str2 to str1
printf("%s\n", str1);  // Output: Hello World
```

### 3. strcmp() - String Comparison

```c
char str1[] = "apple";
char str2[] = "banana";

int result = strcmp(str1, str2);
if (result < 0) {
    printf("%s comes before %s\n", str1, str2);
} else if (result > 0) {
    printf("%s comes after %s\n", str1, str2);
} else {
    printf("Strings are equal\n");
}
```

### 4. strchr() - Find Character in String

```c
char str[] = "Hello World";
char *ptr = strchr(str, 'W');

if (ptr != NULL) {
    printf("Found at position: %ld\n", ptr - str);  // Output: 6
}
```

### 5. strstr() - Find Substring

```c
char text[] = "C programming is fun";
char *sub = strstr(text, "program");

if (sub != NULL) {
    printf("Substring found at position: %ld\n", sub - text);
}
```

## Advanced String Operations

### Converting Between Cases

```c
#include <ctype.h>

char str[] = "Hello World";

// Convert to lowercase
for (int i = 0; str[i]; i++) {
    str[i] = tolower(str[i]);
}
printf("%s\n", str);  // hello world

// Convert to uppercase
for (int i = 0; str[i]; i++) {
    str[i] = toupper(str[i]);
}
printf("%s\n", str);  // HELLO WORLD
```

### Tokenizing Strings (strtok())

```c
#include <string.h>

char str[] = "C,Python,Java,C++";
char *token = strtok(str, ",");

while (token != NULL) {
    printf("%s\n", token);
    token = strtok(NULL, ",");
}
/* Output:
C
Python
Java
C++
*/
```

### Custom String Functions

#### String Reverse

```c
void reverseString(char *str) {
    int length = strlen(str);
    for (int i = 0; i < length/2; i++) {
        char temp = str[i];
        str[i] = str[length - i - 1];
        str[length - i - 1] = temp;
    }
}

int main() {
    char str[] = "Hello";
    reverseString(str);
    printf("%s\n", str);  // olleH
    return 0;
}
```

#### String Palindrome Check

```c
int isPalindrome(char *str) {
    int left = 0;
    int right = strlen(str) - 1;
    
    while (left < right) {
        if (str[left] != str[right]) {
            return 0;  // Not palindrome
        }
        left++;
        right--;
    }
    return 1;  // Palindrome
}

int main() {
    char str[] = "madam";
    if (isPalindrome(str)) {
        printf("%s is a palindrome\n", str);
    }
    return 0;
}
```

## Common Pitfalls and Best Practices

1. **Buffer Overflow**: Always ensure the destination string has enough space
   ```c
   char dest[5];
   strcpy(dest, "Hello World");  // Dangerous - buffer overflow
   ```

2. **Null Termination**: Always ensure strings are null-terminated
   ```c
   char str[5] = {'H', 'e', 'l', 'l', 'o'};  // Not a valid string
   ```

3. **String Length**: Remember `strlen()` doesn't count the null terminator
   ```c
   char str[10] = "Hello";  // strlen(str) = 5, but needs 6 bytes (including '\0')
   ```

4. **Safe Alternatives**: Use `strncpy()`, `strncat()`, etc. for safer operations
   ```c
   char dest[10];
   strncpy(dest, source, sizeof(dest) - 1);
   dest[sizeof(dest) - 1] = '\0';  // Ensure null termination
   ```

## Exercises for Practice

1. Write a program to count vowels and consonants in a string
2. Implement your own version of `strlen()`, `strcpy()`, `strcmp()`
3. Write a program to remove all whitespace from a string
4. Create a function to find the most frequent character in a string
5. Write a program to check if two strings are anagrams

## Conclusion

String handling is fundamental in C programming. While C provides basic string functions in the standard library, understanding how these work internally and being able to implement custom string operations is crucial for effective programming. Always practice safe string manipulation to avoid common pitfalls like buffer overflows.