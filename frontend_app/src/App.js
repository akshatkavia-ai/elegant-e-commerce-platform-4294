import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <div className="figmapreview-wrapper">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
