// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_cSynvsusZoHjb8tB72u1imWFIpeV3hU",
  authDomain: "tripadvisor-rsoni2843.firebaseapp.com",
  projectId: "tripadvisor-rsoni2843",
  storageBucket: "tripadvisor-rsoni2843.appspot.com",
  messagingSenderId: "600486332054",
  appId: "1:600486332054:web:a4b77e729f5d8dcb00a4b7",
  measurementId: "G-J8XQYP8QJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleAuth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() ; 
export const facebookProvider = new FacebookAuthProvider();




// const analytics = getAnalytics(app);