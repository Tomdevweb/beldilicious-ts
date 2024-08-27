/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import logo from "../assets/logo.png";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../styles/auth.scss";

const Auth: React.FC = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <main className="auth">
      <div className="auth__left">
        <img src={logo} alt="logo" />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                <span>Don't have an account?</span>{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                <span>Have an account?</span>{" "}
                <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Auth;
