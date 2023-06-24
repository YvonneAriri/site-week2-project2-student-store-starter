import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";

import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  const { products, handleAddItemToCart, handleRemoveItemFromCart } = props;

  return (
    <>
      <div className="home">
        <Hero />
        <div className="container">
          <input type="text" className="search" placeholder="Search" />
          <i className="material-icons search-icon">search</i>

          <div className="help">
            <i style={{ color: "gray" }} className="material-icons">
              help
            </i>
            <p>Help</p>
          </div>
          <div className="cart">
            My Cart <i class="material-icons">shopping_cart</i>
          </div>
        </div>
      </div>
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </>
  );
}
