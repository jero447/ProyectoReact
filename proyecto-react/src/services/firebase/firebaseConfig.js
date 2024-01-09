
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyArThle-2LnrosdIgS7mDLup_z50IsgpOg",
  authDomain: "proyectoreact-2f9e1.firebaseapp.com",
  projectId: "proyectoreact-2f9e1",
  storageBucket: "proyectoreact-2f9e1.appspot.com",
  messagingSenderId: "486729109741",
  appId: "1:486729109741:web:0df2b17e7d3b8b599ffce4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)