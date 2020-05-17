import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "../constants/Link";
import { IoIosRocket } from "react-icons/io";
import { FaDesktop, FaCode } from "react-icons/fa";
import { GiWindTurbine } from "react-icons/gi";
import device from "../constants/Device";

const AboutContainer = styled.div`
  text-align: center;
  height: 100vh;
  padding-top: 5%;
  background: #fff;

  @media ${device.mobileS} {
    padding: 5%;
  }

  @media ${device.laptop} {
    padding-left: 20%;
  }
`;

const AboutHeader = styled.div`
  font-weight: 200;
  text-align: left;
  margin-top: 5%;

  @media ${device.mobileS} {
    font-size: 28px;
  }

  @media ${device.laptop} {
    font-size: 54px;
  }
`;

const AboutSectionContainer = styled.div`
  text-align: left;
  margin-top: 3%;
  line-height: 1.3;
  display: flex;
  flex-direction: row;
  justify-content: space-between @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 18px;
    width: 70%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 5%;

  @media ${device.mobileS} {
    justify-content: center;
    padding-left: 10%;
  }

  @media ${device.laptop} {
    justify-content: left;
  }
`;

const CircleIcon = styled.div`
  background: #fccfac;
  font-size: 40px;
  width: 40px;
  height: 40px;
  padding: 30px;
  margin-right: 10%;
  margin-top: 10%;
  align-items: center;
  border-radius: 50%;
`;

function About() {
  return (
    <AboutContainer>
      <Fade left>
        <AboutHeader>ABOUT</AboutHeader>
        <AboutSectionContainer>
          <p>
            Hi! I'm a student at{" "}
            <Link href="https://www.ubc.ca/" target="_blank">
              UBC
            </Link>{" "}
            studying Computer Science and Physics expecting to graduate in May
            2020. Driven by curiosity, I love working with large scale systems
            and problems. Some of my interests lie in clean energy solutions and
            accessible education through technology. In my free time I'm a hobby
            astronomer, and practice mixed martial arts. Check out my resume{" "}
            <Link
              href="https://drive.google.com/open?id=1D03pdCnWTMLHV3RPtfgkaoGIZWqyFilW"
              target="_blank"
            >
              here!
            </Link>
          </p>
        </AboutSectionContainer>
      </Fade>
      <Fade bottom>
        <IconContainer>
          <CircleIcon>
            <FaDesktop />
          </CircleIcon>
          <CircleIcon>
            <FaCode />
          </CircleIcon>
          <CircleIcon>
            <IoIosRocket />
          </CircleIcon>
          <CircleIcon>
            <GiWindTurbine />
          </CircleIcon>
        </IconContainer>
      </Fade>
    </AboutContainer>
  );
}

export default About;
