import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({});

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    let isProductInCart = false;
    const newShoppingCart = shoppingCart.map((item) => {
      if (item && item.itemId === productId) {
        isProductInCart = true;
        item.quantity += 1;
      }
      return item;
    });

    if (isProductInCart) {
      setShoppingCart(newShoppingCart);
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
    }
    console.log("!!!", shoppingCart);
  };

  const handleRemoveItemFromCart = (productId) => {
    const newShoppingCart = shoppingCart.map((item) => {
      if (item.itemId === productId) {
        item.quantity -= 1;
      }
      return item;
    });
    console.log("!!", shoppingCart);
    setShoppingCart(newShoppingCart.filter((item) => item.quantity !== 0));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        const data = response.data;
        setProducts(data.products);
        setIsFetching(false);
      } catch (error) {
        const errorMessage = `Error fetching products: ${error}`;
        setError(errorMessage);
        console.error(errorMessage);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />

          <Sidebar
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            shoppingCart={shoppingCart}
            products={products}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
