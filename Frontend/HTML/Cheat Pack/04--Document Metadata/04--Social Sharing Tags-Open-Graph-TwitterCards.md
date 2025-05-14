# Social Sharing Meta Tags: Open Graph & Twitter Cards

## Why Social Meta Tags Matter
Social sharing tags control how your content appears when shared on social platforms. Without them, platforms may display your content incorrectly or unattractively.

## Open Graph Protocol (Facebook, LinkedIn, etc.)

### Basic Open Graph Tags
```html
<meta property="og:title" content="Your Article Title">
<meta property="og:description" content="Your engaging description here">
<meta property="og:image" content="https://yourdomain.com/image.jpg">
<meta property="og:url" content="https://yourdomain.com/page-url">
<meta property="og:type" content="website"> <!-- or article, product, etc. -->
```

### Recommended Image Specifications
- **Size**: 1200×630 pixels (1.91:1 ratio)
- **File Format**: JPG or PNG
- **File Size**: Under 1MB recommended

### Advanced Open Graph Tags
```html
<meta property="og:site_name" content="Your Site Name">
<meta property="og:locale" content="en_US">
<meta property="article:published_time" content="2024-03-20T08:00:00+00:00">
<meta property="article:author" content="Author Name">
```

## Twitter Cards

### Basic Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@YourTwitterHandle">
<meta name="twitter:creator" content="@AuthorTwitterHandle">
<meta name="twitter:title" content="Your Article Title">
<meta name="twitter:description" content="Your engaging description here">
<meta name="twitter:image" content="https://yourdomain.com/image.jpg">
```

### Twitter Card Types
1. **summary** (small square image)
   ```html
   <meta name="twitter:card" content="summary">
   ```
2. **summary_large_image** (large rectangular image)
   ```html
   <meta name="twitter:card" content="summary_large_image">
   ```
3. **player** (for video/audio content)
4. **app** (for mobile apps)

### Twitter Image Specifications
- **Size**: 1200×628 pixels (minimum 600×314)
- **Max File Size**: 5MB
- **Format**: JPG, PNG, WEBP or GIF

## Implementation Best Practices

1. **Always include both Open Graph and Twitter Cards** - Some platforms only read one type
2. **Use absolute URLs** for all images and links
3. **Test your tags** using:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
4. **Keep descriptions** under 200 characters
5. **Update images** regularly for shared content

## Complete Example

```html
<!-- Open Graph -->
<meta property="og:title" content="The Ultimate Guide to Social Meta Tags">
<meta property="og:description" content="Learn how to optimize your content for social sharing with proper meta tags">
<meta property="og:image" content="https://example.com/images/social-share.jpg">
<meta property="og:url" content="https://example.com/social-meta-tags">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Web Dev Tips">
<meta property="article:published_time" content="2024-03-20T08:00:00+00:00">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@WebDevTips">
<meta name="twitter:creator" content="@AuthorName">
<meta name="twitter:title" content="The Ultimate Guide to Social Meta Tags">
<meta name="twitter:description" content="Optimize your content for social sharing">
<meta name="twitter:image" content="https://example.com/images/social-share.jpg">
```

## Common Mistakes to Avoid
❌ Using different titles/descriptions between OG and Twitter  
❌ Relative paths for images (always use full URLs)  
❌ Forgetting to specify image dimensions  
❌ Using low-quality or small images  
❌ Not testing how links appear when shared  

These tags ensure your content looks professional and engaging when shared across social platforms, increasing click-through rates and engagement.
