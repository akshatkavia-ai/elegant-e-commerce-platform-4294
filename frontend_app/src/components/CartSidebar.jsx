import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import QuantitySelector from './QuantitySelector';

export default function CartSidebar() {
  const { items, removeItem, setQuantity, totals } = useCart();

  return (
    <aside className="sidebar">
      <div className="card" style={{ padding: '1rem' }}>
        <h3 style={{ margin: 0, fontWeight: 900 }}>Your Cart</h3>
        <p className="helper" style={{ marginTop: '.25rem' }}>
          Review items and proceed to checkout.
        </p>
        <div className="cart-list" style={{ marginTop: '.75rem' }}>
          {items.length === 0 ? (
            <p className="helper">Your cart is empty.</p>
          ) : items.map(({ id, product, quantity }) => (
            <div className="cart-row" key={id}>
              <img src={product.image} alt={product.title} />
              <div>
                <div style={{ fontWeight: 800 }}>{product.title}</div>
                <div className="helper">${product.price.toFixed(2)} each</div>
                <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
                  <QuantitySelector value={quantity} onChange={(v) => setQuantity(id, v)} />
                  <button className="btn ghost" onClick={() => removeItem(id)}>Remove</button>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontWeight: 900 }}>
                ${(product.price * quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary" style={{ marginTop: '.75rem' }}>
          <div className="summary-row"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
          <div className="summary-row"><span>Service</span><span>${totals.service.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>${totals.shipping.toFixed(2)}</span></div>
          <div className="summary-row total"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
        </div>
        <Link to="/checkout" className="btn" style={{ width: '100%', marginTop: '.75rem', display: 'inline-block', textAlign: 'center' }}>
          Proceed to Checkout
        </Link>
      </div>
    </aside>
  );
}
