# Layout Systems: Flexbox (1D Layout)

Flexbox is a one-dimensional layout system in CSS that allows you to design flexible and efficient layouts with items that can grow, shrink, and align in predictable ways.

## Key Concepts of Flexbox

### 1. Main Axis and Cross Axis
- **Main Axis**: The primary axis along which flex items are laid out (default is horizontal/row direction)
- **Cross Axis**: The perpendicular axis to the main axis (default is vertical/column direction)

You can change the direction of these axes using `flex-direction`:
- `row` (default): left to right (main), top to bottom (cross)
- `row-reverse`: right to left (main), top to bottom (cross)
- `column`: top to bottom (main), left to right (cross)
- `column-reverse`: bottom to top (main), left to right (cross)

### 2. Alignment Properties

#### justify-content
Controls alignment along the **main axis**:
- `flex-start` (default): items packed at start
- `flex-end`: items packed at end
- `center`: items centered
- `space-between`: equal space between items
- `space-around`: equal space around items
- `space-evenly`: equal space around and between items

#### align-items
Controls alignment along the **cross axis**:
- `stretch` (default): items stretch to fill container
- `flex-start`: items aligned to start
- `flex-end`: items aligned to end
- `center`: items centered
- `baseline`: items aligned by their baselines

#### gap (or row-gap/column-gap)
Creates consistent spacing between flex items:
- `gap: 10px` - sets both row and column gaps
- `row-gap: 10px` - vertical space between rows
- `column-gap: 20px` - horizontal space between columns

### Example Usage:
```css
.container {
  display: flex;
  flex-direction: row; /* default */
  justify-content: center; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  gap: 20px; /* space between items */
}
```

Flexbox is particularly useful for:
- Navigation bars
- Centering elements both vertically and horizontally
- Creating equal-height columns
- Building responsive layouts that adapt to different screen sizes
