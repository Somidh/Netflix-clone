// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
// appId: process.env.REACT_APP_FIREBASE_APP_ID

// REACT_APP_FIREBASE_API_KEY: AIzaSyBde7GlXVf2_Jo18OajXwgkOySa3543uQU
// REACT_APP_FIREBASE_AUTH_DOMAIN: netflix-react-clone-14dab.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID: netflix-react-clone-14dab
// REACT_APP_FIREBASE_STORAGE_BUCKET: netflix-react-clone-14dab.appspot.com
// REACT_APP_FIREBASE_SENDER: 781496191349
// REACT_APP_FIREBASE_APP_ID: 1:781496191349:web:ae9661df43d027c1882b3c

