# HTML5 Native Form Validation

HTML5 introduced built-in client-side validation that works without JavaScript. Here's a comprehensive look at how it works:

## Basic Validation Attributes

### 1. Required Fields (`required`)
```html
<input type="text" name="username" required>
```
- Prevents form submission if empty
- Shows browser-specific error message

### 2. Pattern Matching (`pattern`)
```html
<input type="text" name="zipcode" pattern="\d{5}" title="5-digit zip code">
```
- Uses regular expressions
- `title` attribute provides error message hint

### 3. Length Constraints
```html
<input type="text" name="pin" minlength="4" maxlength="4">
<textarea name="bio" maxlength="200"></textarea>
```

### 4. Value Range (for numbers/dates)
```html
<input type="number" min="18" max="120">
<input type="date" min="2020-01-01">
```

### 5. Email/URL Validation
```html
<input type="email" name="user_email">
<input type="url" name="website">
```
- Built-in format validation
- Most browsers check for `@` in emails and protocol in URLs

## Validation Feedback

Browsers provide:
1. Visual indication (red outline, icon)
2. Error message bubbles
3. CSS pseudo-classes for styling:
   - `:valid` - when field passes validation
   - `:invalid` - when field fails validation
   - `:required` - for required fields
   - `:optional` - for non-required fields
   - `:in-range`/`:out-of-range` - for number/date ranges

## Customizing Validation

### 1. Styling Valid/Invalid States
```css
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:focus:invalid { box-shadow: 0 0 5px red; }
```

### 2. Custom Error Messages
Using JavaScript:
```javascript
const email = document.getElementById('email');
email.addEventListener('invalid', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email address');
  } else {
    email.setCustomValidity('');
  }
});
```

### 3. Disabling Browser Validation
```html
<form novalidate>
  <!-- Form will submit without HTML5 validation -->
</form>
```

## Validation API

JavaScript provides validation properties/methods:
```javascript
const input = document.querySelector('input');

// Check validity
input.checkValidity();  // returns boolean
input.reportValidity(); // shows validation message

// Validity state object
input.validity; // returns ValidityState object with properties:
/*
  valid: overall validity
  valueMissing: required but empty
  typeMismatch: wrong type (email/url)
  patternMismatch: fails pattern test
  tooLong/tooShort: length issues
  rangeUnderflow/rangeOverflow: number/date range
  stepMismatch: doesn't match step increment
  customError: setCustomValidity() was used
*/
```

## Practical Example

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required
         placeholder="your@email.com">
  
  <label for="pwd">Password (8-20 chars):</label>
  <input type="password" id="pwd" required
         minlength="8" maxlength="20"
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
         title="Must contain uppercase, lowercase, and number">
  
  <label for="age">Age (18+):</label>
  <input type="number" id="age" min="18" required>
  
  <button type="submit">Register</button>
</form>
```

## Best Practices

1. Use HTML5 validation as first line of defense
2. Always implement server-side validation too
3. Provide clear error messages
4. Validate on blur (field exit) not just submit
5. For complex validation, supplement with JavaScript
6. Consider accessibility in error message presentation

HTML5 validation provides a good baseline, but complex forms will still need JavaScript validation for more sophisticated rules.