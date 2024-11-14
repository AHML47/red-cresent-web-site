// Import the functions you need from the SDKs you need

//npm install firebase
//npm install --save-dev @types/firebase


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
export const firebaseConfig = {
  apiKey: "AIzaSyDNu81uJsXYQuIIaBrC0hnQp_JF32Voox8",
  authDomain: "red-cresent-web-site.firebaseapp.com",
  projectId: "red-cresent-web-site",
  storageBucket: "red-cresent-web-site.appspot.com",
  messagingSenderId: "416474950582",
  appId: "1:416474950582:web:a014d5f96de5a710876f17",
  measurementId: "G-5B64VJYEH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);