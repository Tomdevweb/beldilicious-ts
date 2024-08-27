import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "../types/types";

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <Link className="card" to={`/restaurant/${restaurant.id}`}>
      <Card hoverable>
        <Meta title={restaurant.name} description={restaurant.description} />
        <span>{restaurant.city}</span>
        <span>{restaurant.address}</span>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
