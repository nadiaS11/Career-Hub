// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pXjBX89RnmIyzvCfpX_MJ2Auac4xobo",
  authDomain: "career-hub-authentication.firebaseapp.com",
  projectId: "career-hub-authentication",
  storageBucket: "career-hub-authentication.appspot.com",
  messagingSenderId: "816468391048",
  appId: "1:816468391048:web:69c69aeeba93f1d65bdb3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
