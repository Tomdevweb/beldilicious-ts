import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logoutUser } from "../features/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Home: React.FC = () => {
  // const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

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
