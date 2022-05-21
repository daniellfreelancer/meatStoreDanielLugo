// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDvQcoBFSpp5rWe0e9WOOqpFEuuecAgWJU",
  authDomain: "proyecto-meatstore.firebaseapp.com",
  projectId: "proyecto-meatstore",
  storageBucket: "proyecto-meatstore.appspot.com",
  messagingSenderId: "26324956126",
  appId: "1:26324956126:web:7daaf79503e33c61ece34f",
  measurementId: "G-MFQZDS0THS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)