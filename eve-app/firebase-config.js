// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzx0sJdHrLPeTcnjIoSkVyBqHsyp2ZEE",
  authDomain: "eve-app-c101e.firebaseapp.com",
  projectId: "eve-app-c101e",
  storageBucket: "eve-app-c101e.appspot.com",
  messagingSenderId: "838605489329",
  appId: "1:838605489329:web:7fc4957523e00a32ae0e90",
  measurementId: "G-J69R5RFPS5",

  databaseURL: "https://eve-app-c101e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// const analytics = getAnalytics(app);