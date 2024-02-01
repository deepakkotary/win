self.addEventListener('install',(event)=>{
     event.waitUntil(
   caches.open('lala').then(Cache=>{
        Cache.addAll(
             [
"/win",

                  "/win/index.html"
                  ]
             )
   })       
         )
})