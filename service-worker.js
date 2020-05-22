var filesToCache = [
    '/',
    'css/bootstrap.min.css',
    'css/main.css',
    'cards/cards.json',
    'cards/npcards.json',
    'js/cards.js',
    'js/jquery.js',
    'js/jquery-3.4.1.min.js',
    'js/Main.js',
    'index.html'
];

var cacheName = 'cache';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        }).then(function () {
            return self.skipWaiting();
        })
    )
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if(key !== cacheName){
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
})

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.open(cacheName).then(cache =>{
            return caches.match(e.request).then(function (response) {
                const fetchPromise = fetch(e.request).then(networkResponse => {
                    cache.put(e.request, networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            });
        })
    );
});