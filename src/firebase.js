// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase konfigurace
const firebaseConfig = {
    apiKey: "AIzaSyCVs6h1Q-TOmOW1NLDhTzwUbpRgAibNftY",
    authDomain: "harry-potter-kviz.firebaseapp.com",
    projectId: "harry-potter-kviz",
    storageBucket: "harry-potter-kviz.firebasestorage.app",
    messagingSenderId: "573545816735",
    appId: "1:573545816735:web:e266770397a72fe53838aa",
    measurementId: "G-8CHT5Y9RZQ"
};

// Inicializace Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

