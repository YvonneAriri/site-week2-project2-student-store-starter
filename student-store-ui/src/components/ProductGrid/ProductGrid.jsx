import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showDescription={false}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
