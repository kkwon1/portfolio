import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Link from '../constants/Link'
import { IoIosRocket } from 'react-icons/io';
import { FaDesktop, FaCode } from 'react-icons/fa';
import { GiWindTurbine } from 'react-icons/gi';

const AboutContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  height: 100vh;
  padding-top: 5%;
  background: #FFF;
`

const AboutHeader = styled.div`
  font-size: 6vh;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
`

const AboutSectionContainer = styled.div`
  font-size: 2.5vh;
  text-align: left;
  width: 70%;
  margin-top: 3%;
  line-height: 1.3;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 5%;
`

const CircleIcon = styled.div`
  background: #FCCFAC;
  font-size: 40px;
  padding: 30px;
  width: 40px;
  height: 40px;
  margin-right: 10%;
  margin-top: 10%;
  align-items: center;
  border-radius: 50%;
`

function About() {
  return(
    <AboutContainer>
      <Fade left>
        <AboutHeader>ABOUT</AboutHeader>
        <AboutSectionContainer>
          <p>
            Hi! I'm a student at <Link href="https://www.ubc.ca/" target="_blank">UBC</Link> studying Computer Science and Physics.
            Driven by curiosity, I love working with large scale systems and problems.
            Some of my interests lie in clean energy solutions and accessible education through technology.
            In my free time I'm a hobby astronomer, and practice mixed martial arts.
            Check out my resume <Link href="https://drive.google.com/open?id=13QPlXRPrkENTf5dDumsg2KJfK3Zir4OY" target="_blank">here!</Link>
          </p>
        </AboutSectionContainer>
      </Fade>
      <Fade bottom>
        <IconContainer>
          <CircleIcon>
            <FaDesktop/>
          </CircleIcon>
          <CircleIcon>
            <FaCode/>
          </CircleIcon>
          <CircleIcon>
            <IoIosRocket/>
          </CircleIcon>
          <CircleIcon>
            <GiWindTurbine/>
          </CircleIcon>
        </IconContainer>
      </Fade>
    </AboutContainer>
  )
}

export default About;