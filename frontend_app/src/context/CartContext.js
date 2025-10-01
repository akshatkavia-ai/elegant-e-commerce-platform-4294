import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';

/**
 * Cart types
 */
const CartContext = createContext(null);

const initialState = {
  items: [], // [{id, title, price, image, qty}]
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload || state;
    case 'ADD': {
      const exists = state.items.find(i => i.id === action.payload.id);
      const items = exists
        ? state.items.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + (action.payload.qty || 1) } : i)
        : [...state.items, { ...action.payload, qty: action.payload.qty || 1 }];
      return { ...state, items };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'SET_QTY':
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload.id ? { ...i, qty: Math.max(1, action.payload.qty) } : i)
      };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

// PUBLIC_INTERFACE
export function CartProvider({ children }) {
  /**
   * Provide cart state and actions to the app.
   * Persists in localStorage to simulate user session.
   */
  const [isOpen, setOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from storage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('eo_cart_v1');
      if (raw) dispatch({ type: 'INIT', payload: JSON.parse(raw) });
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem('eo_cart_v1', JSON.stringify(state));
    } catch (e) {
      // ignore quota errors
    }
  }, [state]);

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  );
  const totalQuantity = useMemo(
    () => state.items.reduce((sum, i) => sum + i.qty, 0),
    [state.items]
  );

  const value = {
    items: state.items,
    addItem: (item) => dispatch({ type: 'ADD', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE', payload: id }),
    setQty: (id, qty) => dispatch({ type: 'SET_QTY', payload: { id, qty } }),
    clear: () => dispatch({ type: 'CLEAR' }),
    subtotal,
    totalQuantity,
    isOpen,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    toggleCart: () => setOpen(v => !v),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// PUBLIC_INTERFACE
export function useCart() {
  /** Access cart state and actions. */
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
