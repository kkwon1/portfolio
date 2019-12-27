import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Hootsuite from '../resources/hootsuite-logo.png';
import SAP from '../resources/sap-logo.png';
import Orbis from '../resources/orbis-logo.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceContainer = styled.div`
  height: 100%;
  padding-bottom: 100px;
`

const ExperienceHeaderContainer = styled.div`
  text-align: center;
  padding-left: 20%;
  padding-bottom: 5%;
`

const ExperienceHeader = styled.div`
  font-size: 54px;
  font-weight: 200;
  text-align: left;
  margin-top: 5%;
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

const CompanyLogo = styled.img`
  margin-left: 2%;
  margin-right: 5%;
`

const CompanyName = styled.h3`
  font-weight: 400
`

const PositionTitle = styled.h4`
  font-weight: 600;
`

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SkillBox = styled.h6`
  font-size: 16px;
  font-weight: 600;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  text-align: center;
  background-color: #FCCFAC;
  border-radius: 7%;
  margin-right: 2%;
`

const experienceTextStyle = {"font-weight": "400", "margin-bottom": "2%"};
const experienceItemContentStyle = { "box-shadow": "0px 0px 5px 0px rgba(0,0,0, 0.37)" };

function Experience() {
  return(
    <ExperienceContainer>
      <ExperienceHeaderContainer>
        <Fade right>
          <ExperienceHeader>
            EXPERIENCE
          </ExperienceHeader>
        </Fade>
      </ExperienceHeaderContainer>

      <VerticalTimeline
      layout="1-column"
      >
        <ExperienceElement
          date="May 2019 - Dec 2019"
          iconStyle={{ background: '#FCCFAC' }}
          contentStyle = {experienceItemContentStyle}
          contentArrowStyle={{ display: "none" }}
        >
          <ExperienceItemHeader>
            <CompanyLogo style={
              {width: "36px", height: "50px"}
            } src={Hootsuite} alt="Hootsuite"></CompanyLogo>
            <CompanyName>Hootsuite</CompanyName>
          </ExperienceItemHeader>
          <PositionTitle>Software Developer Intern - Full Stack</PositionTitle>
          <p style={experienceTextStyle}>
            Extended Hootsuite's video capabilities by allowing users to upload MOV video formats
            which now account for ~7% of total videos uploaded.
            <br/>
            Designed and implemented a new Scala microservice for resolving video bitrate and resolution limitations.
            Provisioned and integrated various AWS services required with the new service.
          </p>
          <SkillContainer>
            <SkillBox>Scala</SkillBox>
            <SkillBox>React</SkillBox>
            <SkillBox>JavaScript</SkillBox>
            <SkillBox>AWS</SkillBox>
            <SkillBox>Terraform</SkillBox>
            <SkillBox>Kubernetes</SkillBox>
            <SkillBox>Docker</SkillBox>
          </SkillContainer>
        </ExperienceElement>
        <ExperienceElement
          date="Sep 2018 - Apr 2019"
          iconStyle={{ background: '#FCCFAC' }}
          contentStyle = {experienceItemContentStyle}
          contentArrowStyle={{ display: "none" }}
        >
          <ExperienceItemHeader>
            <CompanyLogo style={
              {width: "80px", height: "40px"}
            } src={SAP} alt="SAP"></CompanyLogo>
            <CompanyName>SAP</CompanyName>
          </ExperienceItemHeader>
          <PositionTitle>Software Developer Intern - Full Stack</PositionTitle>
          <p style={experienceTextStyle}>
            Worked on the SAP Analytics Cloud product as part of an infrastructure team.
            <br/>Implemented an event-driven solution for recording file permission changes in the audit log.
            Improved file sharing and file permission inheritance workflow by creating new UI components and creating
            new API endpoints.
          </p>
          <SkillContainer>
            <SkillBox>JavaScript</SkillBox>
            <SkillBox>XSJS</SkillBox>
            <SkillBox>SAPUI5</SkillBox>
            <SkillBox>Java</SkillBox>
            <SkillBox>SQL</SkillBox>
          </SkillContainer>
        </ExperienceElement>
        <ExperienceElement
          date="Jan 2018 - Apr 2018"
          iconStyle={{ background: '#FCCFAC' }}
          contentStyle = {experienceItemContentStyle}
          contentArrowStyle={{ display: "none" }}
        >
          <ExperienceItemHeader>
            <CompanyLogo style={
              {width: "40px", height: "40px"}
            } src={Orbis} alt="Orbis"></CompanyLogo>
            <CompanyName>Orbis Investments</CompanyName>
          </ExperienceItemHeader>
          <PositionTitle>Software Developer Intern</PositionTitle>
          <p style={experienceTextStyle}>
            Built software for client report generation with the Reporting Business team.
            <br/>
            Worked with two report generators: Re-implemented a report generator for Australian clients originally
            using Visual Basic into C#.
            Added support for individual bespoke report generation that originally could only generate in monthly,
            quarterly, or annual batches.
          </p>
          <SkillContainer>
            <SkillBox>C#</SkillBox>
            <SkillBox>Visual Basic</SkillBox>
            <SkillBox>.NET</SkillBox>
            <SkillBox>SQL</SkillBox>
          </SkillContainer>
        </ExperienceElement>
      </VerticalTimeline>
    </ExperienceContainer>
  )
}

export default Experience;