# HTML Tables: Complete Guide to Syntax, Styling & Accessibility

## Table of Contents
1. [Basic Table Structure](#basic-table-structure)
2. [Semantic Table Elements](#semantic-table-elements)
3. [Advanced Table Features](#advanced-table-features)
4. [Responsive Table Techniques](#responsive-table-techniques)
5. [Table Styling Guide](#table-styling-guide)
6. [Accessibility Essentials](#accessibility-essentials)
7. [Practical Examples](#practical-examples)

## Basic Table Structure

### Minimal Valid Table
```html
<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
```

### Proper Semantic Table
```html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$5,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$15,000</td>
    </tr>
  </tfoot>
</table>
```

## Semantic Table Elements

| Element | Purpose | Required Attributes |
|---------|---------|---------------------|
| `<caption>` | Table description | Should be first child |
| `<thead>` | Header content |  |
| `<tbody>` | Main content | May have multiple |
| `<tfoot>` | Summary/footer |  |
| `<th>` | Header cell | `scope="col|row"` |
| `<td>` | Data cell | `headers` for complex tables |

## Advanced Table Features

### Column Groups
```html
<colgroup>
  <col span="2" class="product-info">
  <col class="price">
</colgroup>
```

### Row/Column Spanning
```html
<tr>
  <td rowspan="2">Combined</td>
  <td colspan="3">Wide cell</td>
</tr>
```

### Scoped Headers
```html
<th scope="col">Price</th>
<th scope="row">Product A</th>
```

## Responsive Table Techniques

### Horizontal Scrolling
```css
.table-container {
  overflow-x: auto;
  max-width: 100%;
}
```

### Stacked Cells (Mobile)
```css
@media (max-width: 600px) {
  tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  td::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
```

### Toggle Columns
```javascript
// JavaScript to hide/show columns
function toggleColumn(colIndex) {
  document.querySelectorAll(`td:nth-child(${colIndex})`).forEach(cell => {
    cell.classList.toggle('hidden');
  });
}
```

## Table Styling Guide

### Basic CSS
```css
table {
  border-collapse: collapse; /* or separate */
  width: 100%;
  margin: 1em 0;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  text-align: left;
}
```

### Zebra Striping
```css
tbody tr:nth-child(odd) {
  background-color: rgba(0,0,0,0.02);
}
```

### Hover Effects
```css
tr:hover td {
  background-color: rgba(58, 134, 255, 0.1);
}
```

## Accessibility Essentials

### Required ARIA
```html
<table role="table" aria-describedby="caption1">
  <caption id="caption1">Sales Data</caption>
  <!-- table content -->
</table>
```

### Screen Reader Optimization
1. Always use `<th>` for headers
2. Associate cells with headers:
   ```html
   <td headers="month-header">January</td>
   ```
3. Add descriptive captions

### Keyboard Navigation
```css
td:focus, th:focus {
  outline: 3px solid #3a86ff;
  position: relative;
}
```

## Practical Examples

### Product Comparison Table
```html
<table class="comparison">
  <caption>Smartphone Features Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Model X</th>
      <th scope="col">Model Y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Battery</th>
      <td>4000mAh</td>
      <td>4500mAh</td>
    </tr>
  </tbody>
</table>
```

### Calendar View
```html
<table class="calendar" role="grid">
  <caption>June 2023</caption>
  <thead>
    <tr role="row">
      <th scope="col" abbr="Sun">Sunday</th>
      <!-- More days -->
    </tr>
  </thead>
  <tbody>
    <tr role="row">
      <td role="gridcell">1</td>
      <!-- More cells -->
    </tr>
  </tbody>
</table>
```

### Data Table with Sorting
```html
<table class="sortable">
  <thead>
    <tr>
      <th aria-sort="none" data-sort="string">Name</th>
      <th aria-sort="ascending" data-sort="number">Price</th>
    </tr>
  </thead>
  <!-- JavaScript would handle sorting -->
</table>
```

## Table Anti-Patterns

1. **Layout Tables** - Use CSS Grid/Flexbox instead
2. **Nested Tables** - Almost never needed
3. **Empty Cells for Spacing** - Use CSS padding/margin
4. **Overly Complex Tables** - Consider breaking into multiple tables

```html
<!-- Bad -->
<table>
  <tr>
    <td colspan="3"></td>
    <td rowspan="2">...</td>
  </tr>
</table>

<!-- Good -->
<div class="grid-layout">
  <!-- Layout content -->
</div>
```

Remember: Use tables for tabular data only, not for page layout.
