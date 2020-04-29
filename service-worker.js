const staticAssets = [
  '/',
  '/assets/css/index.css',
  '/assets/img/sven-exter-1x.jpg',
  '/assets/img/sven-exter-2x.jpg',
  '/assets/img/sven-exter-3x.jpg',
  '/assets/img/sven-exter-1x.webp',
  '/assets/img/sven-exter-2x.webp',
  '/assets/img/sven-exter-3x.webp',
  '/assets/img/stefan-frede-1x.jpg',
  '/assets/img/stefan-frede-2x.jpg',
  '/assets/img/stefan-frede-3x.jpg',
  '/assets/img/stefan-frede-1x.webp',
  '/assets/img/stefan-frede-2x.webp',
  '/assets/img/stefan-frede-3x.webp',
  '/assets/img/thomas-nitsche-1x.jpg',
  '/assets/img/thomas-nitsche-2x.jpg',
  '/assets/img/thomas-nitsche-3x.jpg',
  '/assets/img/thomas-nitsche-1x.webp',
  '/assets/img/thomas-nitsche-2x.webp',
  '/assets/img/thomas-nitsche-3x.webp',
  '/assets/img/ulrich-nitsche-1x.jpg',
  '/assets/img/ulrich-nitsche-2x.jpg',
  '/assets/img/ulrich-nitsche-3x.jpg',
  '/assets/img/ulrich-nitsche-1x.webp',
  '/assets/img/ulrich-nitsche-2x.webp',
  '/assets/img/ulrich-nitsche-3x.webp',
  '/assets/img/nina-zimmermann-1x.jpg',
  '/assets/img/nina-zimmermann-2x.jpg',
  '/assets/img/nina-zimmermann-3x.jpg',
  '/assets/img/nina-zimmermann-1x.webp',
  '/assets/img/nina-zimmermann-2x.webp',
  '/assets/img/nina-zimmermann-3x.webp',
  '/assets/pdf/cv_stefan_frede.pdf',
];

self.addEventListener('install', async () => {
  const cache = await caches.open('static-cache');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.url) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkFirst(req));
  }
});

async function cacheFirst(req) {
  const cachedResponse = caches.match(req);
  return cachedResponse || fetch(req);
}

async function networkFirst(req) {
  const cache = await caches.open('dynamic-cache');

  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}
