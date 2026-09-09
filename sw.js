self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('favicon')) {
    event.respondWith(caches.match('/favicon.ico') || fetch('/favicon.ico'));}
});
