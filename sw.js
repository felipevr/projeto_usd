const staticCacheName = 'usd_2019_07_01';

this.addEventListener('install', event => {
    this.skipWaiting();

    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll([
                    '.',
                    'images/chip-128.png',
                    'images/chip-256.png',
                    'images/chip-512.png',
                ]);
            })
            .catch(err => console.log('pau', err))
    );
});

this.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => cacheName.startsWith('usd'))
                .filter(cacheName => cacheName !== staticCacheName)
                .map(cacheName => caches.delete(cacheName))
            )
        })
    );
});

this.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('/');
            })
    )
});