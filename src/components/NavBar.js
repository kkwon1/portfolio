import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-scroll";
import device from "../constants/Device";

const StickyNavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  color: white;
  background-color: white;

  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const DefaultNavbarContainer = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  color: white;
  background-color: white;

  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 70%;
  }
`;

const LinkItem = styled(Link)`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 3%;
  margin-right: 3%;
  cursor: pointer;
`;

const NavBar = (props) => {
  const [isSticky, setSticky] = useState(false);

  const MyAppBar = (
    <AppBar
      style={{
        backgroundColor: "#1F2336",
        borderBottom: "3px solid #FCCFAC",
      }}
      position="static"
      smooth="easeInOutQuad"
    >
      <Toolbar variant="dense">
        <LinkContainer>
          <LinkItem
            activeClass="active"
            to="about"
            spy={true}
            smooth="easeInOutQuad"
            duration={750}
          >
            About
          </LinkItem>
          <LinkItem
            activeClass="active"
            to="experience"
            spy={true}
            smooth="easeInOutQuad"
            duration={750}
          >
            Experience
          </LinkItem>
          <LinkItem
            activeClass="active"
            to="projects"
            spy={true}
            smooth="easeInOutQuad"
            duration={750}
          >
            Personal Projects
          </LinkItem>
          <LinkItem
            activeClass="active"
            to="footer"
            spy={true}
            smooth="easeInOutQuad"
            duration={750}
          >
            Contact
          </LinkItem>
        </LinkContainer>
      </Toolbar>
    </AppBar>
  );

  useEffect(() => {
    setSticky(props.isSticky);
  }, [props.isSticky, props.offset]);

  return (
    <div style={{ height: "52px" }}>
      {isSticky ? (
        <StickyNavbarContainer>{MyAppBar}</StickyNavbarContainer>
      ) : (
        <DefaultNavbarContainer>{MyAppBar}</DefaultNavbarContainer>
      )}
    </div>
  );
};

export default NavBar;
