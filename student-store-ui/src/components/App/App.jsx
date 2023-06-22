import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://codepath-store-api.herokuapp.com/store"
        );
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home />
          <ProductDetail products={products} />
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />

              <p>{product.name}</p>
            </div>
          ))}
        </main>
      </BrowserRouter>
    </div>
  );
}
