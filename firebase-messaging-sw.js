importScripts("https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyABY08tzjvf4RBiBKwIw2H1oNaaax2Lbxs",
  authDomain: "lembre-2026.firebaseapp.com",
  projectId: "lembre-2026",
  storageBucket: "lembre-2026.firebasestorage.app",
  messagingSenderId: "205376383656",
  appId: "1:205376383656:web:5adc460f241d941185b09d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png',
    silent: true
  });
});
