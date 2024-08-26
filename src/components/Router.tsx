import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser, setLoading } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import { CustomUser } from "../types/types";
import Restaurant from "../pages/Restaurant";
import Cart from "../pages/Cart";

const Router: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

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
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Authentication />}
        />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/restaurant/:id"
          element={user ? <Restaurant /> : <Navigate to="/" />}
        />

        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to={user ? "/home" : "/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
