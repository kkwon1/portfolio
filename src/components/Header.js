import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const Name = styled.h1`
  font-family: 'Roboto'font-family: 'Roboto', 'sans-serif';
  font-weight: 300;
`

const Occupation = styled.h2`
  font-family: 'Roboto'font-family: 'Roboto', 'sans-serif';
  font-weight: 300;
`

function Header() {
  return (
    <HeaderContainer>
      <Name>Hey, I'm Kevin Kwon!</Name>
      <Occupation>Software Developer</Occupation>
    </HeaderContainer>
  );
}

export default Header;
