import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <h3>KNT Transports,</h3>
          <p>N Balraj,</p>
          <p>Contact: +91 9442231030</p>
          <p>Email: karthicksenthilofficial@gmail.com</p>
        </div>
        <div className="footer-info">
          <h3>Address,</h3>
          <p>8/71-8, Raghavendhira nagar, Chinna Veppanam Colony, <br />Namakkal - 637002</p>
        </div>
        <div className="footer-info">
          
          <h3>Developed by,</h3>
          <p><a href="https://karthicksenthil.in" target='_blank'>Karthick Senthil</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
