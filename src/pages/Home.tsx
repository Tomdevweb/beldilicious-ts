import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import locationIcon from "../assets/location-icon.svg";
import RestaurantCard from "../components/RestaurantCard";
import { logoutUser } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import "../styles/home.scss";
import NavBar from "../components/NavBar";
import { Restaurant } from "../types/types";
import { fetchRestaurants } from "../features/restaurants/fetchRestaurants";

// TODO
localStorage.clear();
const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { restaurants, loading, error } = useAppSelector(
    (state) => state.restaurants
  );

  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState<Restaurant[]>(
    []
  );

  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleSearch = () => {
    if (searchRestaurant === "") {
      setFilteredRestaurant(restaurants);
    } else {
      const filteredRestaurantByCity = restaurants.filter((restaurant) =>
        restaurant.city
          .toLocaleLowerCase()
          .includes(searchRestaurant.toLocaleLowerCase())
      );
      setFilteredRestaurant(filteredRestaurantByCity);
    }
  };
  // Effect triggered when search change
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [searchRestaurant, restaurants]);

  // On mount: fetch restaurants
  useEffect(() => {
    dispatch(fetchRestaurants());
    // eslint-disable-next-line
  }, []);

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
        {loading && <span>Loading...</span>}
        {error?.message && <span>{error.message}</span>}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
