self.addEventListener('fetch', function(event) {
  // he he he
  if (event.request.url.includes('favicon')) {
    event.respondWith(caches.match('/favicon.ico') || fetch('/favicon.ico'));
  }
});
