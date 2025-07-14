// Precache manifest injected by Workbox
[{"revision":"4a39aba9fb8a2f831fa437780e1a058a","url":"assets/Framework7Icons-Regular-Db9RwDq_.woff2"},{"revision":"d03b787b6492fa2b0141c43fb7e56689","url":"assets/Framework7Icons-Regular-DocpuGSF.woff"},{"revision":"5ffa4bbb556f504978db2c6dc26ea467","url":"assets/index-cEh5Xb2R.js"},{"revision":"13f028bc9ea963078db4ab454d8927ff","url":"assets/index-Cj7Br3wO.css"},{"revision":"3e1afe59fa075c9e04c436606b77f640","url":"assets/material-icons-Dr0goTwe.woff"},{"revision":"53436aca8627a49f4deaaa44dc9e3c05","url":"assets/material-icons-kAwBdRge.woff2"},{"revision":"5651e3cf8b7a7547b3c2b72829d7637a","url":"icons/128x128.png"},{"revision":"e25698366d48f772eb6997a7341627b4","url":"icons/144x144.png"},{"revision":"7ac14ea80892adb44db5ba9156b2f3d8","url":"icons/152x152.png"},{"revision":"c6bc0401b9fcbf6666798ac5aa457d93","url":"icons/192x192.png"},{"revision":"212fad70fae18a3a939eec95ed03a231","url":"icons/256x256.png"},{"revision":"43767df4efc4c2c469b969810ec63357","url":"icons/512x512.png"},{"revision":"212fad70fae18a3a939eec95ed03a231","url":"icons/apple-touch-icon.png"},{"revision":"5651e3cf8b7a7547b3c2b72829d7637a","url":"icons/favicon.png"},{"revision":"a34bde13d9ae19d2481c81612182cbd4","url":"index.html"}];

// On install, do NOT immediately activate. Wait for user confirmation from the page.
self.addEventListener('install', event => {
  // Do nothing here; activation will be triggered by a message from the client.
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Claim clients as soon as SW activates
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Your push event, etc.
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'Test push message!';
  event.waitUntil(
    self.registration.showNotification('Push Notification', {
      body: data,
      icon: '/icons/192x192.png',
    })
  );
});