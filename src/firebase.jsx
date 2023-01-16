
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDc-Fji0pb4H-NIQgPxrQt-alWLuTLDchw",
  authDomain: "login-auth-c8514.firebaseapp.com",
  projectId: "login-auth-c8514",
  storageBucket: "login-auth-c8514.appspot.com",
  messagingSenderId: "242486174609",
  appId: "1:242486174609:web:94872d5068eccf6edc7030",
  measurementId: "G-GWWNYT65FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app