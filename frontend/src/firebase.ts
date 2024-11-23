import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "resh-motion.firebaseapp.com",
  projectId: "resh-motion",
  storageBucket: "resh-motion.firebasestorage.app",
  messagingSenderId: "721668893874",
  appId: "1:721668893874:web:a2797cd50181e1e719edab"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);