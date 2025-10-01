import { api } from './client';
import { mockProducts, mockProductById, simulateDelay } from './mockData';

// PUBLIC_INTERFACE
export async function fetchProducts(query) {
  /** Fetch product list. Falls back to mock data if backend is unavailable. */
  try {
    return await api.getProducts({ q: query });
  } catch (e) {
    console.warn('Falling back to mock products:', e.message);
    await simulateDelay(150);
    return mockProducts;
  }
}

// PUBLIC_INTERFACE
export async function fetchProductById(id) {
  /** Fetch product by id. Falls back to mock data if backend is unavailable. */
  try {
    return await api.getProductById(id);
  } catch (e) {
    console.warn('Falling back to mock product:', e.message);
    await simulateDelay(120);
    const item = mockProductById(id);
    if (!item) throw new Error('Product not found (mock)');
    return item;
  }
}
