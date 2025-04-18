import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Product.module.css";

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
    // <div>
    //   <h2>Product List</h2>
    //   <ul>
    //     {Array.isArray(products) && products.length > 0 ? (
    //       products.map((product) => (
           
    //         <li key={product.id}>
    //           <strong>
    //             <a href={`/BuyProduct/${product.id}`}>{product.name}</a>
    //           </strong> - {product.type}

    //           <p>
    //             <a href={`/BuyProductByType/${product.type}`}>
    //               See more product {product.type}
    //             </a>
    //           </p>

    //         </li>

            
    //       ))
    //     ) : (
    //       <p>No products available.</p>
    //     )}
    //   </ul>

      
    // </div>

    <div className={styles["product-list"]}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles["product-card"]}>
              <Link to={`/BuyProduct/${product.id}`} className={styles["product-link"]}>
                <img
                  src={product.image || "/default-product.jpg"}
                  alt={product.type}
                  className={styles["product-image"]}
                />
                <div className={styles["product-details"]}>
                  <h2>
                    <b>Name:</b> {product.name}
                  </h2>
                  <p>
                    <strong> Type:</strong> {product.type}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className={styles["no-courses"]}>No products available.</p>
        )}
      </div>
  );
};

export default Product ;
