// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFftrgWHGIdjTHGhnJ2jQb2vBLP25Mg7Q",
  authDomain: "netflixgpt-c71c4.firebaseapp.com",
  projectId: "netflixgpt-c71c4",
  storageBucket: "netflixgpt-c71c4.appspot.com",
  messagingSenderId: "750363860147",
  appId: "1:750363860147:web:9768822aab06309e9064c6",
  measurementId: "G-6FKNF3BWF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
