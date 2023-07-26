import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Home/Navbar.jsx';
import Home from '../LandingPage/Home.jsx';
import Products from '../LandingPage/Products.jsx';
import Cart from '../Cart/ShoppingCart.jsx';
import Product from '../LandingPage/Product.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Footer from '../Home/Footer.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar onSearch={handleSearch} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
            <Route
              path="/products/*"
              element={<Products addToCart={addToCart} searchTerm={searchTerm} />}
            />
            <Route
              path="/products/:id"
              element={<Product addToCart={addToCart} />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;