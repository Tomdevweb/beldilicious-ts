import { EmailAuthProvider, GoogleAuthProvider, signOut, UserCredential } from "firebase/auth";

import "firebaseui/dist/firebaseui.css";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import "./auth.css";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import logo from "../../assets/BlueWave2.png";
import { loginUser, setLoading } from "../../features/authSlice";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Auth: React.FC = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
