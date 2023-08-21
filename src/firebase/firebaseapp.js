// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlcxtBYpgp-mcRhAqao6dRJlzZQasgIyo",
  authDomain: "cryptoinfo-67a48.firebaseapp.com",
  projectId: "cryptoinfo-67a48",
  storageBucket: "cryptoinfo-67a48.appspot.com",
  messagingSenderId: "738952347763",
  appId: "1:738952347763:web:3287c49a85aab2a28c6a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);