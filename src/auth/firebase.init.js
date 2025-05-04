// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdeg7jlGgeAPWXVXDlpe5z7sv-LZorSeE",
  authDomain: "teeth-wizerd-ca87d.firebaseapp.com",
  projectId: "teeth-wizerd-ca87d",
  storageBucket: "teeth-wizerd-ca87d.firebasestorage.app",
  messagingSenderId: "988496473569",
  appId: "1:988496473569:web:9ad1755387b012ad6af6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);