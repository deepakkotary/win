self.addEventListener('install',ev=>{
 ev.waitUntill(
     caches.open('V1').then(cache=>{
      Cache.addAll([
           "index.html",
           "Index.js",
           "manifest.json",
           "icon.jpg",
           "icon(1).jpg",
           
           ])    
          
     }) 
      
      )    
     
})


// beforeinstallprompt


