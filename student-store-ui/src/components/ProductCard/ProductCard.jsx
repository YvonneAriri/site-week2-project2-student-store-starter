import "./ProductCard.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function ProductCard(props) {
  const {
    product,
    productId,
    quantity,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    showDescription,
  } = props;

  return (
    <div
      className={`product-card ${showDescription ? "description" : ""}`} // add styling when showDescription is true
      key={productId}
    >
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img className="image" src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="details-section">
        <div className="product-name">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>

        <div className="buttons">
          <button
            onClick={() => {
              handleAddItemToCart(productId);
            }}
          >
            <i className="material-icons">add</i>
          </button>
          {quantity > 0 && (
            <div>
              <p className="counter">{quantity}</p>
            </div>
          )}

          <button
            onClick={() => {
              handleRemoveItemFromCart(productId);
            }}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
      </div>
      {showDescription && product.description}
    </div>
  );
}
