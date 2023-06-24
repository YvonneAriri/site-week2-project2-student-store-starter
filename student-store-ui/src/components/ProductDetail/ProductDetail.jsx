import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetail.css";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
  const { handleAddItemToCart, handleRemoveItemFromCart } = props;

  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://codepath-store-api.herokuapp.com/store/${productId}`
        );
        const data = response.data;
        setProduct(data.product);
        setIsFetching(false);
      } catch (error) {
        const errorMessage = `Error fetching products: ${error}`;
        console.error(errorMessage);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-detail">
      <Home hideProductGrid={true} />
      {isFetching ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <ProductView
          product={product}
          productId={product.id}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      )}
    </div>
  );
}
