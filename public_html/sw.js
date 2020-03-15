const CASHE_NAME = "WebsiteCash";
const CACHE_PREFIX = "Cach of My PWA";
const CACHE_LIST = [
    'img/favourite.png',
    'index.html'
    ];

self.addEventListener('install', (e)=>{
    console.log("installed");
    e.waitUntil(
        caches.open(CASHE_NAME).then(cache=>{
            return cache.addAll(CACHE_LIST);
        })
    );
});

self.addEventListener('activate',event=>{
    event.waitUntil(
        caches.keys().then(keyList => {
            if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME){
                return caches.delite(key);
            }
        }));
    )
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

*/this.addEventListener('fetch', function (event) {
    if (
        event.request.method !== 'GET' ||
        event.request.url.indexOf('http://') === 0 ||
        event.request.url.indexOf('an.yandex.ru') !== -1
    ) {
        return;
    }

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
*/
