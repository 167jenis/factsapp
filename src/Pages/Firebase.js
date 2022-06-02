import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFHxtxSBJ2LxCSGf9JxqVj0iFf8_X1LMA",
  authDomain: "reactapp-9f816.firebaseapp.com",
  projectId: "reactapp-9f816",
  storageBucket: "reactapp-9f816.appspot.com",
  messagingSenderId: "673874543618",
  appId: "1:673874543618:web:3084446247b998a0e5931b",
  measurementId: "G-96BL0XLK7P",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dp = getFirestore(app);
const storage = getStorage();

export { db, storage, dp };
