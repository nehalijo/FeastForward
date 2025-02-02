import React, { useState } from "react";
import "./donorform.css";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    foodName: "",
    quantity: "",
    foodType: "veg",
    expirationDate: "",
    pickupLocation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch("http://localhost:3002/api/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Food donation request submitted successfully!");
        setFormData({
          email: "",
          foodName: "",
          quantity: "",
          foodType: "veg",
          expirationDate: "",
          pickupLocation: "",
        });
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="dcontainer">
      <nav className="dnavbar">
        <a href="#">home</a>
        <a href="#">donor</a>
        <a href="#">receiver</a>
      </nav>

      <h1 className="dtitle">Donate Food</h1>

      <form className="donor-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Food Name</label>
        <input
          type="text"
          name="foodName"
          value={formData.foodName}
          onChange={handleChange}
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <label>Food Type</label>
        <select
          name="foodType"
          value={formData.foodType}
          onChange={handleChange}
        >
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>

        <label>Expiration Date</label>
        <input
          type="date"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />

        <label>Pickup Location</label>
        <input
          type="text"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />

        <button type="submit" className="dbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonorForm;

