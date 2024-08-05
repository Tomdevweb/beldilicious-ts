import { FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyC-C1OEjtP4RlIU9-Ixpx8gTfF9xlg8GSU",
  authDomain: "bluewave-tracker.firebaseapp.com",
  projectId: "bluewave-tracker",
  storageBucket: "bluewave-tracker.appspot.com",
  messagingSenderId: "575622740490",
  appId: "1:575622740490:web:c062e3259d3a254b253df3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
