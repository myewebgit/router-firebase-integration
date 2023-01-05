// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADjYStSvfdDCnicYrF2i8DSayqLfIC9Y8",
  authDomain: "router-firebase-integrat-d3553.firebaseapp.com",
  projectId: "router-firebase-integrat-d3553",
  storageBucket: "router-firebase-integrat-d3553.appspot.com",
  messagingSenderId: "255937296368",
  appId: "1:255937296368:web:a39417c5a1aab01bc5cf35",
  measurementId: "G-EQET5Q2FSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;