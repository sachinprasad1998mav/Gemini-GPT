// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjhCOVNg_6IrJLgEfWilg2X5WhnSJf67M",
  authDomain: "gemini-gpt-cac11.firebaseapp.com",
  projectId: "gemini-gpt-cac11",
  storageBucket: "gemini-gpt-cac11.appspot.com",
  messagingSenderId: "388400696708",
  appId: "1:388400696708:web:714dd0ea4035db68c0a1d1",
  measurementId: "G-7V225CG2PL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
