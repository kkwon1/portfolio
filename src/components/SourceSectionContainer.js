import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import SourceMenu from "./SourceMenu";
import SourceSection from "../constants/SourceSection";
import device from "../constants/Device";
import Link from "../constants/Link";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1%;
  @media ${device.mobileS} {
    font-size: 11px;
    width: 25%;
  }

  @media ${device.laptop} {
    font-size: 16px;
    width: 30%;
    margin-right: 3rem;
  }
`;

const SourceSectionContainer = (props) => {
  const [hasMultiple, setHasMultiple] = useState(false);
  const [frontendUrl, setFrontendUrl] = useState("");
  const [backendUrl, setBackendUrl] = useState("");
  const [srcUrl, setSrcUrl] = useState("");
  let ref = useRef(null);

  useEffect(() => {
    setHasMultiple(props.hasMultiple);
    setFrontendUrl(props.frontendUrl);
    setBackendUrl(props.backendUrl);
    setSrcUrl(props.srcUrl);
  }, [props.backendUrl, props.frontendUrl, props.hasMultiple, props.srcUrl]);

  return (
    <Container>
      {hasMultiple ? (
        <SourceMenu
          ref={ref}
          frontendUrl={frontendUrl}
          backendUrl={backendUrl}
        />
      ) : (
        <SourceSection>
          <Link href={srcUrl} target="_blank">
            [Source]
          </Link>
        </SourceSection>
      )}
    </Container>
  );
};

export default SourceSectionContainer;
