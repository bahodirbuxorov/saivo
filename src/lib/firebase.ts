// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgZIofZOCIiUy9_de76YC9887WWY4kfno",
  authDomain: "finance-uz.firebaseapp.com",
  databaseURL: "https://finance-uz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "finance-uz",
  storageBucket: "finance-uz.appspot.com",
  messagingSenderId: "533618721067",
  appId: "1:533618721067:web:6a27f0d415cea5e085056e",
  measurementId: "G-T7BJ96H3EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
export const db = getFirestore(app);
export { analytics };
export default app;