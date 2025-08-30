// src/components/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <img src={item.image} alt={item.title} />
                  <div className='text'>{item.title}</div>
                  <div className='text'>₹{item.price}</div>
                  <div className='text'>Quantity: {item.quantity}</div>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          {/* Total Price */}
          <div className="cart-total">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          {/* Checkout Button */}
          <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
