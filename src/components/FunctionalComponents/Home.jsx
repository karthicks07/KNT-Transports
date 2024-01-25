import React from "react";
import './css/Home.css';

const Home = () => {
  return (
    <div className="homebody">
      <div className="div1">
        <img src="../../images/tractor.png" alt="" />
        <h1 className="topic">KNT <span className="T">T</span>ransports</h1>
        <p className="subtopic">Empowering agriculture with efficient field solutions and supplying top-quality construction materials, <br />Our tractor business is dedicated to driving productivity in both agri-field operations and construction projects.</p>
        <div className="btnn">
            <button className="btn1">Services</button>
            <button className="btn2">Products</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
