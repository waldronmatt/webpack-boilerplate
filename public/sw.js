const cacheName = 'cache'; // Change value to force update

self.addEventListener('install', event => {
  // Kick out the old service worker
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        'fonts/tajawal-v3-latin-regular.woff', // fonts
        'fonts/tajawal-v3-latin-regular.woff2', // fonts
        'android-chrome-192x192.png', // Favicon, Android Chrome M39+ with 4.0 screen density
        'android-chrome-512x512.png', // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
        'apple-touch-icon.png', // Favicon, Apple default
        'browserconfig.xml', // IE11 icon configuration file
        'favicon.ico', // Favicon, IE and fallback for other browsers
        'favicon-16x16.png', // Favicon, default
        'favicon-32x32.png', // Favicon, Safari on Mac OS
        'manifest.json', // Manifest file
        'maskable_icon.png', // Favicon, maskable https://web.dev/maskable-icon
        'mstile-150x150.png', // Favicon, Windows 8 / IE11
        'safari-pinned-tab.svg', // Favicon, Safari pinned tab
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  // Delete any non-current cache
  event.waitUntil(
    caches.keys().then(keys => {
      Promise.all(
        keys.map(key => {
          if (![cacheName].includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data.
self.addEventListener('fetch', event => {
  // if request is made, page url must contain https.
  // https://github.com/iamshaunjp/pwa-tutorial/issues/1#issuecomment-527748837
  if (!event.request.url.startsWith('https')) {
    return;
  }
  // check if request is made by chrome extensions or web page
  event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(response => {
        return (
          response ||
          fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        );
      });
    })
  );
});
