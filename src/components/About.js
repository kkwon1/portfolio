import React, { forwardRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "../constants/Link";
import device from "../constants/Device";
import ProfilePicture from "../resources/kevin_profile.jpg";

const AboutContainer = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  padding-top: 5%;
  background: #fff;

  @media ${device.mobileM} {
    flex-direction: column;
    align-items: center;
    padding: 5%;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${ProfilePicture});

  @media ${device.mobileS} {
    width: 150px;
    height: 150px;
    margin-top: 100px;
  }

  @media ${device.mobileM} {
    width: 200px;
    height: 200px;
  }

  @media ${device.laptop} {
    width: 500px;
    height: 500px;
  }
`;

const AboutHeaderText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.mobileS} {
    margin-top: 30px;
  }
`;

const AboutHeader = styled.div`
  display: flex;
  font-weight: 200;
  text-align: left;
  @media ${device.mobileS} {
    font-size: 28px;
    width: 70%;
    justify-content: center;
  }

  @media ${device.laptop} {
    font-size: 54px;
    width: 400px;
  }
`;

const AboutSectionContainer = styled.div`
  display: flex;
  text-align: left;
  margin-top: 3%;
  line-height: 1.3;
  display: flex;
  flex-direction: row;

  @media ${device.mobileS} {
    font-size: 15px;
    width: 70%;
    justify-content: center;
  }

  @media ${device.laptop} {
    font-size: 18px;
    width: 400px;
  }
`;

const ResumeText = styled.div`
  margin-top: 20px;
  @media ${device.mobileS} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const NewAbout = forwardRef((props, ref) => {
  return (
    <AboutContainer ref={ref}>
      <Fade bottom>
        <ProfileContainer />

        {/* My about text section */}
        <AboutHeaderText>
          <AboutHeader>Kevin Kwon</AboutHeader>
          <AboutSectionContainer>
            <p>
              Hi! I'm a student at{" "}
              <Link href="https://www.ubc.ca/" target="_blank">
                UBC
              </Link>{" "}
              studying Computer Science and Physics expecting to graduate in May
              2020. Driven by curiosity, I love working with large scale systems
              and problems. Some of my interests lie in clean energy solutions
              and accessible education through technology. In my free time I'm a
              hobby astronomer, and practice mixed martial arts.
              <ResumeText>
                Check out my resume{" "}
                <Link
                  href="https://drive.google.com/open?id=1D03pdCnWTMLHV3RPtfgkaoGIZWqyFilW"
                  target="_blank"
                >
                  here!
                </Link>
              </ResumeText>
            </p>
          </AboutSectionContainer>
        </AboutHeaderText>
      </Fade>
    </AboutContainer>
  );
});

export default NewAbout;
