import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";

import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <input type="text" className="search" placeholder="Search" />
        <button className="search-icon">
          <i className="material-icons">search</i>
        </button>
        <br />
      </div>
    </div>
  );
}
