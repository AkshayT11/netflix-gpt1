// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt-Kq_03zykZggyRU8jH9R8M0cI_diKKY",
  authDomain: "netflixgpt1-6ef8d.firebaseapp.com",
  projectId: "netflixgpt1-6ef8d",
  storageBucket: "netflixgpt1-6ef8d.appspot.com",
  messagingSenderId: "908890966331",
  appId: "1:908890966331:web:9650a27fc2a82a82b04f1e",
  measurementId: "G-J9DX5WLMHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();