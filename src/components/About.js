import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
  text-align: center;
  padding-left: 20vw;
  height: 40vw;
`

const AboutHeader = styled.div`
  font-size: 58px;
  text-align: left;
  margin-top: 5%;
  width: 8vw;
`

const AboutTextContainer = styled.div`
  font-size: 24px;
  text-align: left;
  width: 50vw;
  margin-top: 3%;
  line-height: 2;
`

const Link = styled.a`
  color: #9A9A9A;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: #265B88;
  }
`

function About() {
  return(
    <AboutContainer>
      <Fade left>
        <AboutHeader>ABOUT</AboutHeader>
        <AboutTextContainer>
          <p>
            Driven by curiosity, I love working with large scale systems and problems. My interests lie in the environment
            and education for people around the world. In my free time I'm a hobby astronomer, and practice mixed martial arts.
            Check out my resume <Link href="https://www.google.com" target="_blank">here!</Link>
          </p>
        </AboutTextContainer>
      </Fade>
    </AboutContainer>
  )
}

export default About;