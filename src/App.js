import React from 'react';
import './App.css';
import ParticlesCanvas from './components/ParticlesCanvas'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <ParticlesCanvas/>
      </header>
    </div>
  );
}

export default App;
