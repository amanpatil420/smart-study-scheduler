// firebase/config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf-eT2zkJOt6UBjOUWu3yMcLrFzdKayrs",
  authDomain: "smart-study-scheduler-44318.firebaseapp.com",
  projectId: "smart-study-scheduler-44318",
  storageBucket: "smart-study-scheduler-44318.appspot.com",
  messagingSenderId: "297129328785",
  appId: "1:297129328785:web:293838faa1f9fe42253f30",
  measurementId: "G-6KTP7LKF3S",
};

// ✅ Fix: Prevent duplicate Firebase App initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
