// plugins/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRHsUJZhU00cza__D7M3pciruAyarv8iI",
  authDomain: "pirate-webb.firebaseapp.com",
  projectId: "pirate-webb",
  storageBucket: "pirate-webb.appspot.com",
  messagingSenderId: "212707065383",
  appId: "1:212707065383:web:da64e5594bfe49b7155802",
  measurementId: "G-YVCELF3H61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the auth and GoogleAuthProvider
export { auth, GoogleAuthProvider, signInWithPopup };
