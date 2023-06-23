import React, { useState, useEffect } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  const products = props.products;

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterByCategory = (category) => {
    if (!category) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <div>
        <button className="buttons" onClick={() => filterByCategory()}>
          All Categories
        </button>
        <button onClick={() => filterByCategory("clothing")}>Clothing</button>
        <button onClick={() => filterByCategory("food")}>Food</button>
        <button onClick={() => filterByCategory("accessories")}>
          Accessories
        </button>
        <button onClick={() => filterByCategory("tech")}>Tech</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img className="Image" src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
