import { useEffect } from "react";
import { EmailAuthProvider, GoogleAuthProvider, UserCredential } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../firebaseConfig"; // Importez votre instance d'authentification
// import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/store";
import { loginUser, setLoading } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Initialize the FirebaseUI Widget using Firebase

    let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult: UserCredential) {
          // User successfully signed in.
          dispatch(loginUser(authResult.user));
          // navigate("/home");
          console.log(authResult);

          // utilise navigate au car la redirection de firebase redirige avant que l'etat redux soit mis à jour
          navigate("/home");

          // Return type determines whether we continue the redirect automatically or whether we leave that to developer to handle.
          return false;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          const loader = document.getElementById("loader");
          if (loader) {
            loader.style.display = "none";
          }
          dispatch(setLoading(false));
        },
      },
      // Will use popup for IDP Provider<s sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      // signInSuccessUrl: "/home",
      signInOptions: [GoogleAuthProvider.PROVIDER_ID, EmailAuthProvider.PROVIDER_ID],
      // Terms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  }, [dispatch, navigate]);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default Auth;
