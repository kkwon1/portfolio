import React from 'react';
import styled from 'styled-components'
import ParticlesCanvas from './components/ParticlesCanvas';
import Header from './components/Header';
import About from './components/About';
import Hello from './components/Hello';
import NavBar from './components/NavBar';
import { Link , Events, scrollSpy } from 'react-scroll'

const AppContainer = styled.div`
  width: 100vw;
`

class App extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <AppContainer>
        <div>
          <Link activeClass="active" to="navbarSection" spy={true} smooth="easeInOutQuad" duration={750}>
            <Header/>
            <ParticlesCanvas/>
          </Link>
        </div>
        <div id="navbarSection">
          <NavBar/>
        </div>
        <div id="aboutSection">
          <About/>
        </div>
        <Hello/>
      </AppContainer>
    );
  }
}

export default App