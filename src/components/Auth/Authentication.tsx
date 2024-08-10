import "firebaseui/dist/firebaseui.css";
import { useState } from "react";
import logo from "../../assets/BlueWave2.png";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./auth.css";

const Auth: React.FC = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <main className="auth">
      <div className="auth__left">
        <img src={logo} alt="logo" />
        <p>
          Real-time ocean updates and alerts. <br />
          Sign up now to stay informed and help preserve our oceans.
        </p>
      </div>

      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account? <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Already have an account? <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Auth;
