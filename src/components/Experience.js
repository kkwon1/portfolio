import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Hootsuite from "../resources/hootsuite-logo.png";
import SAP from "../resources/sap-logo.png";
import Orbis from "../resources/orbis-logo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SkillContainer, SkillPill } from "../constants/Skills";
import device from "../constants/Device";

const ExperienceContainer = styled.div`
  height: 100%;
  padding-bottom: 100px;
`;

const ExperienceHeaderContainer = styled.div`
  text-align: center;
  padding-bottom: 5%;

  @media ${device.mobileS} {
    padding: 5%;
  }

  @media ${device.laptop} {
    padding-left: 20%;
  }
`;

const ExperienceHeader = styled.div`
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

const ExperienceElement = styled(VerticalTimelineElement)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const ExperienceItemHeader = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

const CompanyLogo = styled.img`
  margin-left: 2%;
  margin-right: 5%;
`;

const CompanyName = styled.h3`
  font-weight: 400;
`;

const PositionTitle = styled.h4`
  font-weight: 600;

  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const experienceTextStyle = { fontWeight: "400", marginBottom: "2%" };
const experienceItemContentStyle = {
  boxShadow: "0px 0px 5px 0px rgba(0,0,0, 0.37)",
};

function Experience() {
  return (
    <ExperienceContainer>
      <ExperienceHeaderContainer>
        <Fade right>
          <ExperienceHeader>EXPERIENCE</ExperienceHeader>
        </Fade>
      </ExperienceHeaderContainer>

      <VerticalTimeline layout="1-column">
        <ExperienceElement
          date="May 2019 - Dec 2019"
          iconStyle={{ background: "#FCCFAC" }}
          contentStyle={experienceItemContentStyle}
          contentArrowStyle={{ display: "none" }}
        >
          <ExperienceItemHeader>
            <CompanyLogo
              style={{ width: "36px", height: "50px" }}
              src={Hootsuite}
              alt="Hootsuite"
            ></CompanyLogo>
            <CompanyName>Hootsuite</CompanyName>
          </ExperienceItemHeader>
          <PositionTitle>Software Developer Intern - Full Stack</PositionTitle>
          <p style={experienceTextStyle}>
            Extended Hootsuite's video capabilities by allowing users to upload
            MOV video formats which now account for ~7% of total videos
            uploaded. Designed and implemented a new Scala microservice for
            resolving video bitrate and resolution limitations. Provisioned and
            integrated various AWS services required with the new service.
          </p>
          <SkillContainer>
            <SkillPill>Scala</SkillPill>
            <SkillPill>React</SkillPill>
            <SkillPill>JavaScript</SkillPill>
            <SkillPill>AWS</SkillPill>
            <SkillPill>Terraform</SkillPill>
            <SkillPill>Kubernetes</SkillPill>
            <SkillPill>Docker</SkillPill>
          </SkillContainer>
        </ExperienceElement>
        <ExperienceElement
          date="Sep 2018 - Apr 2019"
          iconStyle={{ background: "#FCCFAC" }}
          contentStyle={experienceItemContentStyle}
          contentArrowStyle={{ display: "none" }}
        >
          <ExperienceItemHeader>
            <CompanyLogo
              style={{ width: "80px", height: "40px" }}
              src={SAP}
              alt="SAP"
            ></CompanyLogo>
            <CompanyName>SAP</CompanyName>
          </ExperienceItemHeader>
          <PositionTitle>Software Developer Intern - Full Stack</PositionTitle>
          <p style={experienceTextStyle}>
            Worked on the SAP Analytics Cloud product as part of an
            infrastructure team. Implemented an event-driven solution for
            recording file permission changes in the audit log. Improved file
            sharing and file permission inheritance workflow by creating new UI
            components and creating new API endpoints.
          </p>
          <SkillContainer>
            <SkillPill>JavaScript</SkillPill>
            <SkillPill>XSJS</SkillPill>
            <SkillPill>SAPUI5</SkillPill>
            <SkillPill>Java</SkillPill>
            <SkillPill>SQL</SkillPill>
          </SkillContainer>
        </ExperienceElement>
        <ExperienceElement
          date="Jan 2018 - Apr 2018"
          iconStyle={{ background: "#FCCFAC" }}
          contentStyle={experienceItemContentStyle}
          contentArrowStyle={{ display: "none" }}
        >
          <ExperienceItemHeader>
            <CompanyLogo
              style={{ width: "40px", height: "40px" }}
              src={Orbis}
              alt="Orbis"
            ></CompanyLogo>
            <CompanyName>Orbis Investments</CompanyName>
          </ExperienceItemHeader>
          <PositionTitle>Software Developer Intern</PositionTitle>
          <p style={experienceTextStyle}>
            Built software for client report generation for the Reporting
            Business team. Worked with two report generators: Re-implemented a
            report generator for Australian clients from Visual Basic to C# and
            integrated with new services. Added support for individual bespoke
            report generation. Originally it could only generate in monthly,
            quarterly, or annual batches.
          </p>
          <SkillContainer>
            <SkillPill>C#</SkillPill>
            <SkillPill>Visual Basic</SkillPill>
            <SkillPill>.NET</SkillPill>
            <SkillPill>SQL</SkillPill>
          </SkillContainer>
        </ExperienceElement>
      </VerticalTimeline>
    </ExperienceContainer>
  );
}

export default Experience;
