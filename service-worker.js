const cacheName = 'static-cache';

const staticAssets = [
  '/index.html',
  '/assets/css/index.css',
  '/assets/img/photo-160w.jpg',
  '/assets/img/photo-160w.webp',
  '/assets/img/photo-320w.jpg',
  '/assets/img/photo-320w.webp',
  '/assets/img/photo-640w.jpg',
  '/assets/img/photo-640w.webp',
  '/assets/js/index.js',
  '/assets/pdf/cv_stefan_frede.pdf',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(staticAssets)),
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => (response ? response : fetch(event.request))),
  );
});
