import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import emailIcon from "../assets/email-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import passwordIcon from "../assets/password-icon.svg";
import visibilityOffIcon from "../assets/visibility-off.svg";
import visibilityOnIcon from "../assets/visibility-on.svg";
import { auth } from "../firebaseConfig";
import { useTogglePassword } from "../hooks/useTogglePassword";
import "../styles/login-signup-form.scss";
import { handleGoogleLogin } from "../utils/handleGoogleLogin";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { shown, ToggleShowPassword } = useTogglePassword();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="form">
      <div className="form__group">
        <p className="form__title">
          Welcome back! <br />
          Please login to your account
        </p>
        <div className="form__field">
          <div className="icon icon--email">
            <img src={emailIcon} alt="" />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="form__field">
          <div className="icon icon--password">
            <img src={passwordIcon} alt="" />
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={shown ? "password" : "text"}
            placeholder="Password"
            value={password}
          />
          {shown ? (
            <span
              onClick={ToggleShowPassword}
              className="icon icon--password-visibility"
            >
              <img src={visibilityOffIcon} alt="password icon" />
            </span>
          ) : (
            <span
              onClick={ToggleShowPassword}
              className="icon icon--password-visibility"
            >
              <img src={visibilityOnIcon} alt="password icon" />
            </span>
          )}
        </div>

        <button onClick={handleLogin}>Login</button>

        <div className="form__separator-container">
          <div className="form__separator"></div>
          <div className="form__separator__text">
            <span>OR</span>
          </div>
          <div className="form__separator"></div>
        </div>

        <div className="form__google">
          <button onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="" /> Connect with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
