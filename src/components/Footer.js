import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FiFileText, FiMail } from "react-icons/fi";

const FooterContainer = styled.div`
  height: 20vh;
  background-color: #292f4b;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const IconsContainer = styled.div`
  margin-top: 2%;
  font-size: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  margin-right: 1%;
  transition: font-size 0.5s ease-out;
  &:hover {
    font-size: 7vh;
  }
`;

const CopyrightContainer = styled.p`
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <IconsContainer>
        <IconContainer>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/kevin-kwon-4885b013b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FaLinkedin />
          </a>
        </IconContainer>
        <IconContainer>
          <a
            title="Github"
            href="https://github.com/kkwon1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FaGithubSquare />
          </a>
        </IconContainer>
        <IconContainer>
          <a
            title="Resume"
            href="https://drive.google.com/file/d/1faE-55hOSf6nV9K72t8V-n4686OHZ2d8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FiFileText />
          </a>
        </IconContainer>
        <IconContainer>
          <a
            title="Email"
            href="mailto:kevinkwon1995@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FiMail />
          </a>
        </IconContainer>
      </IconsContainer>
      <CopyrightContainer> Kevin Kwon &copy; 2023</CopyrightContainer>
    </FooterContainer>
  );
}

export default Footer;
