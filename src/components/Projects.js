import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { IoIosArrowDown } from "react-icons/io";
import { MdAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SkillContainer, SkillPill } from '../constants/Skills';

const ProjectsContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  height: 100vh;
  padding-top: 5%;
  background: #FFF;
`

const ProjectsHeader = styled.div`
  font-size: 6vh;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
`

const ProjectItemContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
`

const ProjectTitle = styled.h2`
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
    <div>
      <ProjectsContainer>
        <Fade left>
          <ProjectsHeader>PERSONAL PROJECTS</ProjectsHeader>
          <ProjectItemContainer>
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
                <div style={{"display": "flex", "flex-direction": "column"}}>
                  <Typography style={{"display": "flex", "text-align": "left"}}>
                    An android app created to manage ingredients in your fridge. Backend server ran on an AWS EC2 instance
                    using Express.js with MongoDB for data persistance. Users would be able to store ingredients,
                    create grocery lists, share fridge with other family members. The android app was built using Java,
                    making Http calls to the backend API.
                  </Typography>
                  <SkillContainer>
                    <SkillPill>Java</SkillPill>
                    <SkillPill>JavaScript</SkillPill>
                    <SkillPill>MongoDB</SkillPill>
                    <SkillPill>Express.js</SkillPill>
                    <SkillPill>Android Dev</SkillPill>
                    <SkillPill>MVP</SkillPill>
                  </SkillContainer>
                </div>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ProjectItemContainer>
        </Fade>
      </ProjectsContainer>
    </div>
  )
}

export default Projects;