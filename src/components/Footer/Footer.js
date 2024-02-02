import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terms">About Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
