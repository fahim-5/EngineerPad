# Forms and User Input in HTML

Forms are essential components of web development that allow users to interact with websites by submitting data. Let's explore the key concepts around forms in HTML.

## Input Types and Form Controls

HTML provides various input types to collect different kinds of data from users.

### Common Input Types:

```html
<!-- Text input -->
<input type="text" name="username">

<!-- Password field (hidden characters) -->
<input type="password" name="password">

<!-- Email with built-in validation -->
<input type="email" name="user_email">

<!-- Number input with min/max values -->
<input type="number" name="age" min="1" max="120">

<!-- Date picker -->
<input type="date" name="birthday">

<!-- Checkbox -->
<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>

<!-- Radio buttons -->
<input type="radio" name="gender" id="male" value="male">
<label for="male">Male</label>
<input type="radio" name="gender" id="female" value="female">
<label for="female">Female</label>

<!-- Dropdown select -->
<select name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>

<!-- Textarea for multiline text -->
<textarea name="comments" rows="4" cols="50"></textarea>

<!-- Submit button -->
<input type="submit" value="Send Data">
```

### New HTML5 Input Types:
```html
<!-- Color picker -->
<input type="color" name="favcolor">

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100">

<!-- Search field -->
<input type="search" name="q">

<!-- Telephone number -->
<input type="tel" name="phone">

<!-- URL field -->
<input type="url" name="website">
```

## Labels, Placeholders, and Autofocus

### Labels
Labels improve accessibility and usability by clearly associating text with form controls.

```html
<!-- Explicit association using for/id -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Implicit association by wrapping -->
<label>
  Email:
  <input type="email" name="email">
</label>
```

### Placeholders
Placeholders provide hint text that disappears when the user starts typing.

```html
<input type="text" name="search" placeholder="Search products...">
```

Note: Placeholders should not replace labels - they're only for additional hints.

### Autofocus
Autofocus automatically focuses a form element when the page loads.

```html
<input type="text" name="firstname" autofocus>
```

Use sparingly - only one element per page should have autofocus.

## Validation (HTML5 Native Validation)

HTML5 introduced built-in form validation without JavaScript.

### Common Validation Attributes:

```html
<!-- Required field -->
<input type="text" name="username" required>

<!-- Minimum length -->
<input type="text" name="pin" minlength="4">

<!-- Maximum length -->
<input type="text" name="title" maxlength="50">

<!-- Pattern matching (regex) -->
<input type="text" name="zipcode" pattern="[0-9]{5}">

<!-- Custom validation message -->
<input type="email" name="email" oninvalid="this.setCustomValidity('Please enter a valid email address')">
```

### Styling Valid/Invalid Fields with CSS:
```css
input:valid {
  border: 2px solid green;
}

input:invalid {
  border: 2px solid red;
}
```

## Accessibility in Forms (ARIA, Labels)

### Accessibility Best Practices:

1. **Always use labels** - Never rely solely on placeholders
2. **Logical tab order** - Ensure proper keyboard navigation
3. **ARIA attributes** - Enhance accessibility when needed

### ARIA for Forms:

```html
<!-- Indicating required fields -->
<label for="email">Email <span aria-hidden="true">*</span></label>
<input type="email" id="email" aria-required="true">

<!-- Error messages with ARIA -->
<label for="age">Age</label>
<input type="number" id="age" aria-invalid="true" aria-describedby="age-error">
<span id="age-error" class="error">Please enter a valid age (1-120)</span>

<!-- Disabled button with explanation -->
<button type="submit" disabled aria-disabled="true" title="Please fill all required fields">Submit</button>
```

### Complete Accessible Form Example:

```html
<form aria-labelledby="form-title">
  <h2 id="form-title">Contact Us</h2>
  
  <div class="form-group">
    <label for="fullname">Full Name <span class="required" aria-hidden="true">*</span></label>
    <input type="text" id="fullname" name="fullname" required aria-required="true">
  </div>
  
  <div class="form-group">
    <label for="email">Email Address <span class="required" aria-hidden="true">*</span></label>
    <input type="email" id="email" name="email" required aria-required="true">
  </div>
  
  <div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
           aria-describedby="phone-format">
    <span id="phone-format" class="hint">Format: 123-456-7890</span>
  </div>
  
  <div class="form-group">
    <fieldset>
      <legend>Preferred Contact Method</legend>
      
      <input type="radio" id="contact-email" name="contact-method" value="email" checked>
      <label for="contact-email">Email</label>
      
      <input type="radio" id="contact-phone" name="contact-method" value="phone">
      <label for="contact-phone">Phone</label>
    </fieldset>
  </div>
  
  <div class="form-group">
    <label for="message">Your Message</label>
    <textarea id="message" name="message" rows="5"></textarea>
  </div>
  
  <button type="submit">Send Message</button>
</form>
```

## Additional Tips

1. **Group related fields** with `<fieldset>` and `<legend>`
2. **Logical structure** - Put labels before inputs for better screen reader flow
3. **Error handling** - Provide clear, specific error messages
4. **Mobile considerations** - Use appropriate input types for mobile keyboards
5. **Testing** - Always test forms with keyboard navigation and screen readers

Remember that while HTML5 validation is convenient, you should still implement server-side validation for security.