// src/components/ProductList.jsx
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
