//the code below is used to check if service worker for the app is registered 
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service Worker Registered', reg))
    .catch((err) => console.log('Service Worker is NOT registered', err))
}