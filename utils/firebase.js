// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBff1hCtTzw-ia4bO9cQ7Gf7XlYPP24tPg",
  authDomain: "mealdb-youdesire.firebaseapp.com",
  projectId: "mealdb-youdesire",
  storageBucket: "mealdb-youdesire.appspot.com",
  messagingSenderId: "11677212038",
  appId: "1:11677212038:web:be3cf3bfba511ce07ce007",
  measurementId: "G-TQVHZ0WVPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
