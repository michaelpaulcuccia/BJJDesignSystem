import React from "react";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";

const ProjectContainer = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  min-height: 100vh;
  background: ${colors.LIGHT_DARK};
`;

const layout = (props) => {
  return <ProjectContainer>{props.children}</ProjectContainer>;
};

export default layout;
