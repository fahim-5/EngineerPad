
# Mini Projects: Calculator in C

A calculator is an excellent beginner project to practice basic programming concepts in C. This guide will take you from a simple calculator to an advanced one with multiple operations.

## Table of Contents
1. [Basic Calculator](#basic-calculator)
2. [Enhanced Calculator with Switch Case](#enhanced-calculator-with-switch-case)
3. [Scientific Calculator (Advanced)](#scientific-calculator-advanced)
4. [GUI Calculator (Extra)](#gui-calculator-extra)

---

## Basic Calculator

The simplest form of calculator that performs addition, subtraction, multiplication, and division.

```c
#include <stdio.h>

int main() {
    float num1, num2;
    char op;
    
    printf("Enter first number: ");
    scanf("%f", &num1);
    
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &op);
    
    printf("Enter second number: ");
    scanf("%f", &num2);
    
    switch(op) {
        case '+':
            printf("Result: %.2f", num1 + num2);
            break;
        case '-':
            printf("Result: %.2f", num1 - num2);
            break;
        case '*':
            printf("Result: %.2f", num1 * num2);
            break;
        case '/':
            if(num2 != 0)
                printf("Result: %.2f", num1 / num2);
            else
                printf("Error! Division by zero.");
            break;
        default:
            printf("Invalid operator!");
    }
    
    return 0;
}
```

### Explanation:
- Takes two numbers and an operator as input
- Uses `switch-case` to perform the operation
- Includes error handling for division by zero

---

## Enhanced Calculator with Switch Case

This version adds more operations and improves user experience.

```c
#include <stdio.h>
#include <math.h>

int main() {
    int choice;
    float num1, num2;
    
    printf("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\n6. Power\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    
    printf("Enter two numbers: ");
    scanf("%f %f", &num1, &num2);
    
    switch(choice) {
        case 1: printf("Result: %.2f", num1 + num2); break;
        case 2: printf("Result: %.2f", num1 - num2); break;
        case 3: printf("Result: %.2f", num1 * num2); break;
        case 4: 
            if(num2 != 0) printf("Result: %.2f", num1 / num2);
            else printf("Error! Division by zero.");
            break;
        case 5: printf("Result: %d", (int)num1 % (int)num2); break;
        case 6: printf("Result: %.2f", pow(num1, num2)); break;
        default: printf("Invalid choice!");
    }
    
    return 0;
}
```

### New Features:
- Menu-driven interface
- Additional operations (modulus and power)
- Cleaner code organization

---

## Scientific Calculator (Advanced)

Adds scientific functions like trigonometry, logarithms, etc.

```c
#include <stdio.h>
#include <math.h>

int main() {
    int choice;
    float num, result;
    
    printf("Scientific Calculator\n");
    printf("1. Square Root\n2. Logarithm\n3. Natural Log\n4. Sine\n5. Cosine\n6. Tangent\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    
    printf("Enter number: ");
    scanf("%f", &num);
    
    switch(choice) {
        case 1: result = sqrt(num); break;
        case 2: result = log10(num); break;
        case 3: result = log(num); break;
        case 4: result = sin(num); break;
        case 5: result = cos(num); break;
        case 6: result = tan(num); break;
        default: printf("Invalid choice!"); return 1;
    }
    
    printf("Result: %.4f", result);
    return 0;
}
```

### Advanced Features:
- Mathematical functions from `math.h`
- More precise results (4 decimal places)
- Error handling for invalid inputs

---

## GUI Calculator (Extra)

For those wanting to go further, you can create a graphical calculator using:

1. **GTK+** for Linux
2. **WinAPI** for Windows
3. **SDL** for cross-platform

```c
// Example using GTK+ (Linux)
#include <gtk/gtk.h>

// Callback function for button click
static void button_clicked(GtkWidget *widget, gpointer data) {
    // Calculator logic here
}

int main(int argc, char *argv[]) {
    GtkWidget *window, *grid, *button;
    
    gtk_init(&argc, &argv);
    
    window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);
    
    grid = gtk_grid_new();
    gtk_container_add(GTK_CONTAINER(window), grid);
    
    // Add buttons and display here
    
    gtk_widget_show_all(window);
    gtk_main();
    
    return 0;
}
```

### GUI Features:
- Visual interface with buttons
- Event-driven programming
- More complex but rewarding project

---

## Further Improvements
1. Add memory functions (M+, M-, MR)
2. Implement history of calculations
3. Add unit conversion
4. Create a mobile version using frameworks like Flutter
5. Add voice recognition for hands-free operation

This progression from basic to advanced calculator projects helps build strong programming fundamentals while creating practical applications.
```