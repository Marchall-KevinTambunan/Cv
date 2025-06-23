self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("cv-kevin").then((cache) =>
      cache.addAll([
        "/",
        "/index.html",
        "/kevin.jpg",
        "/manifest.json"
      ])
    )
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
