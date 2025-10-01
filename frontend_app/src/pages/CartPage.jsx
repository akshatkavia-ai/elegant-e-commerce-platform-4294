import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';

export default function CartPage() {
  const { items, removeItem, setQuantity, totals, clear } = useCart();

  return (
    <div className="container" style={{ marginTop: '1rem' }}>
      <div className="breadcrumbs">
        <Link to="/">Home</Link><span>›</span><span>Cart</span>
      </div>
      <h1 className="page-title">Your cart</h1>

      <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '1.25rem' }}>
        <div className="card" style={{ padding: '1rem' }}>
          {items.length === 0 ? (
            <div className="section">
              <div style={{ fontWeight: 900, marginBottom: '.25rem' }}>Your cart is empty</div>
              <Link to="/" className="btn">Continue shopping</Link>
            </div>
          ) : (
            <div className="cart-list">
              {items.map(({ id, product, quantity }) => (
                <div key={id} className="cart-row">
                  <img src={product.image} alt={product.title} />
                  <div>
                    <div style={{ fontWeight: 900 }}>{product.title}</div>
                    <div className="helper">${product.price.toFixed(2)} each</div>
                    <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
                      <QuantitySelector value={quantity} onChange={(v) => setQuantity(id, v)} />
                      <button className="btn ghost" onClick={() => removeItem(id)}>Remove</button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', fontWeight: 900 }}>${(product.price * quantity).toFixed(2)}</div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '.25rem' }}>
                <button className="btn ghost" onClick={clear}>Clear cart</button>
                <Link to="/" className="btn secondary">Add more items</Link>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar">
          <div className="order-summary">
            <div className="summary-row"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
            <div className="summary-row"><span>Service</span><span>${totals.service.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>${totals.shipping.toFixed(2)}</span></div>
            <div className="summary-row total"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
            <Link to="/checkout" className="btn" style={{ textAlign: 'center' }}>Proceed to checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
