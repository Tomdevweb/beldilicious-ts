import React from "react";
import Auth from "./components/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
