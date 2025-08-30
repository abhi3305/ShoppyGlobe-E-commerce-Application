// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";  // Added useSelector to access cart state
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Accessing cart items from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculating total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/">ShoppyGlobe</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItemCount})</Link> {/* Showing cart item count */}
          <Link to="/checkout">Checkout</Link>
        </div>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
