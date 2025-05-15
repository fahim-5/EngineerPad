# HTML Media Elements - Complete Guide

## Embedding Images with `<img>`

### Basic Image Syntax
```html
<img src="image.jpg" alt="Description of the image">
```

### Key Attributes Explained:
- **src** (required): Path to the image file
- **alt** (required): Alternative text for screen readers and when images don't load
- **width/height**: Dimensions in pixels (better to use CSS for responsive images)
- **loading**: Controls lazy loading (`loading="lazy"`)
- **srcset/sizes**: For responsive images (more below)

### Image Best Practices
```html
<!-- Good example -->
<img src="logo.png" 
     alt="Company logo" 
     width="200" 
     height="100"
     loading="lazy"
     class="responsive-img">
```

### Responsive Images with srcset
```html
<img src="small.jpg"
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Responsive image example">
```

### Picture Element for Art Direction
```html
<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Fallback image">
</picture>
```

### Image Formats Explained:
- **JPEG**: Best for photographs (lossy compression)
- **PNG**: Best for graphics with transparency (lossless)
- **WebP**: Modern format (better compression than JPEG/PNG)
- **SVG**: Vector graphics that scale perfectly

## Video Embedding with `<video>`

### Basic Video Player
```html
<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser doesn't support HTML5 video.
</video>
```

### Key Video Attributes:
- **controls**: Shows play/pause controls
- **autoplay**: Starts playing automatically (often blocked by browsers)
- **loop**: Makes video loop continuously
- **muted**: Starts with audio muted (required for autoplay in many browsers)
- **poster**: Image shown before video plays
- **preload**: Hints how video should load (`none`, `metadata`, `auto`)

### Advanced Video Example
```html
<video controls 
       width="800" 
       height="450"
       poster="preview.jpg"
       preload="metadata"
       muted
       class="responsive-video">
  <source src="presentation.mp4" type="video/mp4">
  <source src="presentation.webm" type="video/webm">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <p>Download the video: <a href="presentation.mp4">MP4</a> or <a href="presentation.webm">WebM</a></p>
</video>
```

### Video Formats:
- **MP4 (H.264)**: Most widely supported
- **WebM**: Open format, good quality/size ratio
- **OGG**: Older open format (less common now)

## Audio Embedding with `<audio>`

### Basic Audio Player
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser doesn't support HTML5 audio.
</audio>
```

### Audio Attributes:
- **controls**: Shows play/pause controls
- **autoplay**: Starts playing automatically
- **loop**: Loops the audio
- **muted**: Starts muted
- **preload**: Same as video

### Advanced Audio Example
```html
<audio controls 
       preload="metadata"
       style="width: 100%">
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  <track src="chapters.vtt" kind="chapters" srclang="en">
  <p>Download the audio: <a href="podcast.mp3">MP3</a></p>
</audio>
```

### Audio Formats:
- **MP3**: Most widely supported
- **OGG**: Open format
- **WAV**: Uncompressed, large files
- **AAC**: Advanced audio coding

## Iframes and External Content

### Basic Iframe
```html
<iframe src="https://example.com" 
        title="Example Website"
        width="600" 
        height="400">
</iframe>
```

### Key Iframe Attributes:
- **src**: URL of content to embed
- **title**: Required for accessibility
- **width/height**: Dimensions
- **allowfullscreen**: Permits fullscreen mode
- **sandbox**: Security restrictions
- **loading**: Lazy loading (`loading="lazy"`)

### Embedding Common Services

**YouTube Video:**
```html
<iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

**Google Map:**
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215495579035!2d-73.987844924525!3d40.74844047179796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629997981724!5m2!1sen!2sus" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
</iframe>
```

### Security Considerations
1. Always use `sandbox` attribute when embedding untrusted content:
   ```html
   <iframe src="external.html" sandbox="allow-scripts allow-same-origin"></iframe>
   ```
2. Consider using the `allow` attribute to restrict permissions:
   ```html
   <iframe src="video.html" allow="fullscreen"></iframe>
   ```
3. Implement Content Security Policy (CSP) headers on your server

## Responsive Media Techniques

### Responsive Images
```html
<img src="image.jpg" 
     srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Responsive image"
     class="img-fluid">
```

### Responsive Video
```html
<div class="video-container">
  <video controls class="responsive-video">
    <source src="video.mp4" type="video/mp4">
  </video>
</div>

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }
  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
```

### Responsive Iframes
```html
<div class="iframe-container">
  <iframe src="https://example.com" 
          title="Example" 
          allowfullscreen>
  </iframe>
</div>

<style>
  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }
  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>
```

## Accessibility Best Practices

### For Images:
1. Always include meaningful `alt` text:
   ```html
   <!-- Good -->
   <img src="chart.jpg" alt="Bar chart showing sales growth from 2010-2020">
   
   <!-- Bad -->
   <img src="chart.jpg" alt="chart">
   ```
2. Decorative images should have empty alt:
   ```html
   <img src="divider.jpg" alt="">
   ```

### For Video/Audio:
1. Provide captions/subtitles:
   ```html
   <video controls>
     <source src="video.mp4" type="video/mp4">
     <track src="captions.vtt" kind="captions" srclang="en" label="English">
   </video>
   ```
2. Include transcripts:
   ```html
   <audio controls>
     <source src="interview.mp3" type="audio/mpeg">
   </audio>
   <a href="interview-transcript.html">Read transcript</a>
   ```

### For Iframes:
1. Always include `title` attribute:
   ```html
   <iframe src="..." title="Embedded weather widget"></iframe>
   ```
2. Provide fallback content:
   ```html
   <iframe src="https://example.com" title="Example">
     <p>Your browser doesn't support iframes. <a href="https://example.com">Visit example.com</a></p>
   </iframe>
   ```

## Performance Optimization

### Image Optimization:
1. Use modern formats (WebP/AVIF)
2. Implement lazy loading:
   ```html
   <img src="image.jpg" loading="lazy" alt="...">
   ```
3. Use responsive images with srcset

### Video Optimization:
1. Use proper compression
2. Consider streaming protocols (HLS/DASH) for long videos
3. Use the `preload` attribute wisely:
   ```html
   <video preload="metadata">...</video>
   ```

### Iframe Optimization:
1. Lazy load iframes:
   ```html
   <iframe src="