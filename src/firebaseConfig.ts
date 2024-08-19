import { FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyANrlxVkSUpCMaqTl_dHOeSGc58gq0vEWc",
  authDomain: "beldilicious.firebaseapp.com",
  projectId: "beldilicious",
  storageBucket: "beldilicious.appspot.com",
  messagingSenderId: "409572225225",
  appId: "1:409572225225:web:47bf2beee51d4204af9d18",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
