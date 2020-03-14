self.addEventListener('install', (event) => {
    console.log('Установлен');
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

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});
