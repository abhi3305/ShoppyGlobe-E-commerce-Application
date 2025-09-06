// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.css";

// Lazy load components
const ProductList = React.lazy(() => import("./components/ProductList"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const Cart = React.lazy(() => import("./components/Cart"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const SearchResults = React.lazy(() => import("./pages/SearchResults"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
