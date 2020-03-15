const CASHE_NAME = "WebsiteCash";
const CACHE_PREFIX = "Cach of My PWA";
const CACHE_LIST = [
    'img/favourite.png',
    'index.html',
    'style/master.css',
    'script/script.js'
    ];

self.addEventListener('install', (e)=>{
    console.log("installed");
    e.waitUntil(
        caches.open(CASHE_NAME).then(cache=>{
            return cache.addAll(CACHE_LIST);
        })
    );
});

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
