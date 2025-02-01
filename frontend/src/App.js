/*//simport logo from './logo.svg';
import LoginSignup from './components/loginsignup/login'
import Home from './components/home/home'
import './App.css';

function App() {
  console.log(12)
  return (
    <div>
      <LoginSignup> </LoginSignup>
      <Home />
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
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

export default App;
