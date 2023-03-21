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
    width: 80%;
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
            <span>
              Hi! I'm a Software Developer at{" "}
              <Link href="https://aws.amazon.com/" target="_blank">
                AWS
              </Link>
              .
              <br />
              Driven by curiosity, I love working with large scale systems and
              problems. Some of my interests lie in the intersection between
              sustainability and technology. In my free time I'm a hobby
              astronomer, and like to go climbing.
              <ResumeText>
                Check out my resume{" "}
                <Link
                  href="https://drive.google.com/file/d/1WJL6JMRYZ3zIFpN9EmlhLyo2I2fwTPR4/view?usp=share_link"
                  target="_blank"
                >
                  here!
                </Link>
              </ResumeText>
            </span>
          </AboutSectionContainer>
        </AboutHeaderText>
      </Fade>
    </AboutContainer>
  );
});

export default NewAbout;
