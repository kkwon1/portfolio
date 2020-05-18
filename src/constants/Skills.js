import styled from "styled-components";
import device from "./Device";

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media ${device.mobileS} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: 70%;
  }
`;

const SkillPill = styled.div`
  font-weight: 600;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  text-align: center;
  background-color: #fccfac;
  border-radius: 5px;
  margin-right: 2%;
  margin-top: 2%;

  @media ${device.mobileS} {
    font-size: 12px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export { SkillContainer, SkillPill };
