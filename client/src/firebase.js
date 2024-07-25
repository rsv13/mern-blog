// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-41f0e.firebaseapp.com",
  projectId: "mern-blog-41f0e",
  storageBucket: "mern-blog-41f0e.appspot.com",
  messagingSenderId: "89983413974",
  appId: "1:89983413974:web:e78fcfdb865c6517f12377",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
