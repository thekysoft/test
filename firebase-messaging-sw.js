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

// Handle notification clicks
self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked:', event);
    
    event.notification.close();
  
    // Open or focus the PWA
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
        // Check if there's already a window/tab open with the target URL
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus();
          }
        }
        
        // If no window/tab is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow('/'); // or your specific route
        }
      })
    );
  });
  
  // Handle background messages
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message:', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon || '/icons/icon-192x192.png', // your app icon
      badge: '/icons/badge-icon.png', // your badge icon
      data: payload.data || {}
    };
  
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });