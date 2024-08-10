import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import "../../styles/login-signup-form.scss";
import emailIcon from "../../assets/email-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("----AUTH----", auth);

  // Fonction createUser de Firebase
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });
    } catch (error: any) {
      console.log(error.code);
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
            type="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
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

export default Signup;
