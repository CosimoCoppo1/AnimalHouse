import React from "react";
import { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiUrl from '../../config'
import ProfilePage from './ProfilePage'
import "./Login.css"



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {"Content-Type": "application/json"}
    };

    try {

      const { data } = await axios.post(`http://${apiUrl}/auth/user/login`, {email, password}, config);
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userName", data.username);
      localStorage.setItem("userId", data.userId);
      window.location.href = "/e-commerce"               

    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {setError("")}, 5000);
    } 
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")  
    window.location.href = "/"
  }


  return (
    !localStorage.getItem("authToken") ?
      <div className="login-screen">
        <form onSubmit={loginHandler} className="login-screen__form">
          <h3 className="login-screen__title">Login</h3>
          {error && <span className="error-message">{error}</span>}
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:   
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              tabIndex={2}
            />
          </div>
          
          <button type="submit" className="btn btn-primary" tabIndex={3}>
            Login
          </button>

          <span className="login-screen__subtext">
            Do not have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    :
      <div className="homescreen">        

        <button type="button" class="btn btn-secondary" style={{width: "10%"}}onClick={() => logoutHandler()}>Logout</button>

        <br />

        <ProfilePage />


      </div>
  );
};

export default Login;