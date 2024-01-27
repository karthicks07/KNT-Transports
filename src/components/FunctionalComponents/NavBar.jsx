import React from 'react';
import './NavBar.css'; // 
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className='navhover'><Link to="/" className='navhoverclr'>Home</Link></li>
        <li className='navhover' ><Link to="/about" className='navhoverclr'>About</Link></li>
        <li className='navhover'><Link to="/product" className='navhoverclr'>Products</Link></li>
        <li className='navhover'><Link to="/login" className='navhoverclr'>Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
