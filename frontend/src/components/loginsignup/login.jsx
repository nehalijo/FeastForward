import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

import email_icon from '../assets/email.png';
import pass_icon from '../assets/padlock.png';

const LoginSignup = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3002/auth/login', { email, password });
      console.log(response.data);
      alert('Login Successful!');
      onLoginSuccess(); // Notify the parent component of successful login
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3002/auth/register', { email, password });
      console.log(response.data);
      alert('Signup Successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className='container-login'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div> 
        </div>

        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="email icon" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div className="input">
                <img src={pass_icon} alt="password icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
        </div>
        
        <div className="submit-container">
            <button className="submit" onClick={handleSignup}>Sign up</button>
            <button className="submit" onClick={handleLogin}>Log in</button>
        </div>
    </div>
  );
};

export default LoginSignup;
