// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfhndpAU1UmtyTbwr2YilD0N6bll-hdJk",
  authDomain: "netflixgpt-8c638.firebaseapp.com",
  projectId: "netflixgpt-8c638",
  storageBucket: "netflixgpt-8c638.appspot.com",
  messagingSenderId: "792282045543",
  appId: "1:792282045543:web:1fb25f6a74f1427fcf08c2",
  measurementId: "G-0ZL0X6CZPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
