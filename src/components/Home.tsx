import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logoutUser } from "../features/authSlice";
import { auth } from "../firebaseConfig";

const Home: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const username = user?.displayName;
  const dispatch = useAppDispatch();
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (!alertShown) {
      alert(`Welcome to your BlueWave Tracker Dashboard ${username} !`);
      setAlertShown(true);
    }
  }, [alertShown, username]);

  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default Home;
