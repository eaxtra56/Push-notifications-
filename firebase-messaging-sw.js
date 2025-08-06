// Firebase SDK-এর compat সংস্করণ ইম্পোর্ট করুন (সার্ভিস ওয়ার্কারের জন্য এটি সহজ)
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js");

// আপনার ওয়েব অ্যাপের Firebase কনফিগারেশন (একই কনফিগারেশন আবার দিন)
const firebaseConfig = {
    apiKey: "AIzaSyBkEurB8a1xfrzE1yT4scdf801ovdq5-rw",
    authDomain: "guild-f8843.firebaseapp.com",
    databaseURL: "https://guild-f8843-default-rtdb.firebaseio.com",
    projectId: "guild-f8843",
    storageBucket: "guild-f8843.firebasestorage.app",
    messagingSenderId: "959781172981",
    appId: "1:959781172981:web:593da4b7bc"
};

// Firebase ইনিশিয়ালাইজ করুন
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// অ্যাপটি ব্যাকগ্রাউন্ডে বা বন্ধ থাকা অবস্থায় নোটিফিকেশন দেখানোর জন্য
messaging.onBackgroundMessage(function(payload) {
    console.log("ব্যাকগ্রাউন্ডে একটি পুশ মেসেজ পাওয়া গেছে: ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg' // একটি ডিফল্ট আইকন
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
