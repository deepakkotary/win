self.addEventListener('install',ev=>{
     console.log(ev);
 ev.waitUntill(
     caches.open('cha').then(Cache=>{
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