
/*import React, { useState } from 'react';
import LoginSignup from './components/loginsignup/login';
import Home from './components/home/home';
import './App.css';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate setting logged in state (you can update this based on your authentication flow)
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home /> // Render Home if the user is logged in
      ) : (
        <LoginSignup onLoginSuccess={handleLoginSuccess} /> // Pass login success handler to LoginSignup
      )}
    </div>
  );
}

export default App;*/
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/loginsignup/login";
import Home from "./components/home/home";
import DonorForm from "./components/donorpage/donorform";
import FoodListings from "./components/foodlisting/FoodListings";  // Ensure the correct import path
import "./App.css";

function App() {
  // State to track if the user is logged in
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate setting logged in state (update based on authentication flow)


  return (
    <Router>
      <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/donor" element={<DonorForm />} />
            <Route path="/recipient" element={< FoodListings />} />
          </>
      </Routes>
    // </Router>
  );
}

export default App;


