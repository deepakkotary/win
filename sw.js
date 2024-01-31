self.addEventListener('install',ev=>{
     ev.waitUntill(
  caches.open('pwa').then(Cache=>{
       Cache.addAll([
            "index.html",
            "Index.js",
            "manifest.json",
            "icon.jpg",
            "icon(1).jpg"
            ])
  })       
          )
})

//before install promot 





// activation 
self.addEventListener('active',ev=>{
     console.log(ev)
})




// fatching

self.addEventListener('fetch',ev=>{
     console.log(ev);
  
  ev.respondWith(
   caches.match(ev.request).then(
        res=>{
             return res || ev.request  ;
        }
        )    
       )   
     
})



