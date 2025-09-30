import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import Figma tokens. First try public path (works at runtime if assets are copied to public/assets),
// then load a local fallback so the build does not fail in CI.
import './figma-common.css';
import './figma-common-fallback.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
