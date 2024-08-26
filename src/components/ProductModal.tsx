import React from "react";
import { Product } from "../utils/types";

type ProductModalProps = {
  product: Product;
  closeModal: () => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, closeModal }) => {
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
            {/* <p>{product.description}</p> */}
          </div>
        </div>
        <div className="modal-add-product-container">
          <div className="modal-input-container">
            <button className="modal-quantity-btn">-</button>
            <input className="modal-quantity-input" type="text" value={"1"} />
            <button className="modal-quantity-btn">+</button>
          </div>
          <div className="modal-add-to-cart-btn">
            <button>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
