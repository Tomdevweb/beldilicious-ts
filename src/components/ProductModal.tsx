import React, { useState } from "react";
import { Product } from "../types/types";
import { addToCart } from "../features/CartSlice";
import { useAppDispatch } from "../app/hooks";

type ProductModalProps = {
  product: Product;
  closeModal: () => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, closeModal }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  const addProductToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    closeModal();
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="modal-container">
      <div className="product-overlay" onClick={closeModal}></div>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <div className="modal-product-img">
          {/* <img src={getProductImageUrl(product)} alt="" /> */}
        </div>
        <div className="modal-content">
          <div className="modal-product-details">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price} €</p>
          </div>
        </div>
        <div className="modal-add-product-container">
          <div className="modal-input-container">
            <button className="modal-quantity-btn" onClick={decreaseQuantity}>
              -
            </button>
            <input
              className="modal-quantity-input"
              type="text"
              value={quantity}
              readOnly
            />
            <button className="modal-quantity-btn" onClick={increaseQuantity}>
              +
            </button>
          </div>
          <div className="modal-add-to-cart-btn">
            <button onClick={addProductToCart}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
