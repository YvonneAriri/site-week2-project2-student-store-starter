import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

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
    <div className="product-card" key={productId}>
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img className="image" src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="details-section">
        <div className="name">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>

        <div className="buttons">
          <button onClick={() => handleAddItemToCart(productId)}>
            <i className="material-icons">add</i>
          </button>
          <button onClick={() => handleRemoveItemFromCart(productId)}>
            <i className="material-icons">remove</i>
          </button>
        </div>
      </div>
    </div>
  );
}
