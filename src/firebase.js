// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsqHn-fjtjMVe5w8F2gm5oK_mDWL1QoQs",
  authDomain: "petproject-c2554.firebaseapp.com",
  projectId: "petproject-c2554",
  storageBucket: "petproject-c2554.appspot.com",
  messagingSenderId: "299993496777",
  appId: "1:299993496777:web:e272b579556dac0e6ea118",
  measurementId: "G-2536D6KR2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
