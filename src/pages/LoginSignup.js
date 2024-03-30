// LoginSignup.jsx
import React, { useState } from 'react';
import '../components/LoginSignup/LoginSignup.css';
import user_icon from "../components/Assets/person.png";
import Email_icon from "../components/Assets/email.png";
import password_icon from "../components/Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
       <div className='inputs'>
        {action=== "Login"?<div></div> : <div className='input'>
            <img src={user_icon} alt="" />
            <input  placeholder='Name'type='text' />
          </div>}
        <div className='input'>
          <img src={Email_icon} alt="" />
          <input placeholder='Email ID' type='email' />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input  placeholder='Password'type='password' />
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click here!</span></div>}
      </div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" :"submit"} onClick={() =>{ setAction('Sign Up')}}>
          Sign Up
        </div>
        <div className={action === "Sign Up" ? "submit gray" :"submit"} onClick={() =>{ setAction('Login')} }>
          Login
        </div>
      </div>
      
    </div>
  );
};

export default LoginSignup;
