import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import { Link , Events, scrollSpy } from 'react-scroll';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-color: white;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 70%;
`

const LinkItem = styled(Link)`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 1vw;
  margin-right: 2vw;
  cursor: pointer;
`

class NavBar extends React.Component  {
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
    return(
      <NavbarContainer>
        <AppBar style={{backgroundColor: "#1F2336"}} position="static">
          <Toolbar variant="dense">
            <LinkContainer>
              <LinkItem activeClass="active" to="about" spy={true} smooth="easeInOutQuad" duration={750}>
                About
              </LinkItem>
              <LinkItem activeClass="active" to="experience" spy={true} smooth="easeInOutQuad" duration={750}>
                Experience
              </LinkItem>
              <LinkItem>
                Personal Projects
              </LinkItem>
              <LinkItem>
                Contact
              </LinkItem>
            </LinkContainer>
          </Toolbar>
        </AppBar>
      </NavbarContainer>
    )
  }
}

export default NavBar;