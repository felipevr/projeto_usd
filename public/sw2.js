const version = "2019_08_18-15-48";
const cacheName = `usd-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/images/chip-128.png',
                '/images/chip-256.png',
                '/images/chip-512.png',
                '/template/conversor.html',
                '/template/sobre.html',
                '/template/configuracoes.html',
                '/js/config.js',
                '/js/conversor.js',
                '/js/router.js',
                '/js/vendor/navigo.min.js',
                'https://code.jquery.com/jquery-3.4.1.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js',
                'https://kit.fontawesome.com/6650d5758f.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js'
            ])
                .then(() => self.skipWaiting())
                .catch((a, err) => {console.log(err)})
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
        })
    );
});