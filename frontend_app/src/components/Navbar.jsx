import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { items } = useCart();
  const count = items.reduce((s, it) => s + it.quantity, 0);
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const query = (fd.get('q') || '').toString();
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (query) next.set('q', query); else next.delete('q');
      return next;
    }, { replace: true });
    navigate(`/?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Go to home">
          <div className="brand-mark" aria-hidden />
          <span>Electric Orange</span>
        </Link>
        <form className="searchbar" onSubmit={onSubmit} role="search" aria-label="Search products">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 21l-4.35-4.35" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="10" cy="10" r="7" stroke="rgba(255,255,255,.6)" strokeWidth="2"/>
          </svg>
          <input name="q" placeholder="Search products..." defaultValue={q} />
          <button className="btn ghost" type="submit">Search</button>
        </form>
        <div className="nav-actions">
          <Link className="btn" to="/checkout">Checkout</Link>
          <Link className="btn secondary" to="/cart" aria-label={`Cart with ${count} items`}>Cart ({count})</Link>
        </div>
      </div>
    </header>
  );
}
