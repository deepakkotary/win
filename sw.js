self.addEventListener('install',ev=>{
 ev.waitUntill(
     caches.open('V1').then(Cache=>{
      Cache.addAll([
           "/",
           "/Index.js",
           "manifest.json",
           "icon.jpg",
           "icon(1).jpg"
           
           ])    
          
     }) 
      
      )    
     
})





