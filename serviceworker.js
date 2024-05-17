const urlsToCache = [
    // List of assets to cache.
    "/",
    "web/apple-touch-icon.png",
    "web/favicon.ico",
    "web/icon-192.png",
    "web/icon-512-maskable.png",
    "web/icon-512.png"
  ];
   
  self.addEventListener("install", (event) => {
    let cacheUrls = async () => {
       const cache = await caches.open("pwa-assets");
       return cache.addAll(urlsToCache);
    };
    event.waitUntil(cacheUrls());
  });
   
  self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request));
  });