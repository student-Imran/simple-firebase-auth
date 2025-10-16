// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9TT4QH4ChR64JfQ_Y0C3gaZ7w_sRYLRM",
  authDomain: "simple-firebase-auth-65383.firebaseapp.com",
  projectId: "simple-firebase-auth-65383",
  storageBucket: "simple-firebase-auth-65383.firebasestorage.app",
  messagingSenderId: "923496206169",
  appId: "1:923496206169:web:b594ebca7a3eeb094b4648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);