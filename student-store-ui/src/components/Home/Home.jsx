import { useState, useEffect } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";

import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  const {
    products,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    hideProductGrid,
    shoppingCart,
    isFetching,
  } = props; ///Destructuring

  const [searchQuery, setSearchQuery] = useState();
  const [productsSearchMatch, setProductsSearchMatch] = useState(products);

  const searchProduct = (value) => {
    if (value) {
      setProductsSearchMatch(
        products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setProductsSearchMatch(products);
    }
  };

  useEffect(() => {
    if (!hideProductGrid) {
      searchProduct(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    setProductsSearchMatch(products);
  }, [products]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="home">
        <Hero />
        <div className="container">
          <input
            type="text"
            className="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <i className="material-icons search-icon">search</i>

          <div className="help">
            <i style={{ color: "gray" }} className="material-icons">
              help
            </i>
            <p>Help</p>
          </div>
          <div className="cart">
            My Cart <i className="material-icons">shopping_cart</i>
          </div>
        </div>
      </div>

      {!hideProductGrid && (
        <ProductGrid
          shoppingCart={shoppingCart}
          products={productsSearchMatch}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          isFetching={isFetching}
        />
      )}
    </>
  );
}
