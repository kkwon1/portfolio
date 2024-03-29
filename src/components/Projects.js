import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Link from "../constants/Link";
import { IoIosArrowDown } from "react-icons/io";
import { MdAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SkillContainer, SkillPill } from "../constants/Skills";
import device from "../constants/Device";
import SourceSectionContainer from "./SourceSectionContainer";

const ProjectsContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  height: max-content;
  padding-top: 5%;
  background: #fff;

  @media ${device.mobileS} {
    padding: 5%;
  }

  @media ${device.laptop} {
    padding-left: 20%;
  }
`;

const ProjectsHeader = styled.div`
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

const ProjectItemsContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20vh;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 60vw;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  width: 100%;

  @media ${device.mobileS} {
    font-size: 18px;
    height: 40px;
  }

  @media ${device.laptop} {
    font-size: 28px;
    height: 75px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 5%;

  @media ${device.mobileS} {
    font-size: 24px;
    margin-right: 10%;
  }

  @media ${device.laptop} {
    font-size: 36px;
    margin-right: 5%;
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const BottomRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectText = styled.p`
  @media ${device.mobileS} {
    font-size: 13px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }
`;

const ProjectLink = styled(Link)`
  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const projectItemStyle = {
  boxShadow: "0px 0px 5px 0px rgba(0,0,0, 0.37)",
  marginBottom: "2vh",
  borderRadius: "3px",
};

const Projects = () => {
  return (
    <ProjectsContainer>
      <Fade left>
        <ProjectsHeader>PERSONAL PROJECTS</ProjectsHeader>
        <ProjectItemsContainer>
          <Accordion style={projectItemStyle}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ProjectTitle>
                <IconContainer>
                  <FaLaptopCode />
                </IconContainer>
                APOD Forum
              </ProjectTitle>
            </AccordionSummary>
            <AccordionDetails>
              <ProjectInfoContainer>
                <ProjectLink
                  href="https://apodviewer.herokuapp.com"
                  target="_blank"
                >
                  Check out the application here!
                </ProjectLink>
                <ProjectText>
                  A{" "}
                  <Link href="https://lobste.rs/" target="_blank">
                    Lobste.rs
                  </Link>{" "}
                  clone that allows users to browse NASA Astronomy Pictures of
                  the Day (APOD) in a forum. Provides an improved UI and UX
                  compared to the{" "}
                  <Link
                    href="https://apod.nasa.gov/apod/astropix.html"
                    target="_blank"
                  >
                    official website
                  </Link>
                  . The application allows users to sign up to comment, upvote
                  and like posts. The project was built using{" "}
                  <Link href="https://api.nasa.gov/" target="_blank">
                    NASA's open API
                  </Link>
                  .
                </ProjectText>
                <BottomRowContainer>
                  <SkillContainer>
                    <SkillPill>React</SkillPill>
                    <SkillPill>Java</SkillPill>
                    <SkillPill>Docker</SkillPill>
                    <SkillPill>Auth0</SkillPill>
                    <SkillPill>Heroku</SkillPill>
                    <SkillPill>MongoDB</SkillPill>
                  </SkillContainer>
                  <SourceSectionContainer
                    hasMultiple={true}
                    frontendUrl={
                      "https://github.com/kkwon1/apod-forum-frontend"
                    }
                    backendUrl={"https://github.com/kkwon1/ApodForumBackend"}
                  />
                </BottomRowContainer>
              </ProjectInfoContainer>
            </AccordionDetails>
          </Accordion>

          <Accordion style={projectItemStyle}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ProjectTitle>
                <IconContainer>
                  <FaLaptopCode />
                </IconContainer>
                Portfolio
              </ProjectTitle>
            </AccordionSummary>
            <AccordionDetails>
              <ProjectInfoContainer>
                <ProjectText>
                  A personal webpage I have created using React. I wanted to
                  build a responsive and interactive webpage that details my
                  experiences, projects and contact information. Feel free to
                  send me any feedback! Next steps would be to make sure the
                  webpage looks and feels good on a mobile device.
                </ProjectText>
                <BottomRowContainer>
                  <SkillContainer>
                    <SkillPill>React</SkillPill>
                    <SkillPill>HTML</SkillPill>
                    <SkillPill>CSS</SkillPill>
                  </SkillContainer>
                  <SourceSectionContainer
                    srcUrl={"https://github.com/kkwon1/portfolio"}
                  />
                </BottomRowContainer>
              </ProjectInfoContainer>
            </AccordionDetails>
          </Accordion>

          <Accordion style={projectItemStyle}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ProjectTitle>
                <IconContainer>
                  <MdAndroid />
                </IconContainer>
                Fridge Manager
              </ProjectTitle>
            </AccordionSummary>
            <AccordionDetails>
              <ProjectInfoContainer>
                <ProjectText>
                  An android app created to manage ingredients in your fridge.
                  Backend server ran on an AWS EC2 instance using Express.js
                  with MongoDB for data persistance. Users would be able to
                  store ingredients, create grocery lists, share fridge with
                  other family members. The android app was built using Java,
                  making Http calls to the backend API.
                </ProjectText>
                <BottomRowContainer>
                  <SkillContainer>
                    <SkillPill>Java</SkillPill>
                    <SkillPill>JavaScript</SkillPill>
                    <SkillPill>MongoDB</SkillPill>
                    <SkillPill>Express.js</SkillPill>
                    <SkillPill>Android App</SkillPill>
                    <SkillPill>MVP</SkillPill>
                  </SkillContainer>
                  <SourceSectionContainer
                    hasMultiple={true}
                    frontendUrl={
                      "https://github.com/ericjang96/fridge-manager-android"
                    }
                    backendUrl={
                      "https://github.com/ericjang96/fridge-manager-backend"
                    }
                  />
                </BottomRowContainer>
              </ProjectInfoContainer>
            </AccordionDetails>
          </Accordion>
        </ProjectItemsContainer>
      </Fade>
    </ProjectsContainer>
  );
};

export default Projects;
