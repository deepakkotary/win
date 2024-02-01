self.addEventListener('install',ev=>{
 ev.waitUntill(
     caches.open('V1').then(cache=>{
      Cache.addAll([
           "/",
           "/Index.js",
           "manifest.json",
           "icon.jpg",
           "icon(1).jpg",
           
           ])    
          
     }) 
      
      )    
     
})


// beforeinstallprompt


