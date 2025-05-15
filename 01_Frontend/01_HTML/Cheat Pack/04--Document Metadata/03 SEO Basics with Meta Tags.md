# SEO Basics with Meta Tags

## What Are Meta Tags?
Meta tags are HTML elements that provide information about a web page to search engines and website visitors. They don't appear on the page itself but are read by search engine crawlers.

## Essential SEO Meta Tags

### 1. Title Tag (`<title>`)
- Most important SEO element
- Appears as the clickable headline in search results
- Should be under 60 characters

```html
<title>Best Coffee Shops in New York | 2024 Guide</title>
```

### 2. Meta Description
- Summarizes page content (under 160 characters)
- Often appears as the snippet in search results

```html
<meta name="description" content="Discover the top 10 coffee shops in New York City with our expert-curated 2024 guide. Find the best brews and atmospheres.">
```

### 3. Viewport Meta Tag
- Critical for mobile SEO
- Ensures proper mobile rendering

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 4. Charset Declaration
- Ensures proper character rendering

```html
<meta charset="UTF-8">
```

### 5. Canonical URL
- Prevents duplicate content issues
- Specifies the "main" version of a page

```html
<link rel="canonical" href="https://example.com/main-page">
```

## Advanced SEO Meta Tags

### 1. Open Graph (Social Media) Tags
```html
<meta property="og:title" content="Best Coffee Shops in New York">
<meta property="og:description" content="2024 Guide to NYC's top coffee spots">
<meta property="og:image" content="https://example.com/coffee-image.jpg">
<meta property="og:url" content="https://example.com/nyc-coffee">
```

### 2. Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Best Coffee Shops in New York">
<meta name="twitter:description" content="2024 Guide to NYC's top coffee spots">
```

### 3. Robots Meta Tag
```html
<meta name="robots" content="index, follow">  <!-- Default - can be omitted -->
<meta name="robots" content="noindex">  <!-- Don't show in search results -->
<meta name="robots" content="nofollow">  <!-- Don't follow links -->
```

## Best Practices

1. **Unique Content**: Every page should have unique title and description
2. **Keyword Placement**: Include main keywords naturally in title and description
3. **Mobile First**: Always include viewport meta tag
4. **Social Sharing**: Implement Open Graph and Twitter Cards
5. **Length Limits**:
   - Title: 50-60 characters
   - Description: 150-160 characters

## Common Mistakes to Avoid

❌ Duplicate title/meta descriptions across pages  
❌ Keyword stuffing in meta tags  
❌ Missing viewport tag for mobile  
❌ Forgetting canonical tags for similar content  
❌ Overly long titles/descriptions that get truncated

## Complete SEO Meta Example

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Coffee Shops in New York | 2024 Guide</title>
  <meta name="description" content="Discover the top 10 coffee shops in New York City with our expert-curated 2024 guide.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://example.com/nyc-coffee">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Best Coffee Shops in New York">
  <meta property="og:description" content="2024 Guide to NYC's top coffee spots">
  <meta property="og:image" content="https://example.com/coffee-image.jpg">
  <meta property="og:url" content="https://example.com/nyc-coffee">
  <meta property="og:type" content="website">
</head>
```

Remember: While meta tags are important, they're just one part of SEO. Quality content and good backlinks remain most critical.
