// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-eT2zkJOt6UBjOUWu3yMcLrFzdKayrs",
  authDomain: "smart-study-scheduler-44318.firebaseapp.com",
  projectId: "smart-study-scheduler-44318",
  storageBucket: "smart-study-scheduler-44318.firebasestorage.app",
  messagingSenderId: "297129328785",
  appId: "1:297129328785:web:293838faa1f9fe42253f30",
  measurementId: "G-6KTP7LKF3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




//npm install -g firebase-tools