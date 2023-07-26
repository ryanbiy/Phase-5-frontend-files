import React, {useState} from 'react';
import './SignUp.css';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp(){

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    contact: '',
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
        <div className='Layout'>
            <div className="container">
                <h1 id="shopName">WETTO SHOP</h1>
                <h1 id="createAccount">Create an account</h1>
                <h3 id="connect">Connect with your friends today!</h3>
                <form id="signUpBox" onChange={handleChange} onSubmit={handleSubmit}>
                    <input
                     type= "text"
                     name= "name"
                     placeholder= "Enter Your Username"
                     className='inputs'
                     required
                     /><br/>
                     <input
                     type= "email"
                     name= "email"
                     placeholder= "Enter Your Email"
                     className='inputs'
                     required
                     /><br/>
                     <input
                     type= "tel"
                     name= "contact"
                     placeholder= "Enter Your Phone Number"
                     className='inputs'
                     required
                     /><br/>
                     <input
                     type= "password"
                     name= "password"
                     placeholder= "Enter Your Password"
                     className='inputs'
                     required
                     /><br/>
                     <button id='s-btn'>
                        Sign Up
                     </button>
                </form>
                <p id='s-account'>
                    Already have an account? < NavLink to = "/login">Login</NavLink>
                </p>
            </div>
            <img className='s-image' src="/images/cart.jpg" alt="cart"/>
        </div>
    );
}

export default SignUp;