// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import mascaraImage from "../assets/essence-mascara.jpg"; // Example image

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <Link to="/product/1" className="btn-primary">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Home;
