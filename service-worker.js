const VERSION = 'tmp-000-001';

const CACHE_KEYS = {
  PRE_CACHE: `precache-${VERSION}`,
  RUNTIME: `runtime-${VERSION}`,
};

// URLS that we don’t want to end up in the cache
const EXCLUDED_URLS = [];

// URLS that we want to be cached when the worker is installed
const PRE_CACHE_URLS = [
  '/',
  '/index.html',
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

// You might want to bypass a certain host
const IGNORED_HOSTS = ['localhost'];

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

/**
 * Takes an array of strings and puts them in a named cache store
 *
 * @param {String} cacheName
 * @param {Array} items=[]
 */
const addItemsToCache = function (cacheName, items = []) {
  caches.open(cacheName).then((cache) => cache.addAll(items));
};

self.addEventListener('install', (e) => {
  e.waitUntil(addItemsToCache(CACHE_KEYS.PRE_CACHE, PRE_CACHE_URLS));
});

self.addEventListener('activate', (e) => {
  // Look for any old caches that don't match our set and clear them out
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (item) => !Object.values(CACHE_KEYS).includes(item),
        );
      })
      .then((itemsToDelete) => {
        return Promise.all(
          itemsToDelete.map((item) => {
            return caches.delete(item);
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const { hostname } = new URL(e.request.url);

  // Check we don't want to ignore this host
  if (IGNORED_HOSTS.indexOf(hostname) >= 0) {
    return;
  }

  // Check we don't want to ignore this URL
  if (EXCLUDED_URLS.some((page) => e.request.url.indexOf(page) > -1)) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // Item found in cache so return
      if (cachedResponse) {
        return cachedResponse;
      }

      // Nothing found so load up the request from the network
      return caches.open(CACHE_KEYS.RUNTIME).then((cache) => {
        return fetch(e.request)
          .then((response) => {
            // Put the new response in cache and return it
            return cache.put(e.request, response.clone()).then(() => {
              return response;
            });
          })
          .catch(() => {
            return;
          });
      });
    }),
  );
});
