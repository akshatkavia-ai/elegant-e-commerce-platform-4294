import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { CartProvider, useCart } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import CartSidebar from './components/CartSidebar';

// PUBLIC_INTERFACE
function Navbar() {
  /** Navbar with electric orange branding and cart button that toggles sidebar */
  const { openCart, totalQuantity } = useCart();
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/" className="brand-link">Electric Orange</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Shop</Link>
        <button className="nav-btn nav-cart" onClick={openCart}>
          Cart ({totalQuantity})
        </button>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
function AppLayout() {
  /** Root layout with Navbar, main content area, and the Cart sidebar. */
  return (
    <div className="App">
      <Navbar />
      <CartSidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <span className="footer-text">© {new Date().getFullYear()} Electric Orange Store</span>
        </div>
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** App entry with Router and CartProvider context. */
  return (
    <Router>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </Router>
  );
}

export default App;
