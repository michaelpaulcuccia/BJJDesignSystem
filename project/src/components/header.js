import React from "react";
//import { Link } from "gatsby";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${colors.DARK};
  display: flex;
`;

const HomeSection = styled.div`
  height: 100%;
  width: 50%;
  background: ${colors.LIGHT_DARK};
`;

const LinkSection = styled.div`
  height: 100%;
  width: 50%;
  background: ${colors.MEDIUM_DARK};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
`;

const Tags = styled.div`
  padding: 15px;
  font-size: 26px;
  color: ${colors.LIGHT};
`;

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.LIGHT};

  &:hover {
    color: ${colors.BRIGHT};
  }
`;

const header = () => {
  return (
    <Container>
      <HomeSection></HomeSection>
      <LinkSection>
        <Tags>
          <StyledLink to="/ClosedGuard">ClosedGuard</StyledLink>
        </Tags>
        <Tags>Half Guard</Tags>
        <Tags>Mount</Tags>
      </LinkSection>
    </Container>
  );
};

export default header;
