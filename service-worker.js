importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBrXqJtMqghnsL2KE4MxTbrp3iwVhU8e8o",
  authDomain: "madani-trx.firebaseapp.com",
  projectId: "madani-trx",
  storageBucket: "madani-trx.firebasestorage.app",
  messagingSenderId: "300456169703",
  appId: "1:300456169703:web:284e47a7cc2f5316ad9242",
  measurementId: "G-LZCQMKRJCP"
});

const messaging = firebase.messaging();

// Precache manifest injected by Workbox
[{"revision":"4a39aba9fb8a2f831fa437780e1a058a","url":"assets/Framework7Icons-Regular-Db9RwDq_.woff2"},{"revision":"d03b787b6492fa2b0141c43fb7e56689","url":"assets/Framework7Icons-Regular-DocpuGSF.woff"},{"revision":"4b52f0a6413f45ba275f62880911eefe","url":"assets/index-B2Mo3TmP.js"},{"revision":"13f028bc9ea963078db4ab454d8927ff","url":"assets/index-Cj7Br3wO.css"},{"revision":"3e1afe59fa075c9e04c436606b77f640","url":"assets/material-icons-Dr0goTwe.woff"},{"revision":"53436aca8627a49f4deaaa44dc9e3c05","url":"assets/material-icons-kAwBdRge.woff2"},{"revision":"4b8566edbbc8081bffccc8844281abe9","url":"firebase-messaging-sw.js"},{"revision":"5651e3cf8b7a7547b3c2b72829d7637a","url":"icons/128x128.png"},{"revision":"e25698366d48f772eb6997a7341627b4","url":"icons/144x144.png"},{"revision":"7ac14ea80892adb44db5ba9156b2f3d8","url":"icons/152x152.png"},{"revision":"c6bc0401b9fcbf6666798ac5aa457d93","url":"icons/192x192.png"},{"revision":"212fad70fae18a3a939eec95ed03a231","url":"icons/256x256.png"},{"revision":"43767df4efc4c2c469b969810ec63357","url":"icons/512x512.png"},{"revision":"212fad70fae18a3a939eec95ed03a231","url":"icons/apple-touch-icon.png"},{"revision":"2e68e28c2cb562c873e51807449b68da","url":"icons/badge-icon.png"},{"revision":"5651e3cf8b7a7547b3c2b72829d7637a","url":"icons/favicon.png"},{"revision":"00bacb282d758dab14da50580d99b538","url":"index.html"}];

// Always activate new SW immediately
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  // Show notification about update
  self.registration.showNotification('Update', {
    body: 'A new version is available and has been updated.',
    icon: '/icons/192x192.png',
  });
});

// Push notification event
self.addEventListener('push', function(event) {
  // If you want to customize, otherwise FCM will show its own notification
  if (event.data) {
    const data = event.data.json();
    const title = data.notification?.title || 'Push Notification';
    const options = {
      body: data.notification?.body || 'You have a new message.',
      icon: '/icons/192x192.png',
    };
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});