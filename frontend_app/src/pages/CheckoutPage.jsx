import React, { useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '../context/CartContext';
import { createCheckoutSession } from '../services/api';
import Loading from '../components/Loading';

// PUBLIC_INTERFACE
export default function CheckoutPage() {
  /**
   * Checkout summary and a button to go to Stripe Checkout.
   * If no Stripe key or backend is configured, we simulate redirect to success.
   */
  const { items, subtotal, clear } = useCart();
  const [loading, setLoading] = useState(false);

  const stripePromise = useMemo(() => {
    const key = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    return key ? loadStripe(key) : null;
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const lineItems = items.map(i => ({
        price_data: {
          currency: 'usd',
          product_data: { name: i.title },
          unit_amount: Math.round(i.price * 100),
        },
        quantity: i.qty,
      }));

      const successUrl = window.location.origin + '/?status=success';
      const cancelUrl = window.location.origin + '/checkout?canceled=1';

      const { url } = await createCheckoutSession({ lineItems, successUrl, cancelUrl });

      if (stripePromise) {
        // Normally you would call stripe.redirectToCheckout with sessionId from backend.
        // Since we don't have a real sessionId, fallback to window.location for this scaffold.
        window.location.href = url;
      } else {
        // No stripe or backend configured, simulate success
        clear();
        window.location.href = url;
      }
    } catch (e) {
      console.error(e);
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading label="Redirecting to payment..." />;

  return (
    <section>
      <h1 className="section-title">Checkout</h1>
      {items.length === 0 ? (
        <p className="text-muted">Your cart is empty. Add some products to continue.</p>
      ) : (
        <div className="container">
          <div style={{
            display: 'grid', gap: '1rem',
            gridTemplateColumns: '2fr 1fr'
          }}>
            <div style={{ background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                <strong>Order Items</strong>
              </div>
              <div style={{ padding: '1rem' }}>
                {items.map(i => (
                  <div key={i.id} style={{
                    display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '.75rem',
                    alignItems: 'center', padding: '.5rem 0', borderBottom: '1px dashed var(--border)'
                  }}>
                    <img src={i.image} alt={i.title} style={{ width: 64, height: 64, objectFit: 'contain', background: '#0b0b0b', borderRadius: 8 }} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{i.title}</div>
                      <div className="text-muted">Qty: {i.qty}</div>
                    </div>
                    <div style={{ color: 'var(--secondary)', fontWeight: 800 }}>${(i.price * i.qty).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)', height: 'fit-content' }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                <strong>Summary</strong>
              </div>
              <div style={{ padding: '1rem' }}>
                <div className="cart-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="cart-row"><span>Shipping</span><span>Calculated at checkout</span></div>
                <div className="cart-row"><span>Tax</span><span>Calculated at checkout</span></div>
                <div className="cart-row" style={{ fontWeight: 800, color: 'var(--secondary)' }}>
                  <span>Total</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                  Pay with Stripe
                </button>
                {!process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY && (
                  <p className="text-muted" style={{ marginTop: '.5rem', fontSize: '.85rem' }}>
                    Note: No Stripe key configured. Redirect will be simulated.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
