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
    <Card hoverable onClick={onShowModal}>
      <Meta title={product.name} />
      <span>{product.price}</span>
    </Card>
  );
};

export default ProductCard;
