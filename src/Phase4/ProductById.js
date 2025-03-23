
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const ProductById = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });

  useEffect(() => {
    axios
      .get(`https://amazonapp-backend.onrender.com/amazon/${id}`)
      .then((response) => {
        setProducts(response.data); // Ensure correct data extraction
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [id]);

  // const handleReviewSubmit = (e) => {
  //   e.preventDefault();
  //   if (newReview.username && newReview.comment) {
  //     const updatedReviews = [...(products.reviews || []), newReview];
  //     setProducts({ ...products, reviews: updatedReviews });
  //     setNewReview({ username: "", rating: 5, comment: "" });
  //   }
  // };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.username && newReview.comment) {
      const currentReviews = Array.isArray(products.reviews) ? products.reviews : [];
      const updatedReviews = [...currentReviews, newReview];
      setProducts({ ...products, reviews: updatedReviews });
      setNewReview({ username: "", rating: 5, comment: "" });
    }
  };
  
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const averageRating = products.reviews?.length
    ? (products.reviews.reduce((sum, review) => sum + review.rating, 0) / products.reviews.length).toFixed(1)
    : "No Ratings Yet";

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
      <h1 className="product-title">{products.name}</h1>
      <img src={products.image || "/default-products.jpg"} alt={products.name} className="product-detail-image" />
      <p className="product-type">Type: {products.type}</p>
      <strong><p className="product-type">Price: {products.price}</p></strong>
      <p className="product-description">🛍️ A wonderful place for amazing deals and a great shopping experience.</p>
      <p className="average-rating">⭐ {averageRating} / 5</p>
      
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {products.reviews?.length > 0 ? (
          products.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-user"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      
      <div className="add-review-section">
        <h2>Add a Review</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.username}
            onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
            required
          />
          <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>{rating} Stars</option>
            ))}
          </select>
          <textarea
            placeholder="Write a review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ProductById;
