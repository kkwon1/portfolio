import React from 'react';
import styled from 'styled-components'

const Name = styled.h1`
  font-family: 'Roboto'font-family: 'Roboto', 'sans-serif';
  font-weight: 300;
`

const Occupation = styled.h2`
  font-family: 'Roboto'font-family: 'Roboto', 'sans-serif';
  font-weight: 300;
`

function Home() {
  return (
    <div>
      <Name>Hey, I'm Kevin Kwon!</Name>
      <Occupation>Software Developer</Occupation>
    </div>
  );
}

export default Home;