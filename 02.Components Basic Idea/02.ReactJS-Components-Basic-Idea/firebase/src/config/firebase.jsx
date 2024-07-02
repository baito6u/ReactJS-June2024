// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBt9WHFAPz_zzr2fTBj5dTZQd04YWHMdU",
  authDomain: "expense-tracker-db567.firebaseapp.com",
  projectId: "expense-tracker-db567",
  storageBucket: "expense-tracker-db567.appspot.com",
  messagingSenderId: "1073157256211",
  appId: "1:1073157256211:web:73ece47e8402f7aead3be6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
