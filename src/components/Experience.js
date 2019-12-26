import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Hootsuite from '../resources/hootsuite-logo.png';
import SAP from '../resources/sap-logo.png';
import Orbis from '../resources/orbis-logo.png';
import { IoIosRocket } from 'react-icons/io';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  height: 10vw;
`

const ExperienceHeader = styled.div`
  font-size: 54px;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
  width: 14%;
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

const ExperienceElement = styled(VerticalTimelineElement)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const ExperienceItemHeader = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`

function Experience() {
  return(
    <div>
      <ExperienceContainer>
        <Fade left>
        <ExperienceHeader>
          EXPERIENCE
        </ExperienceHeader>
        </Fade>
      </ExperienceContainer>
      <VerticalTimeline
        layout="1-column"
      >
        <ExperienceElement
          date="May 2019 - Dec 2019"
          iconStyle={{ background: '#FCCFAC' }}
        >
          <ExperienceItemHeader>
            <img style={
              {width: "36px", height: "50px", "margin-left": "2%", "margin-right": "5%"}
            } src={Hootsuite} alt="Hootsuite"></img>
            <h3 style={{"font-weight": "400"}}>Hootsuite</h3>
          </ExperienceItemHeader>
          <h4 style={{"font-weight": "600"}}>Software Developer Intern</h4>
          <p style={{"font-weight": "400", "margin-bottom": "2%"}}>
            Example text about my experience at this company.
          </p>
        </ExperienceElement>
        <ExperienceElement
          date="Sep 2018 - Apr 2019"
          iconStyle={{ background: '#FCCFAC' }}
        >
          <ExperienceItemHeader>
            <img style={
              {width: "80px", height: "40px", "margin-left": "2%", "margin-right": "5%"}
            } src={SAP} alt="SAP"></img>
            <h3 style={{"font-weight": "400"}}>SAP</h3>
          </ExperienceItemHeader>
          <h4 style={{"font-weight": "600"}}>Software Developer Intern</h4>
          <p style={{"font-weight": "400", "margin-bottom": "2%"}}>
            Example text about my experience at this company.
          </p>
        </ExperienceElement>
        <ExperienceElement
          date="Jan 2018 - Apr 2018"
          iconStyle={{ background: '#FCCFAC' }}
        >
          <ExperienceItemHeader>
            <img style={
              {width: "40px", height: "40px", "margin-left": "2%", "margin-right": "5%"}
            } src={Orbis} alt="Orbis"></img>
            <h3 style={{"font-weight": "400"}}>Orbis Investments</h3>
          </ExperienceItemHeader>
          <h4 style={{"font-weight": "600"}}>Software Developer Intern</h4>
          <p style={{"font-weight": "400", "margin-bottom": "2%"}}>
            Example text about my experience at this company.
          </p>
        </ExperienceElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;