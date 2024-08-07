import { createUserWithEmailAndPassword, updateProfile, User, UserCredential } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import { auth } from "../../firebaseConfig";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("----AUTH----", auth);

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
    <div className="signup">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <div className="signup__separator__container">
        <div className="signup__separator"></div>
        <div className="signup__separator__text">
          <span>OU</span>
        </div>
        <div className="signup__separator"></div>
      </div>
    </div>
  );
};

export default Signup;
