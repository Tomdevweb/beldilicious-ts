import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser, setLoading } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import Authentication from "../pages/Authentication";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";
import { CustomUser } from "../types/types";

const Router: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const customUser: CustomUser = {
          uid: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
        };
        dispatch(loginUser(customUser));
        dispatch(setLoading(false));
      }
    });
    // eslint-disable-next-line
  }, []);

  // Don't render the router before redux-persist has rehydrated the store
  const rehydrated = useAppSelector((state) => state._persist.rehydrated);
  if (!rehydrated) {
    return <div>Loading app...</div>;
  }

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
