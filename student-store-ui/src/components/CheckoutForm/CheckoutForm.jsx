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
  const [errors, setErrors] = useState({ name: "", email: "" });

  let total = 0;
  let subTotal = 0;

  const validateForm = () => {
    let hasErrors = false;
    const newErrors = { name: "", email: "" };

    if (form.name.trim() === "") {
      newErrors.name = "Name cannot be empty";
      hasErrors = true;
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email cannot be empty";
      hasErrors = true;
    }

    setErrors(newErrors);

    return !hasErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowReceipt(true);
      setShoppedItems([...shoppingCart]);
      handleOnSubmitCheckoutForm();
    }
  };

  return (
    <div className="checkout-form">
      <div>
        <p className="name"> Name</p>
        <input
          type="text"
          id="text"
          className="checkout-form-input"
          placeholder="Students Name"
          name="name"
          value={form.name}
          onChange={(event) => {
            setForm({ ...form, name: event.target.value });
            handleOnCheckoutFormChange("email", event.target.value);
            setErrors({ ...errors, name: "" });
          }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <p className="email">Email</p>
        <input
          type="email"
          id="email"
          className="checkout-form-input"
          placeholder="student@codepath.org"
          name="email"
          value={form.email}
          onChange={(event) => {
            setForm({ ...form, email: event.target.value });
            handleOnCheckoutFormChange("email", event.target.value);
            setErrors({ ...errors, email: "" });
          }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <p className="terms">
          <input type="checkbox" />I agree to the{" "}
          <span className="color">terms and conditions</span>
        </p>
        <button className="checkout-btn" onClick={handleSubmit}>
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
                          to ${totalCost}
                        </li>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </ul>{" "}
          </div>
        ) : (
          <p className="info">
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        )}
      </div>
    </div>
  );
}
