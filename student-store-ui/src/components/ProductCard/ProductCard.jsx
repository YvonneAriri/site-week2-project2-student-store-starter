import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) => {
  const { name, price, description, image } = product;

  const handleAddToCart = () => {
    handleAddItemToCart(productId);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemToCart(productId);
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{formatPrice(price)}</p>
      {showDescription && <p className="product-description">{description}</p>}
      <div className="quantity-controls">
        <button className="add" onClick={handleAddToCart}>
          Add
        </button>
        <button className="remove" onClick={handleRemoveFromCart}>
          Remove
        </button>
      </div>
      {quantity > 0 && <p className="product-quantity">Quantity: {quantity}</p>}
    </div>
  );
};

export default ProductCard;
