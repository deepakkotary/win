var cacheName = "lala" ;

self.addEventListener('install',(event)=>{
     event.waitUntil(
   caches.open(cacheName).then(Cache=>{
        Cache.addAll(
             [
               "/win",
               
                  "/win/index.html",
                  "/win/Index.js",
                  "/win/manifest.json",
                  "/win/icon.jpg",
                  "/win/icon (1).jpg",
                  "/win/index.css"


                  ]
             )
   })       
         )
})




//fetching



                                                                 
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








//updating new thing via uodates the contes 


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Prompt the user to update when a new version is available
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'promptUpdate') {
    if ( confirm ('A new version is available. Do you want to update?')) {
      self.skipWaiting();
      clients.claim();
    }
  }
});





