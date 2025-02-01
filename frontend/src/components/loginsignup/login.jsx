import React from 'react';

import './login.css'

import email_icon from '../assets/email.png'
import user_icon from '../assets/user.png'
import pass_icon from '../assets/padlock.png'

const LoginSignup = () => {
  return (
    <div className='container-login'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div> 
        </div>

        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="user icon" />
                <input type="text" placeholder="Username" />
            </div>

            <div className="input">
                <img src={email_icon} alt="email icon" />
                <input type="email" placeholder="Email" />
            </div>

            <div className="input">
                <img src={pass_icon} alt="password icon" />
                <input type="password" placeholder="Password" />
            </div>
        </div>

        <div className="forgot-pass">Forgot password? <span>Click here</span></div>
        
        <div className="submit-container">
            <div className="submit">Sign up</div>
            <div className="submit">Log in</div>
        </div>
    </div>
  );
}

export default LoginSignup;


