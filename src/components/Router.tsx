import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser, setLoading } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import Authentication from "./Auth/Authentication";
import Home from "./Home";
import { CustomUser } from "../utils/types";

const Router: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        const customUser: CustomUser = {
          uid: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
        };
        dispatch(loginUser(customUser));
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Authentication />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to={user ? "/home" : "/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
