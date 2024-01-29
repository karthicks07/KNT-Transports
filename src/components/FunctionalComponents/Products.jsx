import React from "react";
import "./css/Products.css";
import Swal from "sweetalert2";
const Products = () => {
  const clickalert=()=>
  {
    Swal.fire({
      title: "Request Sent!",
      text: "Thank you, We will contact you soon.",
      icon: "success"
    });
  }
  return (
    <div className="products">
      <h1 className="productsh1">Our Products</h1>
      <div className="line">
        <div className="line1"></div>
      </div>
      <div className="parent">
        <div className="outerbox">
            <div className="innerbox">
            <div className="i1"></div>
            <div className="i11">
              <h1 style={{textAlign:"left", marginTop:"10px"}}>Ploughing</h1>
              <p>Revolutionizing ploughing for efficient farming with cutting-edge solutions.</p>
              <h3>₹799/hour</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
                  <div className="trac"></div>
              </div>
            </div>
        </div>
            <div className="innerbox">
            <div className="i2"></div>
            <div className="i22">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>Croping</h1>
              <p>Empowering farmers with cutting-edge cropping solutions for enhanced yields.</p>
              <h3>₹1299/hour</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="trac"></div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="parent">
        <div className="outerbox">
            <div className="innerbox">
            <div className="i3"></div>
            <div className="i33">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>Harvesting</h1>
              <p>Innovative harvesting solutions for maximized yield and streamlined operations.</p>
              <h3>₹1999/hour</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="trac"></div>
              </div>
            </div>
            </div>
            <div className="innerbox">
            <div className="i4"></div>
            <div className="i44">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>Rotavating</h1>
              <p>Efficient rotavating solutions for enhanced soil preparation and productivity.</p>
              <h3>₹899/hour</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="trac"></div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="parent">
        <div className="outerbox">
            <div className="innerbox">
            <div className="i5"></div>
            <div className="i55">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>River Sand</h1>
              <p>Quality river sand for construction and landscaping projects available here.</p>
              <h3>₹4999/Unit</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="truck"></div>
              </div>
            </div>
            </div>
            <div className="innerbox">
            <div className="i6"></div>
            <div className="i66">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>Red Bricks</h1>
              <p>Premium-grade red bricks: the foundation of enduring architectural excellence.</p>
              <h3>₹14999/Unit</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="truck"></div>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="parent">
        <div className="outerbox">
            <div className="innerbox">
            <div className="i7"></div>
            <div className="i77">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>Stone Grit</h1>
              <p>Stone grit: essential for sturdy construction and reliable landscaping projects.</p>
              <h3>₹8999/Unit</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="truck"></div>
              </div>
            </div>
            </div>
            <div className="innerbox">
            <div className="i8"></div>
            <div className="i88">
            <h1 style={{textAlign:"left", marginTop:"10px"}}>Hollow Bricks</h1>
              <p>Versatile hollow bricks for efficient and sustainable construction solutions.</p>
              <h3>₹5999/Unit</h3>
              <div className="but">
              <button className="btn1" onClick={clickalert}>Request</button>
              <div className="truck"></div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
