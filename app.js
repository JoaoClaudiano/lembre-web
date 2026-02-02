// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-messaging.js";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyABY08tzjvf4RBiBKwIw2H1oNaaax2Lbxs",
  authDomain: "lembre-2026.firebaseapp.com",
  projectId: "lembre-2026",
  storageBucket: "lembre-2026.firebasestorage.app",
  messagingSenderId: "205376383656",
  appId: "1:205376383656:web:5adc460f241d941185b09d"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Habilitar notificações
document.getElementById("enable").onclick = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      alert("Permissão negada");
      return;
    }
    const token = await getToken(messaging, { vapidKey: "SUA_PUBLIC_VAPID_KEY" });
    console.log("Token FCM:", token);
    alert("Notificações ativadas!");
  } catch (err) {
    console.error(err);
    alert("Erro ao ativar notificações");
  }
};

// Criar lembrete local
document.getElementById("create").onclick = () => {
  const text = document.getElementById("text").value;
  const time = new Date(document.getElementById("time").value).getTime();
  const delay = time - Date.now();
  if (!text || delay <= 0) { alert("Preencha corretamente"); return; }

  setTimeout(() => {
    new Notification("Lembre", { body: text, silent: true });
  }, delay);
  alert("Lembrete criado!");
};

// Receber push em foreground
onMessage(messaging, payload => {
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    silent: true
  });
});
