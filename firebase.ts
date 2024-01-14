import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByXlsZscxs7HpIpjT52ZNiZZCOQipJc08",
  authDomain: "angkringan99-9282e.firebaseapp.com",
  projectId: "angkringan99-9282e",
  storageBucket: "angkringan99-9282e.appspot.com",
  messagingSenderId: "111957015285",
  appId: "1:111957015285:web:c07e2abf60af37c12a23bc",
  measurementId: "G-CEV71ZZY4W"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;
