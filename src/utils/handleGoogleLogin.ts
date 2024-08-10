import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential?.accessToken;
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  } catch (error: any) {
    // Handle Errors here.
    console.log(error.code);
    console.log(error.message);
    // The email of the user's account used.
    console.log(error.customData.email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  }
};
