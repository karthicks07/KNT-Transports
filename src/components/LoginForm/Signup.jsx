import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import Login from "./Login";
// ...

const Signup =()=>{
    return (
      <div className="page-container">
        <div className="form1">
          <div className="form22">
            <h1 className="lh1">KNT Transports</h1>
            <div className="lin"></div>
            <center>
              <div className="logintext">Signup</div>
            </center>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td><input type="text" placeholder="Name" /></td>
                  </tr>
                  <tr>
                    <td><input type="email" placeholder="Email" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="Password" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="btns">
               <button className="loginbtn">Signup</button>
                <Link to="/login"><button className="signupbtn">Login</button></Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

export default Signup
  