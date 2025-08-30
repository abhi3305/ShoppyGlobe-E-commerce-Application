// src/pages/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductItem from "../components/ProductItem";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${query}`
        );
        setProducts(response.data.products);
      } catch (err) {
        setError("Error fetching products");
      }
    };
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Search Results for "{query}"</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
