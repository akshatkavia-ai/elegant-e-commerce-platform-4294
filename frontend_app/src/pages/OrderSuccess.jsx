import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function OrderSuccess() {
  const { clear } = useCart();
  useEffect(() => { clear(); }, [clear]);

  return (
    <div className="container" style={{ marginTop: '1rem' }}>
      <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
        <div className="badge">Success</div>
        <h1 className="page-title" style={{ marginTop: '.5rem' }}>Payment Successful</h1>
        <p className="helper">Your order has been placed. You will receive an email confirmation shortly.</p>
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginTop: '.75rem' }}>
          <Link to="/" className="btn">Continue Shopping</Link>
          <Link to="/orders" className="btn ghost">Track My Order</Link>
        </div>
      </div>
    </div>
  );
}
