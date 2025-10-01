import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../api/catalog';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { Empty, Loading } from '../components/States';

export default function Home() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const [state, setState] = useState({ loading: true, error: null, data: [] });

  useEffect(() => {
    let active = true;
    setState(s => ({ ...s, loading: true, error: null }));
    fetchProducts(query)
      .then((data) => {
        if (!active) return;
        setState({ loading: false, error: null, data });
      })
      .catch((e) => active && setState({ loading: false, error: e.message, data: [] }));
    return () => { active = false; };
  }, [query]);

  return (
    <div className="container" style={{ marginTop: '1rem' }}>
      <div className="breadcrumbs">
        <span>Home</span>
        {query ? (<><span>›</span><span>Search: {query}</span></>) : null}
      </div>
      <h1 className="page-title">Explore products</h1>

      <div className="layout">
        <div>
          {state.loading ? <Loading label="Loading products..." /> : null}
          {!state.loading && state.error ? (
            <Empty title="Failed to load products" description={state.error} />
          ) : null}
          {!state.loading && !state.error && state.data.length === 0 ? (
            <Empty title="No products found" description="Try a different search." />
          ) : null}
          {!state.loading && !state.error && state.data.length > 0 ? (
            <div className="grid products">
              {state.data.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : null}
        </div>
        <CartSidebar />
      </div>
    </div>
  );
}
