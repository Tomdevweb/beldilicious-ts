import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./Auth/Authentication";
import Home from "./Home";
import { useAppSelector } from "../app/hooks";

const Router: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
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
