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
          <p>Karthick Senthil - <a href="https://karthicksenthil.in" target='_blank'>Visit</a></p>
          <div className="image">
          <div className='img-flex'>
            <a href="https://github.com/karthicks07" target='_blank'><div className="github"></div></a>
            <a href="https://linkedin.com/in/karthick-senthil" target='_blank'><div className="linkedin"></div></a>
            <a href="mailto:karthick712004@gmail.com?" target='_blank'><div className="mail"></div></a>
            <a href="https://instagram.com/karthick__senthil" target='_blank'><div className="insta"></div></a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
