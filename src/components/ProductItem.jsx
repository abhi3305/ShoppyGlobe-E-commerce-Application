// src/components/ProductItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <div className="product-item-details">
        <h3>{product.title}</h3>
        <div className="price">₹{product.price}</div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
