// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcTl-a71yoMXsjHaCYDnmLc1MWXCk0u_g",
  authDomain: "smart-deals-auth-e0a8c.firebaseapp.com",
  projectId: "smart-deals-auth-e0a8c",
  storageBucket: "smart-deals-auth-e0a8c.firebasestorage.app",
  messagingSenderId: "355886302396",
  appId: "1:355886302396:web:0d9a7ace72e9ad3e287cb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
