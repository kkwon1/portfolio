import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
  text-align: center;
  padding-left: 25vw;
`

const AboutHeader = styled.div`
  font-size: 48px;
  text-align: left;
  margin-top: 5%;
  width: 14vw;
`

const AboutTextContainer = styled.div`
  font-size: 20px;
  text-align: left;
  width: 50vw;
  margin-top: 3%;
`

const Link = styled.a`
  color: #9A9A9A;
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover {
    color: #292F4B;
  }
`

function About() {
  return(
    <AboutContainer>
      <Fade left>
        <AboutHeader>ABOUT</AboutHeader>
        <AboutTextContainer>
          <p>
          As a student majoring in Computer Science and Physics, I am driven by curiosity. I love working
          with large scale systems and problems, and I hope to apply my knowledge to build solutions regarding the
          environment, and education for people around the world. In my free time I am a hobby astronomer, and practice
          mixed martial arts. Check out my resume <Link href="https://www.google.com" target="_blank">here!</Link>
          </p>
        </AboutTextContainer>
      </Fade>
    </AboutContainer>
  )
}

export default About;