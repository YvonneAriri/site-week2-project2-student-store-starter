import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import * as React from "react";

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
          <button className="toggle-button" onClick={handleOnToggle}>
            <i style={{ color: "white" }} className="material-icons md-48">
              add_shopping_cart
            </i>
          </button>
          <button className="toggle-button" onClick={handleOnToggle}>
            <i style={{ color: "white" }} className="material-icons md-48">
              monetization_on
            </i>
          </button>
          <button className="toggle-button" onClick={handleOnToggle}>
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
              <i className="material-icons md-48">add_shopping_cart</i>
            </h2>

            {shoppingCart.length == 0 ? (
              <p>No items added to cart yet. Start shopping now!</p>
            ) : (
              <ShoppingCart
                products={products}
                shoppingCart={shoppingCart}
                isOpen={isOpen}
              />
            )}
            <h2 className="middle-header">
              Payment Info{" "}
              <i className="material-icons md-48">monetization_on</i>
            </h2>
          </div>
          <CheckoutForm
            products={products}
            shoppingCart={shoppingCart}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            checkoutForm={checkoutForm}
          />
        </div>
      )}
    </section>
  );
}
