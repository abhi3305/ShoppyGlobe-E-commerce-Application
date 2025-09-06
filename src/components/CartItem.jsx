// src/components/CartItem.jsx
import React from "react";
import "../styles/cart.css"

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button onClick={() => onRemove(item.id)} className="remove-btn">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
