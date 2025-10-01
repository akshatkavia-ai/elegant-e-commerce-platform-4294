const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

/**
 * Core JSON fetch helper with error handling.
 * @param {string} path relative API path beginning with /
 * @param {RequestInit} options fetch options
 * @returns {Promise<any>} parsed JSON
 */
async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const resp = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include',
    ...options,
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    const err = new Error(`HTTP ${resp.status} ${resp.statusText} - ${text}`);
    err.status = resp.status;
    throw err;
  }
  const contentType = resp.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return resp.json();
  }
  return resp.text();
}

// PUBLIC_INTERFACE
export function getApiBaseUrl() {
  /** Returns the configured API base URL for the frontend. */
  return API_BASE_URL;
}

// PUBLIC_INTERFACE
export const api = {
  /** Get list of products with optional search query. */
  async getProducts({ q } = {}) {
    /** Fetches the product catalog from backend. */
    const query = q ? `?q=${encodeURIComponent(q)}` : '';
    // Placeholder endpoint: update to your backend path e.g. /api/products
    return request(`/api/products${query}`);
  },
  /** Get details of a single product by ID. */
  async getProductById(id) {
    /** Fetches product details for the given product id. */
    return request(`/api/products/${encodeURIComponent(id)}`);
  },
  /** Get current cart items (server-backed or session). */
  async getCart() {
    /** Fetch current user's cart items. */
    return request(`/api/cart`);
  },
  /** Add item to cart. */
  async addToCart({ productId, quantity = 1 }) {
    /** Adds the specified product to the user's cart. */
    return request(`/api/cart/items`, {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  },
  /** Update cart item quantity. */
  async updateCartItem({ itemId, quantity }) {
    /** Updates a cart item's quantity. */
    return request(`/api/cart/items/${encodeURIComponent(itemId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });
  },
  /** Remove cart item. */
  async removeCartItem(itemId) {
    /** Removes an item from the cart by item id. */
    return request(`/api/cart/items/${encodeURIComponent(itemId)}`, {
      method: 'DELETE',
    });
  },
  /** Create a checkout session for Stripe Checkout and return sessionId/redirectUrl. */
  async createCheckoutSession(payload) {
    /** Creates a Stripe Checkout session for the current cart and customer. */
    // Expected payload: { successUrl, cancelUrl, shippingAddress, email }
    return request(`/api/checkout/session`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
