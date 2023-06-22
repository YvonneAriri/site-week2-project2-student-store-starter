import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
// import ProductDetail from "../products/:productId";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
  // const [products, setProducts] = useState([]);
  // const [isFetching, setIsFetching] = useState(true);
  // useEffect(() => {
  //   // Fetch products from the API
  //   api
  //     .getProducts()
  //     .then((response) => {
  //       setProducts(response.data);
  //       setIsFetching(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsFetching(false);
  //     });
  // }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
