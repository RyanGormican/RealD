// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase";
import getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr0ksOgdGzJ8v64uU3_HWMSOiDtg_qEME",
  authDomain: "realdiscuss-f9836.firebaseapp.com",
  projectId: "realdiscuss-f9836",
  storageBucket: "realdiscuss-f9836.appspot.com",
  messagingSenderId: "9005494487",
  appId: "1:9005494487:web:fe889c56c290e94c490092",
  measurementId: "G-XEKMS44HX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
