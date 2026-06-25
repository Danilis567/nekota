import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Storage'ı da ekleyelim, resim

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRDBiQND5BRWHhH2WWz_IYIhUPQ3XMpWQ",
  authDomain: "nekota-web.firebaseapp.com",
  projectId: "nekota-web",
  storageBucket: "nekota-web.firebasestorage.app",
  messagingSenderId: "629411297611",
  appId: "1:629411297611:web:704446545b507da50f50ce"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Gerekli tüm servisleri başlatıp export et
export const db = getFirestore(app);         // Firestore Veritabanı
export const auth = getAuth(app);            // Authentication (Kullanıcı Girişi)
export const storage = getStorage(app);    // Storage (Dosya Yükleme)