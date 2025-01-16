import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8NARQy7mf2GGqXWeRaArt6izNaT0g4HQ",
  authDomain: "prueba-ed056.firebaseapp.com",
  projectId: "prueba-ed056",
  storageBucket: "prueba-ed056.firebasestorage.app",
  messagingSenderId: "489709139276",
  appId: "1:489709139276:web:1c450edf3272963b544be9",
  measurementId: "G-1BVXZ50GK7"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
