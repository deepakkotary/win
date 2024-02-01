
 






// Service Worker script

const cacheName = 'myCache';

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open(cacheName).then((cache) => {
            return cache.addAll([
                    '/',
                            '/Index.js',
                            '/manifest.json',
                            'icon.jpg',
                            'icon(1).jpg'

                                    // Add other files you want to cache
                                          ]);
                                              })
                                                );
                                                });

                                                self.addEventListener('fetch', (event) => {
                                                  event.respondWith(
                                                      caches.match(event.request).then((response) => {
                                                            return response || fetch(event.request).then((fetchResponse) => {
                                                                    return caches.open(cacheName).then((cache) => {
                                                                              cache.put(event.request, fetchResponse.clone());
                                                                                        return fetchResponse;
                                                                                                });
                                                                                                      });
                                                                                                          })
                                                                                                            );
                                                                                                            });