// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkiixPrsRbxF6vjmKxTQuFVfobxs7T6p4",
  authDomain: "netflixgpt-7a547.firebaseapp.com",
  projectId: "netflixgpt-7a547",
  storageBucket: "netflixgpt-7a547.appspot.com",
  messagingSenderId: "545329200828",
  appId: "1:545329200828:web:b326fed71d13e461439ab9",
  measurementId: "G-XTLKJJF2SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();