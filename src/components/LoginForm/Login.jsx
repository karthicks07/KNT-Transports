import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// ...

function Login() {

  const clickpop=()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Logged in successfully"
    });
  }
  const clickpop1=()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Invalid email or password"
    });
  }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://karthicksenthil.vercel.app/login",{email:email,password:password})
    console.log(res.data)
    if (res.data.loggedIn === true){
        navigate("/")
        clickpop()
    }
    else if(res.data.loggedIn==false){
      clickpop1()
    }
  }
  return (
    <div className="page-container">
      <div className="form1">
        <div className="form2">
          <h1 className="lh1">KNT Transports</h1>
          <div className="lin"></div>
          <center>
            <div className="logintext">Loginn</div>
          </center>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td><input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  required /></td>
                </tr>
                <tr>
                  <td><input type="password" placeholder="Password"  id="password" value={password} onChange={(e) => setPassword(e.target.value)}  required /></td>
                </tr>
              </tbody>
            </table>
            <div className="btns">
              <button className="btn1">Login</button>
              <p className="error-message">{errorMessage}</p>
            </div>
            <a href="#" className="forget-link">forget password?</a>
            <div className="sign">
              <p className="account">Did't have an account?</p>
              <Link to="/signup" className="signuptext">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
  