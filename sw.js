self.addEventListener('install',(event)=>{
     event.waitUntil(
   caches.open('lala').then(Cache=>{
        Cache.addAll(
             [
"/win",

                  "/win/index.html",
                  "/win/Index.js",
                  "/win/manifest.json",
                  "/win/icon.jpg",
                  "/win/icon(1).jpg"


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
                         return caches.open("lala").then((cache) => {
                                   cache.put(event.request, fetchResponse.clone());
                                             return fetchResponse;
                                                     });
                                                           });
                                                               })
                                                                 );
                                                                 });
})