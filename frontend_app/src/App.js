import React from 'react';
import './App.css';
import logo from './logo.svg';

// PUBLIC_INTERFACE
function App() {
  /** 
   * This is the default starter App component.
   * It restores the original Create React App-like preview screen.
   * Figma-specific pages (HomeScreen, CartScreen, PaymentScreen) are intentionally not imported/rendered here.
   */
  return (
    <div className="App" style={{ background: '#282c34', minHeight: '100vh', color: 'white' }}>
      <header
        className="App-header"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
        }}
      >
        <img src={logo} className="App-logo" alt="logo" style={{ height: '40vmin', pointerEvents: 'none' }} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb' }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
