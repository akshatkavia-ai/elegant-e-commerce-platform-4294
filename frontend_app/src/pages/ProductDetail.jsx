import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductById } from '../api/catalog';
import { useCart } from '../context/CartContext';
import { Loading, Empty } from '../components/States';

export default function ProductDetail() {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const { addItem } = useCart();

  useEffect(() => {
    let active = true;
    setState({ loading: true, error: null, data: null });
    fetchProductById(id)
      .then((d) => active && setState({ loading: false, error: null, data: d }))
      .catch((e) => active && setState({ loading: false, error: e.message, data: null }));
    return () => { active = false; };
  }, [id]);

  if (state.loading) return <div className="container" style={{ marginTop: '1rem' }}><Loading label="Loading product..." /></div>;
  if (state.error || !state.data) return <div className="container" style={{ marginTop: '1rem' }}><Empty title="Product not found" description={state.error || 'Unknown error'} /></div>;

  const p = state.data;

  return (
    <div className="container" style={{ marginTop: '1rem' }}>
      <div className="breadcrumbs">
        <Link to="/">Home</Link><span>›</span><span>{p.title}</span>
      </div>
      <h1 className="page-title">{p.title}</h1>
      <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '1.25rem' }}>
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(249,115,22,.1), rgba(0,0,0,.9))', borderBottom: '1px solid var(--border)' }}>
            <img src={p.image} alt={p.title} style={{ width: '100%', height: 'clamp(240px, 48vw, 520px)', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '1rem' }}>
            <div className="badge">High demand</div>
            <p className="helper" style={{ marginTop: '.5rem' }}>
              Premium quality with bold Electric Orange flair.
            </p>
          </div>
        </div>
        <div className="card" style={{ padding: '1rem' }}>
          <div className="product-price" style={{ marginBottom: '.75rem' }}>
            <span className="current" style={{ fontSize: '1.5rem' }}>${p.price.toFixed(2)}</span>
            {p.oldPrice ? <span className="old">${Number(p.oldPrice).toFixed(2)}</span> : null}
          </div>
          <div className="section">
            <div>
              <div style={{ fontWeight: 900 }}>About</div>
              <p className="helper">Experience the bold, high-contrast design with top-notch performance.</p>
            </div>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              <button className="btn" onClick={() => addItem(p, 1)}>Add to cart</button>
              <Link to="/cart" className="btn ghost">Go to cart</Link>
            </div>
          </div>
          <div className="section">
            <div style={{ fontWeight: 900 }}>Shipping</div>
            <p className="helper">Free delivery on orders over $1000. Standard shipping $10.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
