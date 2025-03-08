import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the Auth module

const firebaseConfig = {
  apiKey: "AIzaSyCtCzlNfG_ywDu7PLNq8qm194iJbK0gcfE",
  authDomain: "rmhp-13282.firebaseapp.com",
  projectId: "rmhp-13282",
  storageBucket: "rmhp-13282.firebasestorage.app",
  messagingSenderId: "203520308743",
  appId: "1:203520308743:web:82c79a6a2ae7fa850d5ca2",
  measurementId: "G-HMYE0FJ8EY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };