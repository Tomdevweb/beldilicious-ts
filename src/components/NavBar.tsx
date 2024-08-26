import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div>
        <p className="logo">BELDILICIOUS</p>

        <Link to="/cart" className="panier">
          Panier
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
