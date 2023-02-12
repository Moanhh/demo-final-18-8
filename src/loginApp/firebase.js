// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import "firebase/auth"

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';
import {collection} from 'firebase/firestore'

import {getFirestore} from "firebase/firestore"
// import {getStorage} from "firebase/storage"


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

// const storage = getStorage(app)

// const analytics = getAnalytics(app);

export default app 

export const db = getFirestore(app);
export const auth = getAuth(app);
export const users = collection(db, "users");

