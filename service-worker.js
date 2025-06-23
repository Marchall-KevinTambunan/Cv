self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cv-cache').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/kevin.jpg'
      ])
    )
  );
});

self.addEventListener('fetch', () => {});
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
