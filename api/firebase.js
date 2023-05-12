// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHePhYNqZqS3M5IXHjHKtGIu8eYoGdSsk",
  authDomain: "scrum-value-visualization.firebaseapp.com",
  projectId: "scrum-value-visualization",
  storageBucket: "scrum-value-visualization.appspot.com",
  messagingSenderId: "324884498220",
  appId: "1:324884498220:web:2c5f6c9a665741a081ce89",
  measurementId: "G-MNLZJBV3RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);