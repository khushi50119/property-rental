// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "rental-app-f0c1f.firebaseapp.com",
    projectId: "rental-app-245e0",
    storageBucket: "rental-app-245e0.appspot.com",
    messagingSenderId: "909931062575",
    appId: "1:909931062575:web:ad784feb03f88ca8f6edda"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
