import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="logo.png" alt="Pure Pleo Logo" /> {/* Replace with the correct logo path */}
        </div>
        <nav className="nav">
          <button>Cereals</button>
          <button>Pulses</button>
          <button>Spices</button>
          <button>Fruits</button>
          <button>Vegetables</button>
          <button>Oilseeds</button>
          <button>Floriculture</button>
          <button>Herbs</button>
          <button>Dry Fruits</button>
          <button>Beverages</button>
          <button>About Us</button>
          <button>Contact Us</button>
        </nav>
      </div>
      
      <div className="header-right">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="become-seller">Become a Seller</button>
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
}

export default Header;
