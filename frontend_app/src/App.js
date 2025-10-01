import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './theme.css';
import './App.css';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

// PUBLIC_INTERFACE
function App() {
  /** Root application with routes: home, product detail, cart, checkout, and order success. */
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/success" element={<OrderSuccess />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} Electric Orange — Powered by bold design.</div>
        </footer>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
