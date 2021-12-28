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
      urlPattern: /\.(?:otf|ttf|woff|woff2)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'fonts',
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
