import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logoutUser } from "../features/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <nav className="nav">
      <div>
        <p className="logo">BELDILICIOUS</p>

        <Link to="/cart" className="panier">
          Panier
        </Link>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    </nav>
  );
};

export default NavBar;
