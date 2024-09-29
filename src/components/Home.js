// App.js
import React from 'react';
import './Home.css'; // Assuming you have styles here

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-left">
          <img
            src="./logo.png" // Use your logo image link
            alt="Pure Pleo"
            className="logo"
          />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for agricultural products" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="header-right">
          <button className="seller-button">Become a Seller</button>
          <i className="fas fa-heart"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </header>

      <nav className="categories">
        <ul>
          <li>Cereals</li>
          <li>Pulses</li>
          <li>Spices</li>
          <li>Fruits</li>
          <li>Vegetables</li>
          <li>Oilseeds</li>
          <li>Floriculture</li>
          <li>Herbs</li>
          <li>Dry Fruits</li>
          <li>Beverages</li>
        </ul>
      </nav>

      <main>
        <div className="content">
          <h1>GET THE QUALITY AGRICULTURAL PRODUCTS AT BEST PRICES</h1>
          <img
            src="your-image-link" // Use the image link for the graph image
            alt="Graph"
            className="main-image"
          />
        </div>
      </main>
    </div>
  );
}

export default App;