import React from 'react';

// PUBLIC_INTERFACE
export default function QuantitySelector({ value, onChange }) {
  /** Small quantity stepper for product detail */
  return (
    <div className="qty" role="group" aria-label="Quantity selector">
      <button className="qty-btn" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity">-</button>
      <div className="qty-value" aria-live="polite">{value}</div>
      <button className="qty-btn" onClick={() => onChange(value + 1)} aria-label="Increase quantity">+</button>
    </div>
  );
}
