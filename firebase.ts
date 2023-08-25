// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEYaEWzgE9OufpoO_IuZV3jTpRz2z9akk",
  authDomain: "kocakmovie.firebaseapp.com",
  projectId: "kocakmovie",
  storageBucket: "kocakmovie.appspot.com",
  messagingSenderId: "266158729116",
  appId: "1:266158729116:web:08a16820a71293f3cb8a59",
  measurementId: "G-MEJ6FNKC7J"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()


export default app
export { auth, db}