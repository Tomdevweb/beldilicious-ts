import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import { Restaurant } from "../utils/types";

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
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
