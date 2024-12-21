import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactapp-2d31b.firebaseapp.com",
  projectId: "reactapp-2d31b",
  storageBucket: "reactapp-2d31b.firebasestorage.app",
  messagingSenderId: "1011617589864",
  appId: "1:1011617589864:web:84d0f9527d06133f5169dd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
