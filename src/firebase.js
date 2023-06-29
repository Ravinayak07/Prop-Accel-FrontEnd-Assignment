// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7tWr0UhAVmNG1BQ8QyXaFwPGinae1cqc",
  authDomain: "prop-accel-frontend-assignment.firebaseapp.com",
  projectId: "prop-accel-frontend-assignment",
  storageBucket: "prop-accel-frontend-assignment.appspot.com",
  messagingSenderId: "664120569397",
  appId: "1:664120569397:web:501d2db4307a1d49ef4b7c",
  measurementId: "G-RG28H51T74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
