
# Mini Projects: Text Editor in C

A text editor is a fundamental tool for programmers. Building one in C helps understand file operations, memory management, and user input handling.

## Table of Contents
1. [Basic Requirements](#basic-requirements)
2. [Simple Text Editor](#simple-text-editor)
3. [Advanced Features](#advanced-features)
4. [Complete Example](#complete-example)
5. [Extensions](#extensions)

---

## Basic Requirements
To build a text editor in C, you need:
- File I/O operations (`fopen`, `fclose`, `fread`, `fwrite`)
- Dynamic memory allocation (`malloc`, `realloc`, `free`)
- User input handling (`getchar`, `fgets`)
- Basic terminal manipulation (like `system("cls")` on Windows)

---

## Simple Text Editor
Here's a minimal text editor that allows typing and saving:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char *buffer = malloc(1024);
    char filename[50];
    FILE *file;
    
    printf("Enter filename: ");
    scanf("%49s", filename);
    
    file = fopen(filename, "w");
    if (!file) {
        perror("Error opening file");
        return 1;
    }
    
    printf("Type your text (Press Ctrl+D/Ctrl+Z to save):\n");
    while (fgets(buffer, 1024, stdin)) {
        fputs(buffer, file);
    }
    
    fclose(file);
    free(buffer);
    printf("File saved successfully!\n");
    return 0;
}
```

---

## Advanced Features
### 1. Line Numbers
```c
void display_with_lines(FILE *file) {
    char line[256];
    int count = 1;
    rewind(file);
    while (fgets(line, sizeof(line), file)) {
        printf("%4d: %s", count++, line);
    }
}
```

### 2. Search Functionality
```c
void search_in_file(FILE *file, const char *term) {
    char line[256];
    rewind(file);
    while (fgets(line, sizeof(line), file)) {
        if (strstr(line, term)) {
            printf("%s", line);
        }
    }
}
```

### 3. Syntax Highlighting (Basic)
```c
void color_print(const char *text) {
    // ANSI color codes
    const char *keywords[] = {"int", "return", "if", "else", NULL};
    
    for (int i = 0; keywords[i]; i++) {
        if (strstr(text, keywords[i])) {
            printf("\033[1;31m%s\033[0m", keywords[i]); // Red
            return;
        }
    }
    printf("%s", text);
}
```

---

## Complete Example
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE 256

typedef struct {
    char **lines;
    int count;
} Document;

void init_doc(Document *doc) {
    doc->lines = malloc(MAX_LINE * sizeof(char *));
    doc->count = 0;
}

void free_doc(Document *doc) {
    for (int i = 0; i < doc->count; i++) {
        free(doc->lines[i]);
    }
    free(doc->lines);
}

int main() {
    Document doc;
    init_doc(&doc);
    char input[MAX_LINE];
    
    printf("Simple Text Editor (Type 'SAVE' to save and exit)\n");
    while (1) {
        fgets(input, MAX_LINE, stdin);
        if (strcmp(input, "SAVE\n") == 0) break;
        
        doc.lines[doc.count] = strdup(input);
        doc.count++;
    }
    
    FILE *file = fopen("output.txt", "w");
    for (int i = 0; i < doc.count; i++) {
        fputs(doc.lines[i], file);
    }
    fclose(file);
    free_doc(&doc);
    return 0;
}
```

---

## Extensions
1. **Undo/Redo**: Implement a stack to track changes
2. **Multiple Files**: Use linked list to manage buffers
3. **Configurable Settings**: Read editor preferences from a file
4. **Plugins**: Support for external modules via function pointers
5. **GUI Version**: Integrate with GTK or ncurses

```c
// Example undo structure
typedef struct {
    char **states;
    int top;
    int capacity;
} UndoStack;

void push_undo(UndoStack *stack, char *state) {
    if (stack->top == stack->capacity) {
        stack->capacity *= 2;
        stack->states = realloc(stack->states, stack->capacity * sizeof(char *));
    }
    stack->states[stack->top++] = strdup(state);
}
```

---

## Learning Path
1. Start with basic file I/O
2. Add line editing capabilities
3. Implement search/replace
4. Add syntax highlighting
5. Build a plugin system
6. Create a GUI interface

> **Note**: Always validate user input and handle memory carefully in C programs.
```