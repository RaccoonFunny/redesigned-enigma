self.addEventListener('install', (event) => {
    console.log('Установлен');
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});

self.addEventListener('install', (event) => {
 event.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/style/master.css',
       '/img/favourite.png'
     ]);
   })
 );
});
