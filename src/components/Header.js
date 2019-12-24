import React from 'react';
import styled, { keyframes } from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";

const HeaderContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  color: white;
  user-select: none;
`

const Greeting = styled.div`
  font-weight: 300;
  font-size: 75px;
`

const Occupation = styled.div`
  font-weight: 300;
  font-size: 48px;
  margin: 10px;
`

const ChevronKeyFrames = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
`

const AnimatedChevron = styled(IoIosArrowDown)`
  font-size: 48px;
  margin-top: 5%;
  animation: ${ChevronKeyFrames} 2s ease-in-out 0s infinite;
  cursor: pointer;
`

function Header() {
  return (
    <HeaderContainer>
      <Greeting>Hey, I'm Kevin Kwon!</Greeting>
      <Occupation>Software Developer</Occupation>
      <AnimatedChevron/>
    </HeaderContainer>
  );
}

export default Header;
