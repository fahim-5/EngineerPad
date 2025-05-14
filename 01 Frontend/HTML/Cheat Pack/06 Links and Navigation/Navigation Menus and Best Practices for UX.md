# Navigation Menus - UX Best Practices & Implementation Guide

Effective navigation is critical for usability and accessibility. This guide covers semantic HTML structures, UX principles, and modern implementation techniques.

## Table of Contents
1. [Semantic HTML Structure](#semantic-html-structure)
2. [Menu Types & Use Cases](#menu-types--use-cases)
3. [UX Best Practices](#ux-best-practices)
4. [Accessibility Requirements](#accessibility-requirements)
5. [Mobile Navigation Patterns](#mobile-navigation-patterns)
6. [Performance Considerations](#performance-considerations)
7. [Implementation Examples](#implementation-examples)

## Semantic HTML Structure

### Basic Semantic Nav
```html
<nav aria-label="Primary navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
  </ul>
</nav>
```

### Key Elements:
- `<nav>`: Wrapper indicating navigation section
- `aria-label`: Identifies purpose for screen readers
- `<ul>`/`<li>`: Proper list structure for menu items
- Keyboard-operable links

## Menu Types & Use Cases

| Type | Best For | HTML Pattern |
|------|----------|--------------|
| Horizontal Bar | Desktop main menus | `<ul>` with `display: flex` |
| Vertical Stack | Mobile/sidebars | `<ul>` with block items |
| Mega Menu | Complex sites | Nested `<div>` with categories |
| Hamburger | Mobile-first | Hidden until toggle |
| Breadcrumbs | Deep hierarchies | `<nav>` with `aria-label="Breadcrumb"` |
| Footer Links | Secondary navigation | `<nav>` with columns |

## UX Best Practices

### 1. Information Architecture
- **7±2 Rule**: Limit top-level items to 5-7
- **Progressive Disclosure**: Hide complex options until needed
- **Consistency**: Maintain same navigation across pages

### 2. Visual Design
- **Clear Affordances**: Underline or highlight current page
- **Whitespace**: Minimum 12px padding around clickable areas
- **Visual Hierarchy**: Bold primary items, lighter secondary

### 3. Interaction Design
```css
/* Hover/Focus States */
nav a:hover, 
nav a:focus {
  outline: 2px solid #3a86ff;
  background-color: #f8f9fa;
}

/* Current Page Indicator */
[aria-current="page"] {
  border-bottom: 3px solid #3a86ff;
  font-weight: 600;
}
```

## Accessibility Requirements

### WCAG Compliance
1. **Keyboard Navigation**:
   - Tab order should follow visual flow
   - `:focus-visible` styles mandatory

2. **ARIA Attributes**:
   ```html
   <nav aria-label="Main menu">
     <button aria-expanded="false" aria-controls="mobile-menu">Menu</button>
     <ul id="mobile-menu" hidden>
       <!-- Items -->
     </ul>
   </nav>
   ```

3. **Screen Reader Considerations**:
   - `aria-current="page"` for active item
   - `role="navigation"` on `<nav>` (redundant in HTML5)
   - Skip links for bypassing navigation

## Mobile Navigation Patterns

### 1. Hamburger Implementation
```html
<header>
  <button class="menu-toggle" aria-label="Menu" aria-expanded="false">
    <span class="hamburger"></span>
  </button>
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <ul>
      <!-- Items -->
    </ul>
  </nav>
</header>
```

### 2. Off-Canvas Menu CSS
```css
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  height: 100vh;
  transition: right 0.3s ease;
}

[aria-expanded="true"] + .mobile-nav {
  right: 0;
}
```

## Performance Considerations

1. **Avoid Deep Nesting**: More than 3 levels hurt performance
2. **Lazy Load Mega Menus**: Load submenus on interaction
3. **Prefetch Key Links**: For likely next-page visits
```html
<link rel="prefetch" href="/about" as="document">
```

## Implementation Examples

### 1. Desktop Mega Menu
```html
<nav aria-label="Main menu">
  <ul class="mega-menu">
    <li>
      <button aria-expanded="false">Products</button>
      <div class="mega-content">
        <div class="mega-column">
          <h3>Category 1</h3>
          <ul>
            <li><a href="/product/a">Product A</a></li>
            <!-- More items -->
          </ul>
        </div>
        <!-- More columns -->
      </div>
    </li>
    <!-- More top items -->
  </ul>
</nav>
```

### 2. Accessible Breadcrumbs
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/category">Category</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

### 3. Footer Navigation
```html
<footer>
  <nav aria-label="Secondary navigation">
    <div class="footer-column">
      <h3>Company</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <!-- More links -->
      </ul>
    </div>
    <!-- More columns -->
  </nav>
</footer>
```

## Checklist for Quality Navigation
- [ ] Works without JavaScript
- [ ] Passes WCAG 2.1 AA
- [ ] Touch targets ≥ 48×48px
- [ ] Clear visual hierarchy
- [ ] Consistent across breakpoints
- [ ] Current page indicator
- [ ] Optimized for fastest interactive time

Remember: Test with real users across devices for optimal results.
```

This guide combines technical implementation details with UX research-backed practices, following the same comprehensive format as your previous tutorials. It includes ready-to-use code snippets and modern accessibility standards.
