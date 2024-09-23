// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// For Firebase v9 (modular syntax)

const firebaseConfig = {
  apiKey: "AIzaSyDdGmNLHTby9dqSEB5oIMZjX-s8a_l2efQ",
  authDomain: "swiggggyyyyy.firebaseapp.com",
  projectId: "swiggggyyyyy",
  storageBucket: "swiggggyyyyy.appspot.com",
  messagingSenderId: "311238524619",
  appId: "1:311238524619:web:0a588e9f363e3720dea54e",
  measurementId: "G-PQJ9ZLWVFC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
