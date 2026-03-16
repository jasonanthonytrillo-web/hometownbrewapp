const CACHE_NAME = 'hometown-brew-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './hblogo.jpg',
  './manifest.json',
  './wallpaper.jpg',
  './src/index.css',
  // Cache pages
  './src/App.jsx',
  './src/main.jsx'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }).catch(() => {
        // Offline fallback
        return caches.match('./');
      })
  );
});

