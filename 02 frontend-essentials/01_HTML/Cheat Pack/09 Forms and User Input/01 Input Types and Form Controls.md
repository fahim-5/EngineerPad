# HTML Input Types and Form Controls

HTML provides various input types and form controls that allow users to interact with web pages by entering data, making selections, and submitting information.

## Basic Form Structure

```html
<form action="/submit" method="post">
  <!-- Form controls go here -->
  <input type="submit" value="Submit">
</form>
```

## Common Input Types

### 1. Text Inputs
- **Text**: Single-line text field
  ```html
  <input type="text" name="username" placeholder="Enter username">
  ```
- **Password**: Masks input characters
  ```html
  <input type="password" name="pwd">
  ```
- **Email**: Validates email format
  ```html
  <input type="email" name="user_email">
  ```
- **Search**: Search field (may have clear button)
  ```html
  <input type="search" name="query">
  ```

### 2. Numeric Inputs
- **Number**: Only accepts numbers
  ```html
  <input type="number" name="age" min="18" max="99">
  ```
- **Range**: Slider control
  ```html
  <input type="range" name="volume" min="0" max="100">
  ```

### 3. Date/Time Inputs
- **Date**: Date picker
  ```html
  <input type="date" name="birthday">
  ```
- **Time**: Time picker
  ```html
  <input type="time" name="meeting_time">
  ```
- **Datetime-local**: Date and time without timezone
  ```html
  <input type="datetime-local" name="event">
  ```

### 4. Selection Controls
- **Radio buttons**: Single selection from options
  ```html
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
  ```
- **Checkboxes**: Multiple selections
  ```html
  <input type="checkbox" id="subscribe" name="subscribe" value="yes">
  <label for="subscribe">Subscribe to newsletter</label>
  ```
- **Select dropdown**: Single/multiple selection menu
  ```html
  <select name="country">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
  ```

### 5. File Upload
- **File**: File selection
  ```html
  <input type="file" name="document" accept=".pdf,.doc">
  ```

### 6. Special Inputs
- **Color**: Color picker
  ```html
  <input type="color" name="fav_color">
  ```
- **Hidden**: Invisible data sent with form
  ```html
  <input type="hidden" name="user_id" value="123">
  ```

## Other Form Controls

### Textarea
Multi-line text input:
```html
<textarea name="comments" rows="4" cols="50"></textarea>
```

### Buttons
- Submit button (default in forms)
  ```html
  <button type="submit">Submit</button>
  ```
- Reset button
  ```html
  <button type="reset">Clear Form</button>
  ```
- Generic button
  ```html
  <button type="button">Click Me</button>
  ```

## Form Attributes
- `required`: Makes field mandatory
- `placeholder`: Hint text
- `pattern`: Regex validation
- `min/max`: For numeric/date inputs
- `autocomplete`: On/off browser autofill
- `disabled`: Disables the input
- `readonly`: Makes input uneditable

## Example Complete Form
```html
<form action="/register" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="pw">Password:</label>
  <input type="password" id="pw" name="password" minlength="8" required>
  
  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
  
  <label for="bio">Bio:</label>
  <textarea id="bio" name="bio"></textarea>
  
  <button type="submit">Register</button>
</form>
```