import React, { useState } from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../data/restaurants.json";
import { Segmented } from "antd";
import "../styles/restaurant.scss";
import { Product } from "../types/types";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import NavBar from "../components/NavBar";

const Restaurant: React.FC = () => {
  const param = useParams();
  const restaurant = restaurantsData.find(
    (restaurant) => restaurant.id === param.id
  );
  const [selectedSegment, setSelectedSegment] = useState("Entrées");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProductInModal, setCurrentProductInModal] =
    useState<Product | null>(null);

  const handleSegmentChange = (value: string) => {
    setSelectedSegment(value);
  };

  const { starters, maincourses, desserts, drinks } = restaurant?.menu ?? {};
  // segmentMap est un objet où chaque clé est un nom de segment (comme "Entrées")
  // et chaque valeur est un tableau d'éléments de menu (Product[]).
  // Déclare segmentMap avec des valeurs potentiellement undefined ou un tableau de Product
  const segmentMap: { [key: string]: Product[] | undefined } = {
    Entrées: starters,
    Plats: maincourses,
    Desserts: desserts,
    Boissons: drinks,
  };

  // Accès aux valeurs de l'objet segmentMap via la clé dynamique selectedSegment.
  // On accède au tableau d'éléments de menu correspondant au segment sélectionné.
  const filteredProducts = segmentMap[selectedSegment];

  const openProductModal = (product: Product) => {
    setCurrentProductInModal(product);
    setIsModalVisible(true);
  };

  const closeProductModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="restaurant-main-container">
      <NavBar />
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
            <ProductCard
              product={product}
              onShowModal={() => openProductModal(product)}
            />
          </div>
        ))}
        {isModalVisible && currentProductInModal !== null && (
          <ProductModal
            product={currentProductInModal}
            closeModal={closeProductModal}
          />
        )}
      </div>
    </div>
  );
};

export default Restaurant;
