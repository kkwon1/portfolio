import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
  text-align: center;
  padding-left: 25vw;
`

const AboutHeader = styled.div`
  font-size: 48px;
  text-align: center;
  margin-top: 5%;
  box-shadow: 0px 24px 3px -24px black;
  width: 14vw;
`

const AboutTextContainer = styled.div`
  font-size: 18px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 50vw;
  margin-top: 3%;
`

function About() {
  return(
    <div>
      <AboutContainer>
        <Fade left>
          <AboutHeader>ABOUT</AboutHeader>
        </Fade>
        <Fade left>
          <AboutTextContainer>
            As a student studying Computer Science and Physics, I am driven by curioisty and passion. I love working
            with large scale systems and problems, and I hope to apply my knowledge to build solutions regarding the
            environment, and education for people around the world.
            In my free time I am a hobby astronomer, and practice mixed martial arts!
          </AboutTextContainer>
        </Fade>
      </AboutContainer>
    </div>
  )
}

export default About;