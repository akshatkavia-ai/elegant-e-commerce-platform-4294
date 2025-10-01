import React from 'react';

export default function QuantitySelector({ value, onChange, min = 1 }) {
  const dec = () => onChange(Math.max(min, (value || min) - 1));
  const inc = () => onChange((value || min) + 1);
  return (
    <div className="qty" role="group" aria-label="Quantity selector">
      <button type="button" onClick={dec} aria-label="Decrease quantity">-</button>
      <span aria-live="polite" aria-atomic="true">{value}</span>
      <button type="button" onClick={inc} aria-label="Increase quantity">+</button>
    </div>
  );
}
