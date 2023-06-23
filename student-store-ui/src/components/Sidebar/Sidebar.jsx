import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import React, { useState } from "react";

export default function Sidebar() {
  const [showAdditionalElements, setShowAdditionalElements] = useState(false);

  const handleClick = () => {
    console.log("Button clicked!");
    setShowAdditionalElements(!showAdditionalElements);
  };

  return (
    <section className="sidebar">
      <ShoppingCart />
      <CheckoutForm />
      {!showAdditionalElements && (
        <button className="arrowbtn" onClick={handleClick}>
          <i style={{ color: "white" }} className="material-icons md-48">
            arrow_forward
          </i>
        </button>
      )}
      {showAdditionalElements && (
        <div className="additional">
          <button className="arrowbtn" onClick={handleClick}>
            <i style={{ color: "white" }} className="material-icons md-48">
              arrow_back
            </i>
          </button>

          <p>ShoppingCart</p>
        </div>
      )}
      <button className="cartbtn">
        <i style={{ color: "white" }} className="material-icons md-48">
          add_shopping_cart
        </i>
      </button>
      <button className="monetizationbtn">
        <i style={{ color: "white" }} className="material-icons md-48">
          monetization_on
        </i>
      </button>
      <button className="factbtn">
        <i style={{ color: "white" }} className="material-icons md-48">
          fact_check
        </i>
      </button>
    </section>
  );
}
