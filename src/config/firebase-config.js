// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWKPlE-bbgkCr8Ut6-f5nHPDk13_AckZQ",
  authDomain: "expense-tracker-b5d89.firebaseapp.com",
  projectId: "expense-tracker-b5d89",
  storageBucket: "expense-tracker-b5d89.appspot.com",
  messagingSenderId: "438822907833",
  appId: "1:438822907833:web:0a97d7b098c473809c1068",
  measurementId: "G-3HQ4H48QDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const  provider = new GoogleAuthProvider()
export const db = getFirestore(app)
// const analytics = getAnalytics(app);