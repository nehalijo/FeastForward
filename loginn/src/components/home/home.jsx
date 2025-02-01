import React from "react";
import "./home.css";

const home = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <a href="#">home</a>
        <a href="#">donor</a>
        <a href="#">receiver</a>
      </nav>

      <h1 className="title">Feast Forward</h1>
      <h2 className="subtitle">About Us</h2>

      <p className="description">
      At Feast Forward, we believe that no meal should go to waste when there are people in need. Our platform connects large events, restaurants, and caterers with local NGOs and community organizations to donate surplus food.
      </p>

      <p className="question">Would you like to</p>

      <div className="buttons">
        <button className="button">Donate Food</button>
        <button className="button">Receive Food</button>
      </div>
    </div>
  );
};

export default home;
