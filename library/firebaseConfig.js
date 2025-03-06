require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeNT_fD-ABHdNF3DGecOiN3Qs2zniyZY8",
  authDomain: "moneymoves-1baac.firebaseapp.com",
  projectId: "moneymoves-1baac",
  storageBucket: "moneymoves-1baac.firebasestorage.app",
  messagingSenderId: "1047791286298",
  appId: "1:1047791286298:web:e55ae9fd8cf031d9b839a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
