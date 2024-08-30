import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "../types/types";
import { useRestaurantImage } from "../hooks/useRestaurantImage";

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  // Change imageUrl logic if connected to a real backend
  const imageUrl = useRestaurantImage(restaurant.id);
  return (
    <Link className="card" to={`/restaurant/${restaurant.id}`}>
      <Card
        cover={
          <img
            src={imageUrl}
            alt=""
            style={{ width: "100%", borderRadius: "8px 8px 0px 0px" }}
          />
        }
        hoverable
      >
        <div>
          <Meta title={restaurant.name} description={restaurant.description} />
          <div>
            <span>{restaurant.address}, </span>
            <span style={{ fontWeight: "600" }}>{restaurant.city}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
