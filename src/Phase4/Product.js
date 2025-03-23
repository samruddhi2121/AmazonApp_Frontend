import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://amazonapp-backend.onrender.com/amazon")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setProducts([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
           
            <li key={product.id}>
              <strong>
                <a href={`/BuyProduct/${product.id}`}>{product.name}</a>
              </strong> - {product.type}

              <p>
                <a href={`/BuyProductByType/${product.type}`}>
                  See more product {product.type}
                </a>
              </p>

            </li>

            
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>

      
    </div>
  );
};

export default Product ;
