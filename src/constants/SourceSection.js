import styled from "styled-components";
import device from "./Device";

const SourceSection = styled.div`
  text-align: center;

  @media ${device.mobileS} {
    font-size: 11px;
  }

  @media ${device.laptop} {
    font-size: 16px;
    margin-right: 3rem;
  }
`;

export default SourceSection;
