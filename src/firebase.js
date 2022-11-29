// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBde7GlXVf2_Jo18OajXwgkOySa3543uQU",
    authDomain: "netflix-react-clone-14dab.firebaseapp.com",
    projectId: "netflix-react-clone-14dab",
    storageBucket: "netflix-react-clone-14dab.appspot.com",
    messagingSenderId: "781496191349",
    appId: "1:781496191349:web:ae9661df43d027c1882b3c"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APP_MOVIE_API_KEY,
//     authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER,
//     appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
// };




