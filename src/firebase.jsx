// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration object (replace with your own from the Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyA6trUJK-iPYTn_Zr-cLcFjPjIctLNJdPM",
  authDomain: "sign-project-b1285.firebaseapp.com",
  projectId: "sign-project-b1285",
  storageBucket: "sign-project-b1285.firebasestorage.app",
  messagingSenderId: "323325791223",
  appId: "1:323325791223:web:7f317d741e2cb7c11ebcf2",
  measurementId: "G-KVV43NV90Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
