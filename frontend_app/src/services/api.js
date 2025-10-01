import { sampleProducts } from '../data/products';

const API_BASE = process.env.REACT_APP_API_BASE_URL || '';

/**
 * Simulated API layer. If REACT_APP_API_BASE_URL is set, you can replace
 * these functions with real fetch() calls to your backend.
 */

// PUBLIC_INTERFACE
export async function fetchProducts() {
  /** Get list of products for catalog grid. Simulated with mock data. */
  // If you later connect a backend:
  // const res = await fetch(`${API_BASE}/products`);
  // return res.json();
  return new Promise(resolve => setTimeout(() => resolve(sampleProducts), 200));
}

// PUBLIC_INTERFACE
export async function fetchProductBySlug(slug) {
  /** Get a single product by slug. Simulated with mock data. */
  return new Promise(resolve =>
    setTimeout(() => resolve(sampleProducts.find(p => p.slug === slug)), 150)
  );
}

// PUBLIC_INTERFACE
export async function createCheckoutSession({ lineItems, successUrl, cancelUrl }) {
  /**
   * Create Stripe Checkout session via backend.
   * Placeholder returns a fake URL so the flow is demonstrable without backend keys.
   */
  if (!process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || !API_BASE) {
    // Simulated behavior: navigate to a local "success" screen.
    return { url: successUrl || '/?status=success' };
  }

  // Example real flow:
  // const res = await fetch(`${API_BASE}/checkout/session`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ lineItems, successUrl, cancelUrl }),
  // });
  // return res.json();

  return { url: successUrl || '/' };
}
