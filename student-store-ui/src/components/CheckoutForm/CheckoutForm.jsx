import { React, useState } from "react";
import "./CheckoutForm.css";

export default function CheckoutForm(props) {
  const {
    products,
    shoppingCart,
    handleOnCheckoutFormChange,
    checkoutForm,
    handleOnSubmitCheckoutForm,
  } = props;

  const [showReceipt, setShowReceipt] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [shoppedItems, setShoppedItems] = useState([]);
  let total = 0;
  let subTotal = 0;

  return (
    <div>
      <div>
        <p>Name</p>
        <input
          type="text"
          id="text"
          className="checkout-form-input"
          placeholder="Students Name"
          name="name"
          value={checkoutForm.name}
          onChange={(event) =>
            handleOnCheckoutFormChange("name", event.target.value)
          }
        />
        <p>Email</p>
        <input
          type="email"
          id="email"
          className="checkout-form-input"
          placeholder="student@codepath.org"
          name="email"
          value={checkoutForm.email}
          onChange={(event) =>
            handleOnCheckoutFormChange("email", event.target.value)
          }
        />
        <p>
          <input type="checkbox" />I agree to the{" "}
          <span className="color">terms and conditions</span>
        </p>
        <button
          onClick={() => {
            setShoppedItems(shoppingCart);
            setForm(checkoutForm);
            handleOnSubmitCheckoutForm();
            setShowReceipt(true);
          }}
        >
          Checkout
        </button>
        <h2 className="bottom-header">
          Checkout Info<i className="material-icons md-48">fact_check</i>
        </h2>

        {showReceipt ? (
          <div className="receipt">
            <h3>Receipt</h3>
            <p>
              Showing receipt for {form.name} available at {form.email}:
            </p>
            <ul className="purchase">
              {shoppedItems?.map((item, index) => {
                const product = products.find(
                  (product) => product.id === item.itemId
                );
                const cost = parseFloat(
                  (product.price * item.quantity).toFixed(2)
                );
                const tax = parseFloat((cost * 0.0875).toFixed(2));

                const result = parseFloat((subTotal += cost).toFixed(2));
                const totalCost = parseFloat((total += tax + cost).toFixed(2));

                return (
                  <div key={item.itemId}>
                    <li>
                      {item.quantity} total {product.name} purchased at a cost
                      of ${product.price} for a total cost of ${cost}.
                    </li>
                    {index === shoppedItems.length - 1 ? (
                      <>
                        <li>Before taxes, the subtotal was ${result}.</li>
                        <li>
                          After taxes and fees were applied, the total comes out
                          to
                          {totalCost}
                        </li>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </ul>{" "}
          </div>
        ) : (
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        )}
      </div>
    </div>
  );
}
