import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUhFO_RCnKv8koMgml2w3IqjMJ0Od-A0A",
  authDomain: "t-g-a-f.firebaseapp.com",
  projectId: "t-g-a-f",
  storageBucket: "t-g-a-f.appspot.com",
  messagingSenderId: "626106133442",
  appId: "1:626106133442:web:e3f6cf14ac2e3c85a9445b",
  measurementId: "G-SVG7DREFVF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;