import * as React from "react";
import App from "../App/App";

import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  const { isOpen, products, shoppingCart } = props;

  const getItemName = (itemId) => {
    // Find the product with the matching itemId in the products array
    const product = products.find((item) => item.id === itemId);
    // Return the product's name if found, or an empty string otherwise
    return product ? product.name : "";
  };
  const getItemPrice = (itemId) => {
    // Find the product with the matching itemId in the products array
    const product = products.find((item) => item.id === itemId);
    // Return the product's price if found, or 0 otherwise
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
    return total + price;
  }, 0);

  return (
    <div className="cart-product-name">
      <table>
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
        <tfoot>
          <tr>
            <td colSpan="3">Subtotal:</td>
            <td>{subtotal}</td>
          </tr>
          {/* <tr>
            <td colSpan="3">Total Cost:</td>
            <td>{totalCost}</td>
          </tr> */}
        </tfoot>
      </table>
    </div>
  );
}
