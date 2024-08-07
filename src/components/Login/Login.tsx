import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
        value={password}
      />
      <button>Login</button>

      <div className="login__separator__container">
        <div className="login__separator"></div>
        <div className="login__separator__text">
          <span>OU</span>
        </div>
        <div className="login__separator"></div>
      </div>
    </div>
  );
};

export default Login;
