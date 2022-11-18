import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_Config } from "./firebaseConfig";

const firebaseConfig = firebase_Config;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, "test@test2533.com", "qwerty123").then(
//   console.log("made new user")
// );
// console.log("hi from firebase");
export default app;
