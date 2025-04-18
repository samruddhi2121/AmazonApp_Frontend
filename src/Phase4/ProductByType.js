import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./App.css";
import "./Product.css";


const ProductByType = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all products to extract unique types
    axios
      .get("https://amazonapp-backend.onrender.com/amazon")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueType = [
            ...new Set(response.data.map((r) => r.type)),
          ];
          setTypes(uniqueType);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    setLoading(true);
    setError(null);

    axios
      .get(`https://amazonapp-backend.onrender.com/getDataByType/${type}`)
      .then((response) => {
        if (response.data.amazon_List && Array.isArray(response.data.amazon_List)) {
          setProducts(response.data.amazon_List);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  };

  return (
    <div className="container1">
      <h1 className="title">Amazon Clone </h1>

      {/* Dropdown to select a type */}
      <div className="dropdown-container">
        <label>Select a Type: </label>
        <select onChange={handleTypeChange} value={selectedType}>
          <option value="">-- Select --</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Loading & Error Messages */}
      {loading && <p className="loading">Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {/* Product List */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Link to product id page */}
              <Link to={`/BuyProduct/${product.id}`} className="product-link">
                <img
                  src={product.image || "/default-product.jpg"} // Default image if not provided
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h2>{product.name}</h2>
                  <p>{product.type}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-data">No product found of this type...</p>
        )}
      </div>
    </div>
  );
};

export default ProductByType;



