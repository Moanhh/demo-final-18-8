// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import "firebase/auth"

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD7EGDyem1OkG445aU4g69dbL6gFvwB1k",
  authDomain: "flashcard-pj.firebaseapp.com",
  projectId: "flashcard-pj",
  storageBucket: "flashcard-pj.appspot.com",
  messagingSenderId: "428275635930",
  appId: "1:428275635930:web:529dbfd7f9c7cf3e4077e3"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);



export const auth = getAuth(app)
