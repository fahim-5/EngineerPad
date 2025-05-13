# HTML APIs & Advanced Integrations

Modern web development offers powerful browser APIs that enable advanced functionality without requiring plugins or external software. Let's explore some of the most useful HTML5 APIs.

## Geolocation API

The Geolocation API allows websites to request the user's physical location (with permission).

### Basic Implementation:
```javascript
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error getting location:", error.message);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}
```

### Advanced Options:
```javascript
const options = {
  enableHighAccuracy: true,  // Uses GPS if available
  timeout: 5000,            // Maximum wait time in ms
  maximumAge: 0             // Don't use cached position
};

navigator.geolocation.getCurrentPosition(success, error, options);
```

### Watching Position (Continuous Updates):
```javascript
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    updateMap(position.coords);
  }
);

// Later, to stop watching:
navigator.geolocation.clearWatch(watchId);
```

**Use Cases**: Location-based services, store locators, mapping applications

## Drag and Drop API

Native drag-and-drop functionality without external libraries.

### Basic Setup:
```html
<div id="drag-item" draggable="true">Drag me!</div>
<div id="drop-zone">Drop here</div>

<script>
  const dragItem = document.getElementById('drag-item');
  const dropZone = document.getElementById('drop-zone');

  dragItem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', dragItem.id);
    e.target.style.opacity = '0.4';
  });

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow dropping
    e.target.style.background = '#e2e2e2';
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    e.target.appendChild(draggedElement);
    draggedElement.style.opacity = '1';
    e.target.style.background = '';
  });
</script>
```

### Advanced Features:
- Custom drag images: `e.dataTransfer.setDragImage(element, xOffset, yOffset)`
- Different data types: `text/uri-list`, `text/html`, custom types
- Drag effects: `e.dataTransfer.effectAllowed` and `e.dataTransfer.dropEffect`

**Use Cases**: File upload interfaces, dashboard widgets, visual builders

## Web Storage (localStorage & sessionStorage)

Client-side storage options that are more powerful than cookies.

### localStorage (Persistent Storage)
```javascript
// Store data
localStorage.setItem('username', 'john_doe');
localStorage.setItem('userPreferences', JSON.stringify({ theme: 'dark' }));

// Retrieve data
const username = localStorage.getItem('username');
const prefs = JSON.parse(localStorage.getItem('userPreferences'));

// Remove data
localStorage.removeItem('username');

// Clear all
localStorage.clear();
```

### sessionStorage (Session-only Storage)
Same API as localStorage, but data clears when the session ends (tab closes).

```javascript
sessionStorage.setItem('tempData', 'value');
```

### Storage Event (Cross-tab Communication)
```javascript
window.addEventListener('storage', (event) => {
  console.log(`Key changed: ${event.key}`);
  console.log(`New value: ${event.newValue}`);
  console.log(`Old value: ${event.oldValue}`);
});
```

**Key Differences**:
| Feature        | localStorage | sessionStorage | Cookies         |
|----------------|--------------|----------------|-----------------|
| Capacity       | ~5MB         | ~5MB           | ~4KB            |
| Persistence    | Permanent    | Tab session    | Configurable    |
| Server Access  | No           | No             | Yes             |
| Automatic Send | No           | No             | With requests   |

**Use Cases**: User preferences, form data persistence, caching simple data

## Web Workers and Offline Capabilities

### Web Workers (Background Threads)
Run JavaScript in parallel threads without blocking the UI.

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ command: 'start', value: 1000000 });

worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  if (e.data.command === 'start') {
    const result = heavyCalculation(e.data.value);
    self.postMessage(result);
  }
};

function heavyCalculation(n) {
  // Simulate CPU-intensive task
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}
```

### Service Workers (Offline Capabilities)
Enable Progressive Web App (PWA) features like offline access.

```javascript
// sw.js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

**Registering the Service Worker**:
```javascript
// main.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}
```

### Cache API (Advanced Caching)
```javascript
// More advanced caching strategy (Cache First, then Network)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(
          (response) => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          }
        );
      })
    );
});
```

**Use Cases**:
- Web Workers: Complex calculations, image processing, data parsing
- Service Workers: Offline apps, push notifications, background sync
- Cache API: Performance optimization, reducing server requests

## Best Practices and Security Considerations

1. **Geolocation**:
   - Always request permission
   - Provide fallback for denied permissions
   - Consider privacy implications

2. **Drag and Drop**:
   - Provide keyboard alternatives for accessibility
   - Give visual feedback during operations

3. **Web Storage**:
   - Never store sensitive data (use server-side sessions)
   - Handle quota exceeded errors
   - Consider IndexedDB for larger datasets

4. **Web Workers**:
   - Workers can't access the DOM
   - Use `postMessage` for communication
   - Terminate workers when not needed

5. **Service Workers**:
   - HTTPS is required (except on localhost)
   - Implement proper cache invalidation
   - Test offline scenarios thoroughly

These powerful APIs enable modern web applications to compete with native apps in terms of functionality while maintaining the web's universal accessibility.