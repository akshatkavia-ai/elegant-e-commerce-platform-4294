import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Catalog grid showing all products */
  const [products, setProducts] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchProducts().then((list) => { if (mounted) setProducts(list); });
    return () => { mounted = false; };
  }, []);

  if (!products) return <Loading label="Fetching products..." />;

  return (
    <section>
      <h1 className="section-title">Welcome to Electric Orange</h1>
      <p className="section-subtitle">Bold gear, daily essentials, and more — curated for impact.</p>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
