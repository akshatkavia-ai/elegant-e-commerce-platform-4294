import React from 'react';

export function Loading({ label = 'Loading...' }) {
  return (
    <div className="card" style={{ padding: '1rem', textAlign: 'center' }}>
      <div className="badge" aria-hidden>...</div>
      <div style={{ marginTop: '.5rem', fontWeight: 800 }}>{label}</div>
    </div>
  );
}

export function Empty({ title = 'Nothing here', description = 'Try adjusting your search or filters.' }) {
  return (
    <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
      <div className="badge">Heads up</div>
      <h3 style={{ margin: '.5rem 0 0 0' }}>{title}</h3>
      <p className="helper" style={{ marginTop: '.25rem' }}>{description}</p>
    </div>
  );
}
