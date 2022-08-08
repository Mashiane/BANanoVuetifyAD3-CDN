//self.addEventListener("notificationclose", console.log);
//self.addEventListener("notificationclick", console.log);

importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-analytics.js");

var firebaseConfig = {
    apiKey: "AIzaSyBzk4d9PMPvxT6ypIEiuNmisLsTHFsb9V4",
    authDomain: "agritrax.firebaseapp.com",
    databaseURL: "https://agritrax.firebaseio.com",
    projectId: "agritrax",
    storageBucket: "agritrax.appspot.com",
    messagingSenderId: "820336884161",
    appId: "1:820336884161:web:c7f506cb3a58aaf0ea1740",
    measurementId: "G-NQXGKLKMB6"
};

function isClientFocused() {
    return clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then((windowClients) => {
        let clientIsFocused = false;

        for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i];
            if (windowClient.focused) {
                clientIsFocused = true;
                break;
            }
        }

        return clientIsFocused;
    });
}


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = payload.notification;
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: notification.icon,
        requireInteraction: true,
        vibrate: [300, 100, 400]
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
})