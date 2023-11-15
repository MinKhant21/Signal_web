import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth}  from 'firebase/auth'
const firebaseConfig = {
     apiKey: "AIzaSyA3NnJPDwwbQ4j0iQYX21f05XIuMUAWwyM",
     authDomain: "signal-app-d6e5e.firebaseapp.com",
     databaseURL: "https://signal-app-d6e5e-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "signal-app-d6e5e",
     storageBucket: "signal-app-d6e5e.appspot.com",
     messagingSenderId: "105066854559",
     appId: "1:105066854559:web:cce233322205915eb94aaa",
     measurementId: "G-8NX496B71T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db,auth}