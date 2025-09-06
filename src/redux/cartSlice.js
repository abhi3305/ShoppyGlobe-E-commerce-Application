// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [],  // Array to store cart items
};

// Create the slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        // If the item already exists in the cart, increase quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item to the cart
        state.items.push({ ...item, quantity: 1 });
      }
    },
    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
