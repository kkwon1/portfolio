import React from 'react';
import styled from 'styled-components'
import ParticlesCanvas from './components/ParticlesCanvas';
import Header from './components/Header';
import About from './components/About';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import { Link , Events, scrollSpy } from 'react-scroll';

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
          <Link activeClass="active" to="navbar" spy={true} smooth="easeInOutQuad" duration={750}>
            <Header/>
            <ParticlesCanvas/>
          </Link>
        </div>
        <div id="navbar">
          <NavBar/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="experience">
          <Experience/>
        </div>
      </AppContainer>
    );
  }
}

export default App