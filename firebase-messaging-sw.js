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