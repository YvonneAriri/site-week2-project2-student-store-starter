import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <ShoppingCart />
      <CheckoutForm />
      <button className="arrowbtn">
        <i class="material-icons md-48">arrow_forward</i>
      </button>
      <button className="cartbtn">
        <i class="material-icons md-48">add_shopping_cart</i>
      </button>
      <button className="monetiztionbtn">
        <i class="material-icons md-48">monetization_on</i>
      </button>
      <button className="factbtn">
        <i class="material-icons md-48">fact_check</i>
      </button>
    </section>
  );
}
