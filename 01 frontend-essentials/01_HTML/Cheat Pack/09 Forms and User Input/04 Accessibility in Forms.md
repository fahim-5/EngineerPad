# Accessibility in Forms (ARIA & Labels)

Creating accessible forms ensures all users, including those with disabilities, can interact with your forms effectively. Here's a comprehensive guide:

## 1. Proper Labeling (Fundamental Accessibility)

### Explicit Labels
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```
- **Always** associate labels with inputs using `for` and `id`
- Screen readers announce the label when focus enters the field

### Implicit Labels
```html
<label>
  Password:
  <input type="password" name="password">
</label>
```
- Works without `for`/`id` pairing but explicit is generally preferred

### Visual vs. Accessible Labels
- Never rely solely on placeholder text as labels
- If hiding labels visually (for design reasons), use:
```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 2. ARIA in Forms

### aria-label (when visible label isn't present)
```html
<button aria-label="Close">X</button>
<input type="search" aria-label="Search website">
```
- Provides an accessible name when visual text isn't sufficient

### aria-labelledby (reference existing element)
```html
<h2 id="form-title">Contact Us</h2>
<form aria-labelledby="form-title">
  ...
</form>
```

### aria-describedby (additional instructions)
```html
<input type="password" aria-describedby="pwd-help">
<div id="pwd-help">Password must be 8+ characters</div>
```
- Screen readers will read this after the label

### aria-required (when not using HTML5 required)
```html
<input type="text" aria-required="true">
```
- Prefer HTML5 `required` attribute when possible

### aria-invalid (validation states)
```html
<input type="email" aria-invalid="true">
```
- Combine with JavaScript validation

## 3. Grouping Related Elements

### fieldset and legend
```html
<fieldset>
  <legend>Shipping Method</legend>
  <input type="radio" id="standard" name="shipping">
  <label for="standard">Standard</label>
  
  <input type="radio" id="express" name="shipping">
  <label for="express">Express</label>
</fieldset>
```
- Essential for radio button groups and complex sections

### aria-labelledby with groups
```html
<div role="group" aria-labelledby="size-title">
  <span id="size-title">T-Shirt Size</span>
  <!-- radio buttons here -->
</div>
```

## 4. Error Handling & Validation

### Accessible error messages
```html
<label for="email">Email:</label>
<input type="email" id="email" aria-describedby="email-error">
<span id="email-error" class="error" role="alert" aria-live="assertive">
  Please enter a valid email address
</span>
```
- `role="alert"` makes it an assertive live region
- Screen readers announce errors immediately

### Dynamic ARIA updates
```javascript
// When validation fails:
input.setAttribute('aria-invalid', 'true');
input.setAttribute('aria-describedby', 'error-message');
```

## 5. Focus Management

### Logical tab order
- Ensure natural DOM order matches visual order
- Use `tabindex="0"` for custom interactive elements
- Never use positive `tabindex` values

### Skip links
```html
<a href="#main-content" class="skip-link">Skip to form</a>
```

## 6. Additional Best Practices

1. **Contrast Ratios**: Ensure 4.5:1 minimum for text
2. **Focus Styles**: Never remove outline without providing alternative
   ```css
   :focus-visible { outline: 2px solid blue; }
   ```
3. **Instructions**: Provide clear, concise instructions
4. **Timeouts**: Allow users to complete forms without time pressure
5. **Multiple Ways**: Provide alternatives to complex forms

## Complete Accessible Form Example

```html
<form aria-labelledby="contact-heading">
  <h2 id="contact-heading">Contact Information</h2>
  
  <div class="form-group">
    <label for="fullname">Full Name</label>
    <input type="text" id="fullname" name="fullname" required
           aria-describedby="name-help">
    <p id="name-help" class="help-text">First and last name</p>
  </div>
  
  <fieldset>
    <legend>Preferred Contact Method</legend>
    
    <input type="radio" id="contact-email" name="contact-method" 
           value="email" checked>
    <label for="contact-email">Email</label>
    
    <input type="radio" id="contact-phone" name="contact-method" 
           value="phone">
    <label for="contact-phone">Phone</label>
  </fieldset>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" required
              aria-describedby="message-help"></textarea>
    <p id="message-help" class="help-text">Maximum 500 characters</p>
  </div>
  
  <button type="submit">Send Message</button>
</form>
```

Remember: Always test your forms with screen readers (NVDA, VoiceOver, JAWS) and keyboard-only navigation to ensure true accessibility.