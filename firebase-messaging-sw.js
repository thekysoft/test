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

self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    const title = data.notification?.title || 'Push Notification';
    const options = {
      body: data.notification?.body || 'You have a new message.',
      badge: 'https://testmadani.thekysoft.com/icons/favicon.png', // <-- Your custom icon path
      // You can also add badge, image, etc.
    };
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  // Define the URL you want to open (your PWA's root or a specific page)
  const urlToOpen = '/'; // or 'https://yourdomain.com/'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // If a window/tab is already open, focus it
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        // Check if the client URL matches your PWA's root
        if (client.url.includes(urlToOpen) && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise, open a new tab/window
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});