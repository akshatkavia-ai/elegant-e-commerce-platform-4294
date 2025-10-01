import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

function loadCart() {
  try {
    const s = localStorage.getItem('cart_v1');
    if (!s) return { items: [] };
    return JSON.parse(s);
  } catch {
    return { items: [] };
  }
}
function saveCart(state) {
  try {
    localStorage.setItem('cart_v1', JSON.stringify(state));
  } catch {}
}

// PUBLIC_INTERFACE
export function CartProvider({ children }) {
  /** Provides shopping cart state and actions to the React tree. */
  const [items, setItems] = useState(() => loadCart().items);

  useEffect(() => { saveCart({ items }); }, [items]);

  const addItem = useCallback((product, quantity = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(it => it.product.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { id: `${product.id}`, product, quantity }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(it => it.id !== id && it.product.id !== id));
  }, []);

  const setQuantity = useCallback((id, qty) => {
    setItems(prev => prev.map(it => {
      const match = (it.id === id || it.product.id === id);
      if (!match) return it;
      const nextQty = Math.max(1, qty);
      return { ...it, quantity: nextQty };
    }));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, it) => sum + it.product.price * it.quantity, 0);
    const shipping = subtotal > 1000 ? 0 : (items.length > 0 ? 10 : 0);
    const service = items.length > 0 ? 2.5 : 0;
    const total = subtotal + shipping + service;
    return { subtotal, shipping, service, total };
  }, [items]);

  const value = useMemo(() => ({
    items, addItem, removeItem, setQuantity, clear, totals
  }), [items, addItem, removeItem, setQuantity, clear, totals]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// PUBLIC_INTERFACE
export function useCart() {
  /** Hook for accessing the cart context. */
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
