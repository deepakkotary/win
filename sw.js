self.addEventListener('install',ev=>{
 ev.waitUntill(
     caches.open('V1').then(cache=>{
      cache.addAll([
           "https://deepakkotary.github.io/win/",
           "/Index.js",
           "manifest.json",
           "icon.jpg",
           "icon(1).jpg",
           
           ])    
          
     }) 
      
      )    
     
})


// beforeinstallprompt


