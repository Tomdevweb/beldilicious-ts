import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Authentication";
import Home from "./Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
