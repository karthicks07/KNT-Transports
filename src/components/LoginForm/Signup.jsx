import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  //   const [courseName,updateCourseName]=useState("KNT") 
  //   const updateCourse = async(event) =>{
  //     event.preventDefault()
  //     const res=await axios.get("http://localhost:3001/signup")  
  //     updateCourseName(res.data)   
  //     console.log(res.data)
  //   }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:3001/signup", { name: name, email: email, phone: phone, password: password })
    console.log(res.data)
    setErrorMessage('Sign up successful!');
  };

  return (
    <div className="page-container">
      <div className="form1">
        <div className="form22">
          <h1 className="lh1">KNT Trasnsports</h1>
          <div className="lin"></div>
          <center>
            <div className="logintext">Signup</div>
          </center>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td><input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></td>
                </tr>
                <tr>
                  <td><input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                </tr>
                <tr>
                  <td><input type="number" placeholder="Phone (+91)" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /></td>
                </tr>
                <tr>
                  <td><input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
                </tr>
              </tbody>
            </table>
            <div className="btns">
              <button className="btn1" type="submit">Signup</button>
              <p className="error-message">{errorMessage}</p>
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
