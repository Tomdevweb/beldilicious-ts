import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import emailIcon from "../../assets/email-icon.svg";
import googleIcon from "../../assets/google-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import visibilityOffIcon from "../../assets/visibility-off.svg";
import visibilityOnIcon from "../../assets/visibility-on.svg";
import { auth } from "../../firebaseConfig";
import { useTogglePassword } from "../../hooks/useTogglePassword";
import "../../styles/login-signup-form.scss";
import { handleGoogleLogin } from "../../utils/handleGoogleLogin";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { shown, ToggleShowPassword } = useTogglePassword();

  console.log("----AUTH----", auth);

  // Fonction createUser de Firebase
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });
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
        <div className="form__title">
          <h1>Create account</h1>
          <p>Get started with your free account</p>
        </div>

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
          <div className="icon icon--username">
            <img src={userIcon} alt="" />
          </div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            value={username}
          />
        </div>
        <div className="form__field">
          <div className="icon icon--username">
            <img src={passwordIcon} alt="" />
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={shown ? "password" : "text"}
            placeholder="Create a password"
            value={password}
          />
          {shown ? (
            <span onClick={ToggleShowPassword} className="icon icon--password-visibility">
              <img src={visibilityOffIcon} alt="password icon" />
            </span>
          ) : (
            <span onClick={ToggleShowPassword} className="icon icon--password-visibility">
              <img src={visibilityOnIcon} alt="password icon" />
            </span>
          )}
        </div>
        <button onClick={handleSignup}>Sign Up</button>
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

export default Signup;
