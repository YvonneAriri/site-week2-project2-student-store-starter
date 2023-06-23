import * as React from "react";
import "./ProductCard.css";

export default function ProductGrid(props) {
  const product = props.product;

  return (
    <div className="layout" key={product.id}>
      <div>
        <img className="Image" src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>${product.price}</p>
        <div className="addbtn">
          <button> +</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}
