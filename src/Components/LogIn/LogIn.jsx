import React, {useState} from 'react';
import './LogIn.css';
import { NavLink, useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value})
  };

  console.log(loginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  };

  return (
    <div className="Layout">
      <div className="container">
        <h1 id='wetto'>WETTO SHOP</h1>
        <h1 id="welcome">Hi, Welcome Back! 👋</h1>
        <form id="loginBox" onChange={handleChange} onSubmit={handleSubmit}>
          <label htmlFor="email" id="e-label">
            Email
          </label><br/>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="input"
            required
          /><br />
          <label htmlFor="password" id="p-label">
            Password
          </label><br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id="input"
            required
          /><br />
          <button
           id='l-btn'
           type='submit'
           >
            Login
          </button>
        </form>
        <p id='l-account'>
          Don't have an account? <NavLink to = "/signup">Sign Up</NavLink>
        </p>
      </div>
      <img className='l-image' src="/images/cart.jpg" alt="cart"/>
    </div>
  );
}

export default LogIn;