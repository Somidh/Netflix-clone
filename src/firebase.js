// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


// apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
// authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
// projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
// storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER,
// appId: import.meta.env.VITE_APP_FIREBASE_APP_ID

// VITE_APP_FIREBASE_API_KEY: AIzaSyBde7GlXVf2_Jo18OajXwgkOySa3543uQU
// VITE_APP_FIREBASE_AUTH_DOMAIN: netflix-VITE-clone-14dab.firebaseapp.com
// VITE_APP_FIREBASE_PROJECT_ID: netflix-VITE-clone-14dab
// VITE_APP_FIREBASE_STORAGE_BUCKET: netflix-VITE-clone-14dab.appspot.com
// VITE_APP_FIREBASE_SENDER: 781496191349
// VITE_APP_FIREBASE_APP_ID: 1:781496191349:web:ae9661df43d027c1882b3c

