import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import locationIcon from "../assets/location-icon.svg";
import RestaurantCard from "../components/RestaurantCard";
import { logoutUser } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import "../styles/home.scss";
import NavBar from "../components/NavBar";
import { Restaurant } from "../types/types";

// TODO
const restoFromState: Restaurant[] = [];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState<Restaurant[]>(
    []
  );

  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  // Faire un fetch pour evolution du code si on branche de la vraie data. FetchRestaurant / Product (faire un loading 1 sec)

  const handleSearch = () => {
    if (searchRestaurant === "") {
      setFilteredRestaurant(restoFromState);
    } else {
      const filteredRestaurantByCity = restoFromState.filter((restaurant) =>
        restaurant.city
          .toLocaleLowerCase()
          .includes(searchRestaurant.toLocaleLowerCase())
      );
      console.log(filteredRestaurantByCity);
      setFilteredRestaurant(filteredRestaurantByCity);
    }
  };
  // Effect triggered when search change
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [searchRestaurant]);

  // TODO On mount: fetch restaurants

  return (
    <div>
      <div className="header-container">
        <NavBar />
        <div className="header">
          <h1 className="header-title">
            Your favorites local food delivered to your door
          </h1>
          <div className="search-container">
            <div className="search-box">
              <img
                src={locationIcon}
                alt="location icon"
                className="location-icon"
              />
              <input
                type="text"
                id="search-input"
                placeholder="Find a restaurant in your city..."
                onChange={(e) => setSearchRestaurant(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleLogOut}>LogOut</button>
      <div className="cards-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
