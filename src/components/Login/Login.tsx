import { useState } from "react";
import "../../styles/login-signup-form.scss";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import emailIcon from "../../assets/email-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="form">
      <div className="form__group">
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
            type="password"
            placeholder="Password"
            value={password}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>

      <div className="form__separator-container">
        <div className="form__separator"></div>
        <div className="form__separator__text">
          <span>OU</span>
        </div>
        <div className="form__separator"></div>
      </div>
    </div>
  );
};

export default Login;
