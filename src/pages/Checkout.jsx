// src/pages/Checkout.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/Checkout.css"

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-details">
        <h3>Your Order</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Please add some items to proceed.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="checkout-item">
                  <img src={item.image} alt={item.title} />
                  <div>{item.title}</div>
                  <div>₹{item.price} x {item.quantity}</div>
                </li>
              ))}
            </ul>
            <div className="checkout-total">
              <span>Total:</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        )}
      </div>
      <form>
        <input type="text" placeholder="Enter Shipping Address" required />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
