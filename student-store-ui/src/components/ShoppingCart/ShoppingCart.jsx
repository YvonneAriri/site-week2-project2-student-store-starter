import * as React from "react";
import App from "../App/App";

import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  const { isOpen, products, shoppingCart } = props;

  const getItemName = (itemId) => {
    const product = products.find((item) => item.id === itemId);
    return product ? product.name : "";
  };
  const getItemPrice = (itemId) => {
    const product = products.find((item) => item.id === itemId);

    return product ? product.price : 0;
  };
  const getItemCost = (itemId, quantity) => {
    const price = getItemPrice(itemId);
    return price * quantity;
  };
  const cost = shoppingCart.reduce((total, item) => {
    const cost = getItemCost(item.itemId, item.quantity);
    return total + cost;
  }, 0);
  const subtotal = shoppingCart.reduce((total, item) => {
    const price = getItemPrice(item.itemId);
    return parseFloat((total + price * item.quantity).toFixed(2));
  }, 0);
  const taxRate = 0.0875;
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  const Total = parseFloat((subtotal + tax).toFixed(2));

  return (
    <>
      <div className="cart-product-name">
        <table className="items">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Cost</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {shoppingCart.map((item) => (
              <tr key={item.itemId}>
                <td>{getItemName(item.itemId)}</td>
                <td>{item.quantity}</td>
                <td>{getItemPrice(item.itemId)}</td>
                <td>{getItemCost(item.itemId, item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <table className="total">
          <tfoot>
            <tr>
              <td colSpan="3">Subtotal:</td>
              <td>{subtotal}</td>
            </tr>
            <tr>
              <td colSpan="3">Tax and Fees:</td>
              <td>{tax}</td>
            </tr>
            <tr>
              <td colSpan="3">Total:</td>
              <td>{Total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
