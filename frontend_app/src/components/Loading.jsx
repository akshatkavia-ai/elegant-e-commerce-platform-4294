import React from 'react';

// PUBLIC_INTERFACE
export default function Loading({ label = 'Loading...' }) {
  /** Minimal loading indicator matching theme */
  return (
    <div style={{ display: 'grid', placeItems: 'center', padding: '2rem', color: 'var(--muted)' }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        border: '3px solid rgba(249,115,22,0.2)',
        borderTopColor: 'var(--primary)',
        animation: 'spin 1s linear infinite',
        marginBottom: 10
      }} />
      <div>{label}</div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}
