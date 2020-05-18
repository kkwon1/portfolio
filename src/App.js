import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import ParticlesCanvas from "./components/ParticlesCanvas";
import Header from "./components/Header";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Link } from "react-scroll";

const AppContainer = styled.div`
  width: 100%;
  background: #f8f4f1;
`;

const MainBodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const App = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef();

  const handleScroll = useCallback(() => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 52);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  return (
    <AppContainer>
      <div style={{ cursor: "pointer" }}>
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth="easeInOutQuad"
          duration={750}
        >
          <Header />
          <ParticlesCanvas />
        </Link>
      </div>
      <MainBodyContainer>
        <div id="navbar">
          <NavBar isSticky={isSticky} />
        </div>
        <div id="about">
          <About ref={ref} />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </MainBodyContainer>
    </AppContainer>
  );
};

/*
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
        <MainBodyContainer>
          <div id="navbar">
            <NavBar/>
          </div>
          <div id="about">
            <About/>
          </div>
          <div id="experience">
            <Experience/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
          <div id="footer">
            <Footer/>
          </div>
        </MainBodyContainer>
      </AppContainer>
    );
  }
}
*/

export default App;
