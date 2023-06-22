import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
// import ProductDetail from "../products/:productId";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
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
