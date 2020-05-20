var filesToCache = [
    '/',
    'css/bootstrap.min.css',
    'css/main.css',
    'csv/cards.csv',
    'csv/npcards.csv',
    'js/cards.js',
    'js/jquery.js',
    'js/jquery-3.4.1.min.js',
    'js/Main.js',
    'js/papaparse.min.js',
    'favicon.png',
    'index.html',
    'manifest.json',
    'images/manifest-icon-192.png',
    'images/manifest-icon-512.png'
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