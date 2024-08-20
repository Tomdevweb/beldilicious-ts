import React, { useState } from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../assets/data/restaurants.json";
import { Segmented } from "antd";
import "../styles/restaurant.scss";

type MenuItem = {
  name: string;
  price: number;
};

const Restaurant = () => {
  const param = useParams();
  const restaurant = restaurantsData.find((restaurant) => restaurant.id === param.id);
  const [selectedSegment, setSelectedSegment] = useState("Entrées");

  const handleSegmentChange = (value: string) => {
    setSelectedSegment(value);
  };

  const { starters, maincourses, desserts, drinks } = restaurant?.menu ?? {};

  // segmentMap est un objet où chaque clé est un nom de segment (comme "Entrées")
  // et chaque valeur est un tableau d'éléments de menu (MenuItem[]).
  // Déclare segmentMap avec des valeurs potentiellement undefined ou un tableau de MenuItem
  const segmentMap: { [key: string]: MenuItem[] | undefined } = {
    Entrées: starters,
    Plats: maincourses,
    Desserts: desserts,
    Boissons: drinks,
  };

  // Accès aux valeurs de l'objet segmentMap via la clé dynamique selectedSegment.
  // On accède au tableau d'éléments de menu correspondant au segment sélectionné.
  const filteredProducts = segmentMap[selectedSegment];

  return (
    <div className="restaurant-main-container">
      <h1>{restaurant?.name}</h1>
      <p>{restaurant?.description}</p>
      <div>
        <Segmented<string>
          options={["Entrées", "Plats", "Desserts", "Boissons"]}
          defaultValue={"Entrées"}
          onChange={handleSegmentChange}
          block
        />
      </div>
      <div>
        {filteredProducts?.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p>{product.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
