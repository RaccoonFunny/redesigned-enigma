const CACHE = 'cache-only-v1';

self.addEventListener('install', (event) => {
    console.log('Установлен');
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                '/img/favourite.png',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
    event.respondWith(fromCache(event.request));
});

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
      cache.match(request)
          .then((matching) => matching || Promise.reject('no-match'))
    );
}
