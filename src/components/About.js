import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { IoIosRocket } from 'react-icons/io';
import { FaDesktop, FaCode } from 'react-icons/fa';
import { GiWindTurbine } from 'react-icons/gi';

const AboutContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  height: 30%;
  margin-top: 5%;
  margin-bottom: 10%;
`

const AboutHeader = styled.div`
  font-size: 54px;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
  width: 8%;
`

const AboutSectionContainer = styled.div`
  font-size: 18px;
  text-align: left;
  width: 50%;
  margin-top: 3%;
  line-height: 1.3;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const Link = styled.a`
  color: #9A9A9A;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: #265B88;
  }
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
            Driven by curiosity, I love working with large scale systems and problems. My interests lie in clean energy solutions
            and accessible education. In my free time I'm a hobby astronomer, and practice mixed martial arts.
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