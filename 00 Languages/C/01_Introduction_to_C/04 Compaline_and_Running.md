
# Compiling and Running a C Program

This guide explains how to compile and run a C program step-by-step, with examples for beginners.

## Prerequisites
- A text editor (e.g., VS Code, Notepad++, Sublime Text)
- A C compiler (e.g., GCC for Linux/Mac, MinGW for Windows)

---

## Step 1: Write a C Program
Create a file with `.c` extension (e.g., `hello.c`) and write your code:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

---

## Step 2: Compile the Program
Open a terminal/command prompt and navigate to the file's directory.

### Using GCC (Linux/Mac/Windows with MinGW):
```bash
gcc hello.c -o hello
```
- `gcc`: The compiler command
- `hello.c`: Your source file
- `-o hello`: Outputs an executable named `hello` (Linux/Mac) or `hello.exe` (Windows)

### Common Flags:
- `-Wall`: Enables all warnings (recommended for beginners)
- `-std=c11`: Uses C11 standard

Example with flags:
```bash
gcc -Wall -std=c11 hello.c -o hello
```

---

## Step 3: Run the Program
### On Linux/Mac:
```bash
./hello
```

### On Windows:
```bash
hello.exe
```

**Expected Output:**
```
Hello, World!
```

---

## Troubleshooting
1. **Compiler Not Found**:  
   Install GCC/MinGW or add it to your system PATH.

2. **Syntax Errors**:  
   Fix errors shown in the terminal before recompiling.

3. **Permission Denied (Linux/Mac)**:  
   Run:  
   ```bash
   chmod +x hello
   ```

---

## Advanced: Compiling Multiple Files
For programs with multiple `.c` files (e.g., `main.c` and `utils.c`):

```bash
gcc main.c utils.c -o program
```

---

## IDE Alternative
IDEs like Code::Blocks or CLion automate compilation:
1. Create a project
2. Add your `.c` files
3. Click "Build" → "Run"

---

## Key Notes
- Always save changes before recompiling
- Filenames are case-sensitive on Linux/Mac
- Use `printf()` for debugging during development
```