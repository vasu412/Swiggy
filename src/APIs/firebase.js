// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc5RA9OLGhkQrKMN2lGn7ZI-vuptgYE9s",
  authDomain: "swigggyyyyyy.firebaseapp.com",
  projectId: "swigggyyyyyy",
  storageBucket: "swigggyyyyyy.appspot.com",
  messagingSenderId: "140389564813",
  appId: "1:140389564813:web:d830d98a56a494e090bdc4",
  measurementId: "G-0LPJS761RJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
