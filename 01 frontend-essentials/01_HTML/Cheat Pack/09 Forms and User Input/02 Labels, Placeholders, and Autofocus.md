# Labels, Placeholders, and Autofocus in HTML Forms

These three elements work together to improve form usability and accessibility:

## 1. Labels (`<label>`)

**Purpose:** 
- Explicitly associates text with a form control
- Improves accessibility (screen readers)
- Increases clickable area (clicking label focuses the input)

**Syntax:**
```html
<!-- Method 1: Wrapping -->
<label>
  Username:
  <input type="text" name="username">
</label>

<!-- Method 2: Using "for" attribute -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

**Best Practices:**
- Always use labels for accessibility
- Match the `for` attribute with the input's `id`
- Keep labels concise but descriptive
- Position labels consistently (above or beside inputs)

## 2. Placeholders (`placeholder` attribute)

**Purpose:**
- Provides hint text inside the input field
- Disappears when user starts typing
- Should NOT replace labels

**Syntax:**
```html
<input type="text" name="search" placeholder="Enter keywords...">
```

**Best Practices:**
- Use for short examples or formatting hints (e.g., "MM/DD/YYYY")
- Don't use for critical instructions (disappears when typing)
- Ensure sufficient color contrast
- Avoid putting required information only in placeholder

## 3. Autofocus (`autofocus` attribute)

**Purpose:**
- Automatically focuses a form element when page loads
- Places cursor in the field immediately

**Syntax:**
```html
<input type="text" name="username" autofocus>
```

**Best Practices:**
- Use sparingly (only one element per page)
- Best for primary action fields (like search boxes)
- Avoid on pages where keyboard users expect to scroll first
- Don't use on fields requiring careful consideration (like password fields)

## Combined Example

```html
<form>
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" 
         placeholder="John Smith" 
         autofocus
         required>
         
  <label for="comments">Feedback:</label>
  <textarea id="comments" name="comments"
            placeholder="Tell us what you think..."></textarea>
</form>
```

## Key Differences

| Feature      | Purpose | Accessibility Impact | Persistence |
|-------------|---------|----------------------|-------------|
| **Label**   | Identifies purpose of field | Critical (screen readers read these) | Always visible |
| **Placeholder** | Example format/hint | Supplemental (not read by all screen readers) | Disappears on input |
| **Autofocus** | Immediate focus | Can be disruptive if misused | Only affects initial load |

Remember: Labels are essential, placeholders are optional hints, and autofocus should be used judiciously.