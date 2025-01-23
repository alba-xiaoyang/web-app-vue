import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC8NARQy7mf2GGqXWeRaArt6izNaT0g4HQ",
    authDomain: "prueba-ed056.firebaseapp.com",
    projectId: "prueba-ed056",
    storageBucket: "prueba-ed056.firebasestorage.app",
    messagingSenderId: "489709139276",
    appId: "1:489709139276:web:1c450edf3272963b544be9",
    measurementId: "G-1BVXZ50GK7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
