module.exports = {
  cacheId: '11ststarterkit',
  globDirectory: 'dist/',
  globPatterns: ['**/*.{css,js,json,pdf}'],
  swDest: 'dist/sw.js',

  runtimeCaching: [
    {
      urlPattern: /(?:\/)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'html',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
      },
    },
    {
      urlPattern: /^(https:\/\/cloud\.typography\.com)/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'typography-stylesheet',
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        },
      },
    },
    {
      urlPattern: /^(https:\/\/res\.cloudinary\.com)/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'cloudinary-images',
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxAgeSeconds: 30 * 24 * 60 * 60,
          maxEntries: 30,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|gif|webp|svg|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxAgeSeconds: 30 * 24 * 60 * 60,
          maxEntries: 30,
        },
      },
    },
  ],
};
