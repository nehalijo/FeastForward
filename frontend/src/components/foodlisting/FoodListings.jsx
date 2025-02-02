import React, { useEffect, useState } from "react";
import "./styles.css";

const FoodListings = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setFoodItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Available Food Listings</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="food-list">
        {foodItems.map((item) => (
          <div key={item.fid} className="food-card">
            <p><strong>Food:</strong> {item.foodname}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Food Type:</strong> {item.food_type}</p>
            <p><strong>Expires On:</strong> {formatDate(item.expiration)}</p>
            <p><strong>Donor:</strong> {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
    .toString().padStart(2, "0")}-${date.getFullYear()}`;
};

export default FoodListings;
