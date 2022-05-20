// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTeJTSWry0Fi082-YHKsAEtPuUFP7hIok",
  authDomain: "star-d26ae.firebaseapp.com",
  databaseURL: "https://star-d26ae-default-rtdb.firebaseio.com",
  projectId: "star-d26ae",
  storageBucket: "star-d26ae.appspot.com",
  messagingSenderId: "482054862237",
  appId: "1:482054862237:web:391abba4c43174f16c2b74",
  measurementId: "G-ZKF7KTPHH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);