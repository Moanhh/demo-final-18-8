// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8-NHAZwxeOtWgGt7NZP18PdaPjTVYHk8",
  authDomain: "fir-final-jsa23.firebaseapp.com",
  databaseURL: "https://fir-final-jsa23-default-rtdb.firebaseio.com",
  projectId: "fir-final-jsa23",
  storageBucket: "fir-final-jsa23.appspot.com",
  messagingSenderId: "759059436523",
  appId: "1:759059436523:web:f0acaaed49221b28f8ffae",
  measurementId: "G-NGR5RR9YW4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const analytics = getAnalytics(app);
const database = getDatabase(app);


export {auth};
export default database ;