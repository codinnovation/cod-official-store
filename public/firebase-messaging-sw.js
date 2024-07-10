// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging.js');

firebase.initializeApp({
   apiKey: "AIzaSyB79Ue_0CkpaBTISGIGWtYSAvPJ6cSwbtI",
   authDomain: "cod-shop-c1874.firebaseapp.com",
   databaseURL: "https://cod-shop-c1874-default-rtdb.firebaseio.com",
   projectId: "cod-shop-c1874",
   storageBucket: "cod-shop-c1874.appspot.com",
   messagingSenderId: "24922895227",
   appId: "1:24922895227:web:1d2dc54aa38da4dff903de",
   measurementId: "G-XTHD2EN5TZ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
