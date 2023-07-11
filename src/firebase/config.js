// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlb-V3A1UsW50AJ_z3d6QMBYG1HvfVH0Q",
  authDomain: "react-cursos-cf820.firebaseapp.com",
  projectId: "react-cursos-cf820",
  storageBucket: "react-cursos-cf820.appspot.com",
  messagingSenderId: "384753829068",
  appId: "1:384753829068:web:3a93b415188d97dbb16e69",
  measurementId: "G-6G3CNRLB52"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
const analytics = getAnalytics(FirebaseApp);