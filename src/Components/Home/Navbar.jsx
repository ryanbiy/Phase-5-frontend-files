import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    const searchQuery = searchTerm.trim();
    const searchPath = searchQuery ? `/products?search=${searchQuery}` : '/products';
    if (location.pathname !== searchPath) {
      navigate(searchPath);
      setSearchTerm('');
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo">
          Wetto Shop
        </Link>
      </div>
      <div className="options-container">
        <ul className="options">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="actions-container">
        <button className="account-button" onClick={toggleDropdown}>
          Account
        </button>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        )}
        <Link to="/cart" className="cart-button">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;