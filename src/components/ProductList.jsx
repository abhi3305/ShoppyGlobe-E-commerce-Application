// src/components/ProductList.jsx
import React, { useState } from "react";
import mockData from "../utils/mockData"; // Importing the mock data
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

const ProductList = () => {
  const [products] = useState(mockData); // Using mock data as the product list

  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
