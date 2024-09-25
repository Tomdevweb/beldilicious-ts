import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Product } from "../types/types";

type Props = {
  product: Product;
  onShowModal: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onShowModal }) => {
  return (
    <Card hoverable onClick={onShowModal} className="product-card">
      <Meta
        title={product.name}
        description={
          <div className="product-details">
            <p className="product-description">{product.description}</p>
            <span>{product.price} €</span>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
