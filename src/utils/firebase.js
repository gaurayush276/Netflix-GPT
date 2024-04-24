// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWlH9NiyY8XD7M7Yvjq4S1cYCsMkHVh4c",
  authDomain: "netflex-project-e88e6.firebaseapp.com",
  projectId: "netflex-project-e88e6",
  storageBucket: "netflex-project-e88e6.appspot.com",
  messagingSenderId: "36384162686",
  appId: "1:36384162686:web:72d36a64c468119f67a92f",
  measurementId: "G-1J3EPL816H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export  const auth = getAuth()  ;