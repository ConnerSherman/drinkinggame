var filesToCache = [
    '/',
    'css/bootstrap.min.css',
    'css/main.css',
    'csv/cards.csv',
    'csv/npcards.csv',
    'icons/icons-192.png',
    'icons/icons-512.png',
    'js/cards.js',
    'js/jquery.js',
    'js/jquery-3.4.1.min.js',
    'js/Main.js',
    'js/papaparse.min.js',
    'favicon.png',
    'index.html',
    'manifest.json'
];

var cacheName = 'cache-v0.2.8';

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
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});