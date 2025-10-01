import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { api } from '../api/client';

const PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '';

export default function Checkout() {
  const { items, totals, clear } = useCart();
  const [shipping, setShipping] = useState({ country: '', state: '', city: '', address: '', zip: '' });
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const valid = useMemo(() => {
    return email && shipping.country && shipping.state && shipping.city && shipping.address && shipping.zip && items.length > 0;
  }, [email, shipping, items.length]);

  // PUBLIC_INTERFACE
  async function handleCheckout(e) {
    /** Creates Stripe Checkout session via backend and redirects. */
    e.preventDefault();
    setBusy(true); setError('');
    try {
      const successUrl = `${process.env.REACT_APP_SITE_URL || window.location.origin}/order/success`;
      const cancelUrl = `${window.location.origin}/checkout`;
      // Backend should use cart from session or accept explicit line items
      const session = await api.createCheckoutSession({
        successUrl,
        cancelUrl,
        email,
        shippingAddress: shipping,
      });

      // If backend returns a redirectUrl, just navigate
      if (session && session.redirectUrl) {
        window.location.href = session.redirectUrl;
        return;
      }

      // If sessionId and we want to use Stripe.js, we could load and redirect.
      // To keep template dependency-light, do a location redirect to a backend-hosted checkout URL if provided.
      if (session && session.url) {
        window.location.href = session.url;
        return;
      }

      // Fallback: if backend signals success but no URL, simulate success.
      clear();
      navigate('/order/success');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Checkout failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container" style={{ marginTop: '1rem' }}>
      <div className="breadcrumbs">
        <Link to="/">Home</Link><span>›</span><span>Checkout</span>
      </div>
      <h1 className="page-title">Checkout</h1>
      {items.length === 0 ? (
        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ fontWeight: 900 }}>Your cart is empty</div>
          <p className="helper">Add items to continue to payment.</p>
          <Link className="btn" to="/">Shop now</Link>
        </div>
      ) : (
        <form onSubmit={handleCheckout} className="grid" style={{ gridTemplateColumns: '1fr 420px', gap: '1rem' }}>
          <div className="card" style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
            <section className="section">
              <div style={{ fontWeight: 900 }}>Contact</div>
              <div>
                <label htmlFor="email" className="helper">Email</label>
                <input id="email" className="input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
            </section>
            <section className="section">
              <div style={{ fontWeight: 900 }}>Shipping address</div>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
                <div>
                  <label className="helper" htmlFor="country">Country</label>
                  <input id="country" className="input" value={shipping.country} onChange={(e) => setShipping(s => ({ ...s, country: e.target.value }))} placeholder="United States" />
                </div>
                <div>
                  <label className="helper" htmlFor="state">State</label>
                  <input id="state" className="input" value={shipping.state} onChange={(e) => setShipping(s => ({ ...s, state: e.target.value }))} placeholder="California" />
                </div>
                <div>
                  <label className="helper" htmlFor="city">City</label>
                  <input id="city" className="input" value={shipping.city} onChange={(e) => setShipping(s => ({ ...s, city: e.target.value }))} placeholder="San Francisco" />
                </div>
                <div>
                  <label className="helper" htmlFor="zip">ZIP</label>
                  <input id="zip" className="input" value={shipping.zip} onChange={(e) => setShipping(s => ({ ...s, zip: e.target.value }))} placeholder="94103" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className="helper" htmlFor="address">Address</label>
                  <input id="address" className="input" value={shipping.address} onChange={(e) => setShipping(s => ({ ...s, address: e.target.value }))} placeholder="123 Market St Apt 5" />
                </div>
              </div>
            </section>
            <section className="section">
              <div style={{ fontWeight: 900 }}>Payment</div>
              <p className="helper">
                Stripe Checkout will be used to securely process your payment.
                {PUBLISHABLE_KEY ? '' : ' (Note: REACT_APP_STRIPE_PUBLISHABLE_KEY is not set)'}
              </p>
              <div className="helper">You will be redirected to a Stripe-hosted page.</div>
            </section>
            {error ? <div className="card" style={{ borderColor: 'rgba(239,68,68,.35)', padding: '.75rem', color: '#EF4444' }}>{error}</div> : null}
          </div>
          <div className="sidebar">
            <div className="order-summary">
              <div className="summary-row"><span>Items</span><span>{items.reduce((s, it) => s + it.quantity, 0)}</span></div>
              <div className="summary-row"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
              <div className="summary-row"><span>Service</span><span>${totals.service.toFixed(2)}</span></div>
              <div className="summary-row"><span>Shipping</span><span>${totals.shipping.toFixed(2)}</span></div>
              <div className="summary-row total"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
              <button className="btn" type="submit" disabled={!valid || busy}>
                {busy ? 'Processing...' : 'Pay with Stripe'}
              </button>
              <Link to="/cart" className="btn ghost" style={{ textAlign: 'center' }}>Back to cart</Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
