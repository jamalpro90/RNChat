// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfBhsxikA_Gyg_tIfk-S78mvB_lW5d2oM",
  authDomain: "react-native-chat-app-90.firebaseapp.com",
  projectId: "react-native-chat-app-90",
  storageBucket: "react-native-chat-app-90.appspot.com",
  messagingSenderId: "336865029476",
  appId: "1:336865029476:web:cc9ba16b0f6f12aae31e71",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
