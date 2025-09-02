// src/components/ProductItem.jsx
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
      })
    );
  };

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
