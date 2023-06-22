import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      {/* <ProductGrid /> */}
      <div className="backgroundColor"></div>
      <div>
        <input type="text" class="search" placeholder="enter text" />
      </div>
    </div>
  );
}
