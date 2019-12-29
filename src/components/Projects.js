import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Link from '../constants/Link'
import { IoIosArrowDown } from "react-icons/io";
import { MdAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SkillContainer, SkillPill } from '../constants/Skills';

const ProjectsContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  min-height: 100vh;
  height: max-content;
  padding-top: 5%;
  background: #FFF;
`

const ProjectsHeader = styled.div`
  font-size: 6vh;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
`

const ProjectItemsContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  padding-bottom: 20vh;
`

const ProjectTitle = styled.h2`
  display: flex;
  align-items: center;
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
                  <FaLaptopCode style={{"font-size": "36px", "margin-right": "2vw"}}/>
                  Portfolio
                </ProjectTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ProjectInfoContainer>
                  <Typography>
                    A personal webpage I have created after being inspired by other awesome webpages such as
                    <Link href="https://jzhao.xyz/" target="_blank"> Jacky's </Link>
                    and <Link href="http://findmatthew.com/" target="_blank">Matthew's</Link>.
                    I wanted to build a responsive and interactive webpage that details my experiences,
                    projects and contact information. Feel free to send me any feedback!
                    Next steps would be to make sure the webpage looks and feels good on a mobile device.
                  </Typography>
                  <BottomRowContainer>
                    <SkillContainer>
                      <SkillPill>React</SkillPill>
                      <SkillPill>HTML/CSS</SkillPill>
                      <SkillPill>Styled Components</SkillPill>
                    </SkillContainer>
                    <Typography style={{"flex-grow": "1", "text-align": "center"}}>
                      <Link href="https://github.com/kkwon1/portfolio" target="_blank">
                        [Source Code]
                      </Link>
                    </Typography>
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
                  <FaLaptopCode style={{"font-size": "36px", "margin-right": "2vw"}}/>
                  APOD Viewer
                </ProjectTitle>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ProjectInfoContainer>
                  <Typography>
                    A simple web-application created using <Link href="https://api.nasa.gov/" target="_blank">NASA's open API</Link>.
                    It allows users to navigate through the different Astronomy Picture of the Day (APOD), in a more user friendly
                    manner than the current <Link href="https://apod.nasa.gov/apod/astropix.html" target="_blank">existing version</Link>.
                    Next steps will allow user creation, liking/saving pictures and viewing multiple photos at once.
                  </Typography>
                  <BottomRowContainer>
                    <SkillContainer>
                      <SkillPill>React</SkillPill>
                      <SkillPill>Golang</SkillPill>
                      <SkillPill>JavaScript</SkillPill>
                      <SkillPill>MongoDB</SkillPill>
                      <SkillPill>Web App</SkillPill>
                    </SkillContainer>
                    <Typography style={{"flex-grow": "1", "text-align": "center"}}>
                      <Link href="https://github.com/kkwon1/APODViewer" target="_blank">
                        [Web App]
                      </Link>
                    </Typography>
                    <Typography style={{"flex-grow": "1", "text-align": "center"}}>
                      <Link href="https://github.com/kkwon1/APODViewerService" target="_blank">
                        [Backend Server]
                      </Link>
                    </Typography>
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
                <MdAndroid style={{"font-size": "36px", "margin-right": "2vw"}}/>
                Fridge Manager
              </ProjectTitle>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ProjectInfoContainer>
                <Typography>
                  An android app created to manage ingredients in your fridge. Backend server ran on an AWS EC2 instance
                  using Express.js with MongoDB for data persistance. Users would be able to store ingredients,
                  create grocery lists, share fridge with other family members. The android app was built using Java,
                  making Http calls to the backend API.
                </Typography>
                <BottomRowContainer>
                  <SkillContainer>
                    <SkillPill>Java</SkillPill>
                    <SkillPill>JavaScript</SkillPill>
                    <SkillPill>MongoDB</SkillPill>
                    <SkillPill>Express.js</SkillPill>
                    <SkillPill>Android App</SkillPill>
                    <SkillPill>MVP</SkillPill>
                  </SkillContainer>
                  <Typography style={{"flex-grow": "1", "text-align": "center"}}>
                    <Link href="https://github.com/ericjang96/fridge-manager-android" target="_blank">
                      [Android App]
                    </Link>
                  </Typography>
                  <Typography style={{"flex-grow": "1", "text-align": "center"}}>
                    <Link href="https://github.com/ericjang96/fridge-manager-android" target="_blank">
                      [Backend Server]
                    </Link>
                  </Typography>
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