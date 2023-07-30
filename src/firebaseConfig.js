import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAuIJr0P7R5R1CfJrJq5krVhyvTWnqIWR8",
    authDomain: "airforceone-fb98e.firebaseapp.com",
    projectId: "airforceone-fb98e",
    storageBucket: "airforceone-fb98e.appspot.com",
    messagingSenderId: "38527419444",
    appId: "1:38527419444:web:bb2e4f58d6953faa78f661"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);