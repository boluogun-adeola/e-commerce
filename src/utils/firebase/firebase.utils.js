import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWT0QlLFzJYi7wjPVtSEJMbd_IL1lj8z0",
  authDomain: "rolodex-clothing.firebaseapp.com",
  projectId: "rolodex-clothing",
  storageBucket: "rolodex-clothing.appspot.com",
  messagingSenderId: "792563824685",
  appId: "1:792563824685:web:2d55012e32d034f58ea0a4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
