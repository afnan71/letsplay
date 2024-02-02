import React from 'react';
import {Link} from 'react-router-dom'
import letsplay from '../Assets/letsplay.png'
import './NavigationBar.css'; // Import CSS styles

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={letsplay} alt="App Logo" className="logo" />
        
      </div>
      <ul className="nav-items">
        <li><Link to='/login-signup'>Signup</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/teams'>Signup</Link></li>
        <li><Link to='/challenges'>Signup</Link></li>
        <li><Link to='/login-signup'>Signup</Link></li>
        

      </ul>
    
    </nav>
  );
}

export default NavigationBar;
