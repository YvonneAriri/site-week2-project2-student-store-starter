import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      {/* <ProductGrid /> */}

      <div className="container">
        <input type="text" class="search" placeholder="Search" />
        <button className="search-icon">
          <i class="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}
