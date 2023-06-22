import * as React from "react";
import "./ProductCard.css";
export default function ProductCard() {
  return (
    <div className="product-card">
      <img src="image-url" alt="Product" />
      <h3>Product Title</h3>
      <p>Product Description</p>
      <button>Add to Cart</button>
    </div>
  );
}
