import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';

const NavbarContainer = styled.div`
  color: white;
  background-color: white;
`

function NavBar() {
  return(
    <NavbarContainer>
      <AppBar style={{backgroundColor: "#1F2336"}} position="static">
        <Toolbar variant="dense"/>
      </AppBar>
    </NavbarContainer>
  )
}

export default NavBar;