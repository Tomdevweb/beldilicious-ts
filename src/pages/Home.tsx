import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import restaurantsData from "../assets/data/restaurants.json";
import locationIcon from "../assets/location-icon.svg";
import RestaurantCard from "../components/RestaurantCard";
import { logoutUser } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import "../styles/home.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchRestaurant, setSearchRestaurant] = useState("");
  // on dit que "filteredRestaurant" est du même type que "restaurantsData", c'est-à-dire un tableau d'objets restaurants.
  const [filteredRestaurant, setFilteredRestaurant] = useState<typeof restaurantsData>([]);

  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleSearch = () => {
    const filteredRestaurantByCity = restaurantsData.filter((restaurant) =>
      restaurant.city.toLocaleLowerCase().includes(searchRestaurant.toLocaleLowerCase())
    );
    console.log(filteredRestaurantByCity);

    setFilteredRestaurant(filteredRestaurantByCity);
  };
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <h1 className="header-title">Your favorites local food delivered to your door</h1>
          <div className="search-container">
            <label htmlFor="search-input">Find the best restaurants close to you</label>
            <div className="search-box">
              <img src={locationIcon} alt="location icon" className="location-icon" />
              <input
                type="text"
                id="search-input"
                placeholder="Write your address"
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
