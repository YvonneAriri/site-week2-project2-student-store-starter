import * as React from "react";

import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView(props) {
  const {
    product,
    productId,
    quantity,
    handleAddItemToCart,
    handleRemoveItemFromCart,
  } = props;

  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        productId={product.id}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        product={product}
        showDescription={true}
      />
    </div>
  );
}
