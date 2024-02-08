import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


const clickpop2=()=>
{
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully, Login to continue!"
  });
}

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await axios.post("http://karthicksenthil.vercel.app/signup", { name: name, email: email, phone: phone, password: password })
    console.log(res.data)
    navigate("/login");
    clickpop2()
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
