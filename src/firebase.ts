import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCK8dGtSBQ3Mjh_fr0w5NkaptmxaaKm8Ho",
  authDomain: "spit-king.firebaseapp.com",
  projectId: "spit-king",
  storageBucket: "spit-king.appspot.com",
  messagingSenderId: "981378759615",
  appId: "1:981378759615:web:2d3d59a4753acf4d46ff0a",
  measurementId: "G-TWEFS18HQT",
});

const db = getFirestore();

export default db;
