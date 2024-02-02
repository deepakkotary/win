// registration 





//updating new things


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/win/sw.js').then((registration) => {
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New content is available, prompt the user to update
            navigator.serviceWorker.controller.postMessage({ type: 'promptUpdate' });
          } else {
            console.log('Content is cached for offline use.');
          }
        }
      });
    });
  });

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}





//app js

function fuck (){
document.body.requestFullscreen().then(res=>{
      return res;
})
}

fuck();