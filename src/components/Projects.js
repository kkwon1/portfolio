import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Link from '../constants/Link'
import { IoIosArrowDown } from "react-icons/io";
import { MdAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SkillContainer, SkillPill } from '../constants/Skills';
import device from '../constants/Device';
import Dialog from '@material-ui/core/Dialog';

const ProjectsContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  height: max-content;
  padding-top: 5%;
  background: #FFF;

  @media ${device.mobileS} {
    padding: 5%;
  }

  @media ${device.laptop} {
    padding-left: 20%;
  }
`

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
`

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
`

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
`

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
`


const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const BottomRowContainer = styled.div`
  display: flex;
  align-items: center;
`

const ProjectText = styled.p`
  @media ${device.mobileS} {
    font-size: 13px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }
`

const SourceSectionContainer = styled.div`
  display: flex;
  flex-grow: 2;
`

const SourceSection = styled.div`
  text-align: center;

  @media ${device.mobileS} {
    font-size: 11px;
  }

  @media ${device.laptop} {
    flex-grow: 1;
    font-size: 16px;
  }
`

const projectItemStyle = {
  "box-shadow": "0px 0px 5px 0px rgba(0,0,0, 0.37)",
  "margin-bottom": "2vh",
  "border-radius": "3px"
};

function Projects() {
  return(
    <ProjectsContainer>
      <Fade left>
        <ProjectsHeader>PERSONAL PROJECTS</ProjectsHeader>
        <ProjectItemsContainer>
          <ExpansionPanel style={projectItemStyle}>
              <ExpansionPanelSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ProjectTitle>
                  <IconContainer>
                    <FaLaptopCode/>
                  </IconContainer>
                  Portfolio
                </ProjectTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ProjectInfoContainer>
                  <ProjectText>
                    A personal webpage I have created after being inspired by other awesome webpages such as
                    <Link href="https://jzhao.xyz/" target="_blank"> Jacky's </Link>
                    and <Link href="http://findmatthew.com/" target="_blank">Matthew's</Link>.
                    I wanted to build a responsive and interactive webpage that details my experiences,
                    projects and contact information. Feel free to send me any feedback!
                    Next steps would be to make sure the webpage looks and feels good on a mobile device.
                  </ProjectText>
                  <BottomRowContainer>
                    <SkillContainer>
                      <SkillPill>React</SkillPill>
                      <SkillPill>HTML</SkillPill>
                      <SkillPill>CSS</SkillPill>
                    </SkillContainer>
                    <SourceSectionContainer>
                      <SourceSection>
                        <Link href="https://github.com/kkwon1/portfolio" target="_blank">
                          [Source Code]
                        </Link>
                      </SourceSection>
                    </SourceSectionContainer>
                  </BottomRowContainer>
                </ProjectInfoContainer>
              </ExpansionPanelDetails>
            </ExpansionPanel>

          <ExpansionPanel style={projectItemStyle}>
              <ExpansionPanelSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ProjectTitle>
                  <IconContainer>
                    <FaLaptopCode/>
                  </IconContainer>
                  APOD Viewer
                </ProjectTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ProjectInfoContainer>
                  <ProjectText>
                    A simple web-application created using <Link href="https://api.nasa.gov/" target="_blank">NASA's open API</Link>.
                    It allows users to navigate through the different Astronomy Picture of the Day (APOD), in a more user friendly
                    manner than the current <Link href="https://apod.nasa.gov/apod/astropix.html" target="_blank">existing version</Link>.
                    Next steps will allow user creation, liking/saving pictures and viewing multiple photos at once.
                  </ProjectText>
                  <BottomRowContainer>
                    <SkillContainer>
                      <SkillPill>React</SkillPill>
                      <SkillPill>Golang</SkillPill>
                      <SkillPill>JavaScript</SkillPill>
                      <SkillPill>MongoDB</SkillPill>
                      <SkillPill>Web App</SkillPill>
                    </SkillContainer>
                    <SourceSectionContainer>
                      <SourceSection>
                        <Link href="https://github.com/kkwon1/APODViewer" target="_blank">
                          [Web App]
                        </Link>
                      </SourceSection>
                      <SourceSection>
                        <Link href="https://github.com/kkwon1/APODViewerService" target="_blank">
                          [Backend Server]
                        </Link>
                      </SourceSection>
                    </SourceSectionContainer>
                  </BottomRowContainer>
                </ProjectInfoContainer>
              </ExpansionPanelDetails>
            </ExpansionPanel>

          <ExpansionPanel style={projectItemStyle}>
            <ExpansionPanelSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ProjectTitle>
                <IconContainer>
                  <MdAndroid/>
                </IconContainer>
                Fridge Manager
              </ProjectTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ProjectInfoContainer>
                <ProjectText>
                  An android app created to manage ingredients in your fridge. Backend server ran on an AWS EC2 instance
                  using Express.js with MongoDB for data persistance. Users would be able to store ingredients,
                  create grocery lists, share fridge with other family members. The android app was built using Java,
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
                  <SourceSectionContainer>
                    <SourceSection>
                      <Link href="https://github.com/ericjang96/fridge-manager-android" target="_blank">
                        [Android App]
                      </Link>
                    </SourceSection>
                      <SourceSection>
                      <Link href="https://github.com/ericjang96/fridge-manager-android" target="_blank">
                        [Backend Server]
                      </Link>
                    </SourceSection>
                  </SourceSectionContainer>
                 </BottomRowContainer>
              </ProjectInfoContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </ProjectItemsContainer>
      </Fade>
    </ProjectsContainer>
  )
}

export default Projects;