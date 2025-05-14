Here's a comprehensive `markdown` tutorial file on **Absolute vs. Relative URLs** for your Frontend/HTML Cheat Pack:

```markdown
# Absolute vs. Relative URLs - Complete Guide

Understanding the difference between absolute and relative URLs is crucial for building maintainable and well-structured websites. This guide covers their definitions, use cases, advantages, and best practices.

## Table of Contents
1. [What is a URL?](#what-is-a-url)
2. [Absolute URLs](#absolute-urls)
   - [Structure](#absolute-url-structure)
   - [When to Use](#when-to-use-absolute-urls)
   - [Pros & Cons](#absolute-url-pros--cons)
3. [Relative URLs](#relative-urls)
   - [Types](#types-of-relative-urls)
   - [When to Use](#when-to-use-relative-urls)
   - [Pros & Cons](#relative-url-pros--cons)
4. [Comparison Table](#comparison-table)
5. [Best Practices](#best-practices)
6. [Examples](#examples)

## What is a URL?
A URL (Uniform Resource Locator) is the address used to access resources on the web. It tells browsers where to find and how to retrieve a specific resource.

## Absolute URLs
An absolute URL contains the complete address of a resource, including:
- Protocol (https://)
- Domain (example.com)
- Path (/folder/page.html)

### Absolute URL Structure
```
protocol://domain/path/to/resource?query=string#fragment
```
Example:
```html
<a href="https://www.example.com/blog/post.html">Read Post</a>
```

### When to Use Absolute URLs
1. Linking to external websites
2. When sharing URLs in emails/marketing
3. Canonical URLs in SEO
4. When the exact location is critical (CDNs, APIs)

### Absolute URLs Pros & Cons
| Pros | Cons |
|------|------|
| Always points to correct location | Longer and harder to read |
| Works from any location | Breaks if domain changes |
| Clear about resource origin | Requires more typing |

## Relative URLs
A relative URL specifies the path relative to the current location.

### Types of Relative URLs
1. **Same Directory**: `file.html`
2. **Child Directory**: `folder/file.html`
3. **Parent Directory**: `../file.html`
4. **Root-Relative**: `/images/photo.jpg` (starts with `/`)

Example:
```html
<!-- From https://example.com/blog/ -->
<a href="post.html">Current Dir</a>
<a href="../contact.html">Parent Dir</a>
<a href="/assets/logo.png">Root-Relative</a>
```

### When to Use Relative URLs
1. Internal site navigation
2. Linking between pages in same site
3. Development environments (localhost)
4. When moving between dev/staging/prod

### Relative URLs Pros & Cons
| Pros | Cons |
|------|------|
| Shorter and cleaner | Can break if file structure changes |
| Easier to maintain | Doesn't work when page is shared |
| Portable across environments | Ambiguous in some contexts |

## Comparison Table
| Feature | Absolute URL | Relative URL |
|---------|-------------|--------------|
| Completeness | Full address | Partial path |
| Portability | Domain-dependent | Structure-dependent |
| Length | Longer | Shorter |
| Use Case | External resources | Internal navigation |
| Maintenance | Harder to change | Easier to update |

## Best Practices
1. **Use absolute URLs for:**
   - External resources (CDNs, fonts, APIs)
   - Social media sharing
   - Email links

2. **Use relative URLs for:**
   - Internal site navigation
   - Development environments
   - Resources within your project

3. **Root-relative URLs (/) are often the best compromise** - they're shorter than absolute but more reliable than document-relative.

4. **Consistency matters** - pick one style for internal links and stick with it.

5. **Test after moves** - relative URLs may break if you restructure files.

## Examples

### Navigation Menu
```html
<!-- Absolute for external, relative for internal -->
<nav>
  <a href="/">Home</a>                         <!-- Root-relative -->
  <a href="about.html">About</a>               <!-- Document-relative -->
  <a href="contact/">Contact</a>               <!-- Folder-relative -->
  <a href="https://twitter.com/example">Twitter</a> <!-- Absolute -->
</nav>
```

### Images
```html
<!-- Good for production -->
<img src="https://cdn.example.com/images/logo.png" alt="Logo">

<!-- Good for development -->
<img src="../assets/images/logo.png" alt="Logo">

<!-- Best compromise -->
<img src="/assets/images/logo.png" alt="Logo">
```

### When Moving Between Environments
```html
<!-- Bad - breaks when moving domains -->
<link href="http://dev.example.com/css/style.css" rel="stylesheet">

<!-- Good - works everywhere -->
<link href="/css/style.css" rel="stylesheet">

<!-- Better - protocol-relative (though less common now) -->
<link href="//cdn.example.com/css/style.css" rel="stylesheet">
```

Remember: The right choice depends on your specific use case and project requirements.
```

This markdown file provides a complete reference that can be placed in your `02--Nested Rules and Best Practices.md` location. It covers all essential aspects of URL usage in web development with practical examples and clear comparisons.
