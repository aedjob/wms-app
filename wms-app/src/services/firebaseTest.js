// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVft07frWVQoMdm9FiC1Smwrvk6mQfO8",
  authDomain: "wms-app-314f5.firebaseapp.com",
  projectId: "wms-app-314f5",
  storageBucket: "wms-app-314f5.appspot.com",
  messagingSenderId: "978905087583",
  appId: "1:978905087583:web:86b403240b86cf824be5ea"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);