import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const ProjectsContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  height: 100vh;
  padding-top: 5%;
  background: #FFF;
`

const ProjectsHeader = styled.div`
  font-size: 54px;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
`

function Projects() {
  return(
    <div>
      <ProjectsContainer>
        <Fade left>
          <ProjectsHeader>PERSONAL PROJECTS</ProjectsHeader>
        </Fade>
      </ProjectsContainer>
    </div>
  )
}

export default Projects;