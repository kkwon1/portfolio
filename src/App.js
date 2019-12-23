import React from 'react';
import styled from 'styled-components'
import ParticlesCanvas from './components/ParticlesCanvas';
import Header from './components/Header';
import About from './components/About';

const AppContainer = styled.div`
  width: 100vw;
`

function App() {
  return (
    <AppContainer>
      <div>
        <Header/>
        <ParticlesCanvas/>
      </div>
      <About/>
    </AppContainer>
  );
}

export default App;
