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
          <div className="information">
            <h2 className="header">
              Shopping Cart{" "}
              <i class="material-icons md-48">add_shopping_cart</i>
            </h2>
            <p>No items added to cart yet. Start shopping now!</p>
            <h2 className="middle-header">
              Payment Info <i class="material-icons md-48">monetization_on</i>
            </h2>
            <p>Name</p>
            <input type="text" placeholder="Students Name" />
            <p>Email</p>
            <input type="text" placeholder="student@codepath.org" />
            <p>
              <input type="checkbox" />I agree to the{" "}
              <span className="color">terms and conditions</span>
            </p>
            <button>Checkout</button>
            <h2 className="bottom-header">
              Checkout Info<i class="material-icons md-48">fact_check</i>
            </h2>
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>

          <ShoppingCart />
          <CheckoutForm />
        </div>
      )}
    </section>
  );
}
