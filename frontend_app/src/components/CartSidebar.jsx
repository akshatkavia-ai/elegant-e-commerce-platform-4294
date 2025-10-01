import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// PUBLIC_INTERFACE
export default function CartSidebar() {
  /** Slide-in cart with item controls and checkout CTA. */
  const { isOpen, closeCart, items, setQty, removeItem, subtotal } = useCart();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={closeCart} />
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`} aria-label="Shopping cart">
        <div className="cart-header">
          <strong>Cart</strong>
          <button className="btn btn-outline" onClick={closeCart}>Close</button>
        </div>

        <div className="cart-list">
          {items.length === 0 && <div className="text-muted">Your cart is empty.</div>}
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <div className="cart-item-title">{item.title}</div>
                <div className="text-muted">${item.price.toFixed(2)} each</div>
                <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
                  <button className="qty-btn" onClick={() => setQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                  <div className="qty-value">{item.qty}</div>
                  <button className="qty-btn" onClick={() => setQty(item.id, item.qty + 1)}>+</button>
                  <button className="btn btn-outline" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
              <div className="cart-item-price">${(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <Link to="/checkout" className="btn btn-primary checkout-btn" onClick={closeCart}>
            Proceed to Checkout
          </Link>
        </div>
      </aside>
    </>
  );
}
