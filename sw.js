self.addEventListener('install',ev=>{
 ev.waitUntill(
     caches.open('V1').then(cache=>{
      cache.addAll([
           "/",
           "/Index.js",
           "manifest.json",
           "icon.jpg",
           "icon(1).jpg",
           
           ])    
          
     }) 
      
      )    
     
})





