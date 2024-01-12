import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9vM3QMvvvso18xa8Di1Ghb2FGzjB1Hlw",
  authDomain: "instagram-a6cf8.firebaseapp.com",
  projectId: "instagram-a6cf8",
  storageBucket: "instagram-a6cf8.appspot.com",
  messagingSenderId: "388417471855",
  appId: "1:388417471855:web:2c6ef381bba5fe35ee149a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};