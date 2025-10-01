import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  /** 404 page */
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1 className="section-title">404</h1>
      <p className="text-muted">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
        Go back home
      </Link>
    </div>
  );
}
