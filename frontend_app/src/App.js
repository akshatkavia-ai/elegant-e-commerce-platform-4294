import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">E-Commerce</div>
        <div className="nav-links">
          <button className="nav-btn">Shop</button>
          <button className="nav-btn">Cart (0)</button>
        </div>
      </nav>
      <main className="main-content">
        <h1>Welcome to Our Store</h1>
        <div className="featured-products">
          <div className="product-card">
            <div className="product-image-placeholder"></div>
            <h2>Featured Product</h2>
            <p>$99.99</p>
            <button className="btn-primary">Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
