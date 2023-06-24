import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductGrid(props) {
  const {
    product,
    productId,
    quantity,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    showDescription,
  } = props;

  return (
    <div className="layout" key={productId}>
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img className="Image" src={product.image} alt={product.name} />
        </Link>
      </div>

      <p>{product.name}</p>
      <p>${product.price}</p>
      <div className="addbtn">
        <button onClick={() => handleAddItemToCart(productId)}>+</button>
        <button onClick={() => handleRemoveItemFromCart(productId)}>-</button>
      </div>
    </div>
  );
}
