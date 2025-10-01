import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function clampTitle(title) {
  return title.length > 40 ? title.slice(0, 37) + '...' : title;
}

// PUBLIC_INTERFACE
export default function ProductCard({ product }) {
  /** Card for product in grid with Add to Cart action */
  const { addItem, openCart } = useCart();
  const onAdd = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1,
    });
    openCart();
  };

  return (
    <div className="card">
      <Link to={`/product/${product.slug}`} className="card-media" aria-label={product.title}>
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div className="card-body">
        <div className="card-title">{clampTitle(product.title)}</div>
        <div className="card-price">${product.price.toFixed(2)}</div>
        <div className="card-actions">
          <Link className="btn btn-outline" to={`/product/${product.slug}`}>Details</Link>
          <button className="btn btn-primary" onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
