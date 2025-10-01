import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductBySlug } from '../services/api';
import Loading from '../components/Loading';
import QuantitySelector from '../components/QuantitySelector';
import { useCart } from '../context/CartContext';

// PUBLIC_INTERFACE
export default function ProductDetailPage() {
  /** Product detail: image, info, tags, add to cart */
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    let mounted = true;
    fetchProductBySlug(slug).then((p) => { if (mounted) setProduct(p); });
    return () => { mounted = false; };
  }, [slug]);

  if (!product) return <Loading label="Loading product..." />;
  if (!product?.id) return <div>Product not found.</div>;

  const onAdd = () => {
    addItem({ id: product.id, title: product.title, price: product.price, image: product.image, qty });
    openCart();
  };

  return (
    <div className="detail-layout">
      <div className="detail-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="detail-info">
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '.5rem' }}>{product.title}</h2>
        <div className="badges">
          <span className="badge badge-orange">★ {product.rating}</span>
          <span className="badge badge-green">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </div>
        <p className="text-muted" style={{ marginTop: '.25rem' }}>{product.description}</p>
        {product.highlights?.length ? (
          <ul style={{ paddingLeft: '1rem', marginTop: '.5rem' }}>
            {product.highlights.map(h => <li key={h} className="text-muted">{h}</li>)}
          </ul>
        ) : null}
        <div style={{ marginTop: '1rem', fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)' }}>
          ${product.price.toFixed(2)}
        </div>

        <QuantitySelector value={qty} onChange={setQty} />
        <div style={{ display: 'flex', gap: '.75rem' }}>
          <button className="btn btn-primary" onClick={onAdd}>Add to Cart</button>
          <button className="btn btn-outline" onClick={() => setQty(1)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
