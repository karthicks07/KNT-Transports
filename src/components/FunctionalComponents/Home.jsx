import React from 'react';
import '../FunctionalComponents/css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const scrollToServices = () => {
        const servicesElement = document.getElementById('SERVICES');
        servicesElement.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <div className="container">
                <div className="background-image"></div>
                <div className="content">
                    <h1 className="topic">KNT <span className='T'>T</span>ransports.<span className="blink">|</span></h1>
                    <p className="subtopic">Empowering agriculture with efficient field solutions and supplying top-quality construction materials, <br />Our tractor business is dedicated to driving productivity in both agri-field operations and construction projects.</p>
                </div>
                <div className="btnn">
                    <button className="btn1" style={{ fontSize: "20px" }} onClick={scrollToServices}>Services</button>
                    <Link to="/product" style={{ fontSize: "20px" }}><button className="btn2">Products</button></Link>
                </div>
            </div>
            <h1 className='serviceh1' id='SERVICES'>Our <span>S</span>ervices</h1>
            <div className='line'>
                <div className='line1'></div>
            </div>
            <div className="services" >
                <div className='ser1'>
                    <div className='overlay1'>
                        <h1>Ploughing</h1>
                    </div>
                </div>
                <div className='ser2'>
                <div className='overlay2'>
                        <h1>Croping</h1>
                    </div>
                </div>
                <div className='ser3'>
                <div className='overlay3'>
                        <h1>Harvesting</h1>
                    </div>
                </div>
            </div>
            <div className="services">
            <div className='ser4'>
                    <div className='overlay4'>
                        <h1>Rotavating</h1>
                    </div>
                </div>
                <div className='ser5'>
                <div className='overlay5'>
                        <h1>Barling</h1>
                    </div>
                </div>
                <div className='ser6'>
                <div className='overlay6'>
                        <h1>Construction <br />Materials</h1>
                    </div>
                </div>
            </div>
            <div className='btnn' style={{ marginBottom: "40px", marginTop: "-40px" }}>
            <Link to="/product" style={{ fontSize: "20px" }}><button className='btn1'>Products</button></Link>
            </div>
        </div>
    );
}

export default Home;
