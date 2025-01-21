import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC54H5oFsr8K5UYjssssn3I5kngWaaqrWw",
  authDomain: "prueba-eoi-primero.firebaseapp.com",
  projectId: "prueba-eoi-primero",
  storageBucket: "prueba-eoi-primero.firebasestorage.app",
  messagingSenderId: "971980525975",
  appId: "1:971980525975:web:70965b2e35dd235a15f4d2"
}

export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)

export default {firebaseApp, db}
