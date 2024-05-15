import React from 'react';
import './App.css';
import Home from './pages/home'; // Corrected the path to Home component

function App() {
  return (
    <div className="App">
      <div style={{ border: '1px solid green', height: '30px' }}> {/* Corrected the inline style syntax */}
        Header
      </div>
      <Home />
    </div>
  );
}

export default App;


