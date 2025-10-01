import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { id, title, image, price, oldPrice, badge } = product;

  return (
    <div className="card product-card">
      <div className="product-media">
        {badge ? <span className="badge" style={{ position: 'absolute', left: 10, top: 10 }}>{badge}</span> : null}
        {image ? <img src={image} alt={title} /> : <div style={{ width: '100%', height: '100%' }} />}
      </div>
      <div className="product-info">
        <Link className="product-title" to={`/product/${id}`}>{title}</Link>
        <div className="product-price">
          <span className="current">${price.toFixed(2)}</span>
          {oldPrice ? <span className="old">${Number(oldPrice).toFixed(2)}</span> : null}
        </div>
        <div className="product-actions">
          <button className="btn" onClick={() => addItem(product, 1)}>Add to cart</button>
          <Link className="btn ghost" to={`/product/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}
