import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, Events, scrollSpy } from "react-scroll";
import device from "../constants/Device";

const NavbarContainer = styled.div`
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

class NavBar extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <NavbarContainer>
        <AppBar
          style={{
            backgroundColor: "#1F2336",
            borderBottom: "3px solid #FCCFAC",
          }}
          position="static"
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
      </NavbarContainer>
    );
  }
}

export default NavBar;
