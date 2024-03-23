// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "insightful-writes-blog.firebaseapp.com",
  projectId: "insightful-writes-blog",
  storageBucket: "insightful-writes-blog.appspot.com",
  messagingSenderId: "759023886715",
  appId: "1:759023886715:web:3ce3798bf76ce3bedbddde",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
