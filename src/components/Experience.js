import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Hootsuite from '../resources/hootsuite-logo.png';
import SAP from '../resources/sap-logo.png';
import Orbis from '../resources/orbis-logo.png';

const ExperienceContainer = styled.div`
  text-align: center;
  padding-left: 25vw;
`

const ExperienceHeader = styled.div`
  font-size: 48px;
  text-align: left;
  margin-top: 5%;
  width: 14vw;
`

const ExperienceItem = styled.div`
  text-align: left;
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const ExperienceText = styled.p`
  font-size: 18px;
`

function Experience() {
  return(
    <ExperienceContainer>
      <Fade left>
        <ExperienceHeader>
          EXPERIENCE
        </ExperienceHeader>
        <ExperienceItem>
          <img style={{width: "54px", height: "75px"}} src={Hootsuite} alt="Hootsuite"></img>
          <ExperienceText>Hello this is some example text to see how this webpage would respond to it</ExperienceText>
        </ExperienceItem>
        <ExperienceItem>
          <img style={{width: "150px", height: "75px"}} src={SAP} alt="SAP"></img>
        </ExperienceItem>
        <ExperienceItem>
          <img style={{width: "75px", height: "75px"}} src={Orbis} alt="Orbis"></img>
        </ExperienceItem>
      </Fade>
    </ExperienceContainer>
  )
}

export default Experience;