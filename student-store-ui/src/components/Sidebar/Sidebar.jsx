import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import React, { useState } from "react";

export default function Sidebar(props) {
  const {
    isOpen,
    products,
    shoppingCart,
    handleOnToggle,
    checkoutForm,
    handleOnSubmitCheckoutForm,
    handleOnCheckoutFormChange,
  } = props;

  return (
    <section className="sidebar">
      {!isOpen && (
        <div className="section-close">
          <button className="toggle-button" onClick={handleOnToggle}>
            <i style={{ color: "white" }} className="material-icons md-48">
              arrow_forward
            </i>
          </button>
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
        </div>
      )}
      {isOpen && (
        <div className="section-open">
          <button className="toggle-button" onClick={handleOnToggle}>
            <i style={{ color: "white" }} className="material-icons md-48">
              arrow_back
            </i>
          </button>

          <ShoppingCart />
          <CheckoutForm />
        </div>
      )}
    </section>
  );
}
