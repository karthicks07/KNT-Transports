import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios"
// ...

const Signup =()=>{
  const[cname,updateCname]=useState("KNTT")
  const updatecname=async(event)=>{
    event.preventDefault();
    const res=await axios.get("https://localhost:3001/signup/")
    updateCname(res.data)
    console.log(res)
  }
    return (
      <div className="page-container">
        <div className="form1">
          <div className="form22">
            <h1 className="lh1">{cname?.cName} Transports</h1>
            <div className="lin"></div>
            <center>
              <div className="logintext">Signup</div>
            </center>
            <form onSubmit={updatecname}>
              <table>
                <tbody>
                  <tr>
                    <td><input type="text" placeholder="Name" /></td>
                  </tr>
                  <tr>
                    <td><input type="email" placeholder="Email" /></td>
                  </tr>
                  <tr>
                    <td><input type="number" placeholder="Phone (+91)" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="Password" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="btns">
               <button className="btn1" type="submit">Signup</button>
              </div>
              <div className="signn">
              <p className="account">Already have an account?</p>
              <Link to="/login" className="signuptext">Login</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }

export default Signup
  