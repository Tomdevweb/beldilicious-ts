import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import restaurantsData from "../assets/data/restaurants.json";
import locationIcon from "../assets/location-icon.svg";
import RestaurantCard from "../components/RestaurantCard";
import { logoutUser } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import "../styles/home.scss";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantsData);

  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleSearch = () => {
    if (searchRestaurant === "") {
      setFilteredRestaurant(restaurantsData);
    } else {
      const filteredRestaurantByCity = restaurantsData.filter((restaurant) =>
        restaurant.city.toLocaleLowerCase().includes(searchRestaurant.toLocaleLowerCase())
      );
      console.log(filteredRestaurantByCity);
      setFilteredRestaurant(filteredRestaurantByCity);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchRestaurant]);

  return (
    <div>
      <div className="header-container">
        <NavBar />
        <div className="header">
          <h1 className="header-title">Your favorites local food delivered to your door</h1>
          <div className="search-container">
            <div className="search-box">
              <img src={locationIcon} alt="location icon" className="location-icon" />
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
