import React, { useState, useEffect } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  const {
    products,
    shoppingCart,
    isFetching,
    handleAddItemToCart,
    handleRemoveItemFromCart,
  } = props;

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("");
  const [showCategories, setShowCategories] = useState(true);

  const filterByCategory = (category) => {
    if (!category) {
      setFilteredProducts(products);
      setActiveCategory("all");
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <div className="btn">
        <i
          className="material-icons"
          onClick={() => {
            setShowCategories(!showCategories);
          }}
        >
          menu
        </i>
        {showCategories ? (
          <>
            <button
              className={`category-btn ${
                activeCategory === "all" ? "active-btn" : ""
              }`}
              onClick={() => filterByCategory()}
            >
              All Categories
            </button>
            <button
              className={`category-btn ${
                activeCategory === "clothing" ? "active-btn" : ""
              }`}
              onClick={() => filterByCategory("clothing")}
            >
              Clothing
            </button>
            <button
              className={`category-btn ${
                activeCategory === "food" ? "active-btn" : ""
              }`}
              onClick={() => filterByCategory("food")}
            >
              Food
            </button>
            <button
              className={`category-btn ${
                activeCategory === "accessories" ? "active-btn" : ""
              }`}
              onClick={() => filterByCategory("accessories")}
            >
              Accessories
            </button>
            <button
              className={`category-btn ${
                activeCategory === "tech" ? "active-btn" : ""
              }`}
              onClick={() => filterByCategory("tech")}
            >
              Tech
            </button>
          </>
        ) : null}
      </div>
      <p>about us</p>
      <div className="product-grid">
        {isFetching ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          filteredProducts?.map((product) => {
            const productItem = shoppingCart.find(
              (item) => item.itemId === product.id
            );
            const quantity = productItem?.quantity ?? 0;

            return (
              <ProductCard
                key={product.id}
                quantity={quantity}
                productId={product.id}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                product={product}
                showDescription={false}
              />
            );
          })
        )}
      </div>
    </>
  );
}
