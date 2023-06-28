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
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="product-card" key={productId}>
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
              incrementHandler();
              handleAddItemToCart(productId);
            }}
          >
            <i className="material-icons">add</i>
          </button>
          {counter > 0 && <p>{counter}</p>}
          <button
            onClick={() => {
              decrementHandler();
              handleRemoveItemFromCart(productId);
            }}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
      </div>
    </div>
  );
}
