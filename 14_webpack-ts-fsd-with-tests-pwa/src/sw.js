console.log('SW!!!');

const urlsToCache = [
  '/',
  'static/css/main.css',
  'static/53.chunk.css ',
  'bundle.js',
  'index.html',
  '53.chunk.js',
];

self.addEventListener('install', (event) => {
  console.log('install');
  caches.open('assets').then((cache) => {
    cache.addAll(urlsToCache);
  });
});
