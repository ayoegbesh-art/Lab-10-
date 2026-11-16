// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZjkz2mgx-PZ4EhwgF21Wx8xDAgH7VA8o",
  authDomain: "samplestorage-ayo123.firebaseapp.com",
  projectId: "samplestorage-ayo123",
  storageBucket: "samplestorage-ayo123.firebasestorage.app",
  messagingSenderId: "1089999368964",
  appId: "1:1089999368964:web:54ff7b74dc307289c91651",
  measurementId: "G-796GNS66B8"
};

// Start Firebase
const app = initializeApp(firebaseConfig);

// Get the Firestore database and export it so other files can use it
export const db = getFirestore(app);
export const auth = getAuth(app);
