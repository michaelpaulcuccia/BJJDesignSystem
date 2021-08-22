import React, { useState } from "react";
//import { Link } from "gatsby";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";
import Drawer from "./Drawer";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${colors.DARK};
  display: flex;
`;

const HomeSection = styled.div`
  height: 100%;
  width: 50%;
  background: ${colors.MEDIUM_DARK};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const LinkSection = styled.div`
  height: 100%;
  width: 50%;
  background: ${colors.MEDIUM_DARK};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Tags = styled.div`
  font-size: 26px;
  color: ${colors.LIGHT};
  position: relative;
`;

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.LIGHT};

  &:hover {
    color: ${colors.BRIGHT};
  }
`;

const Header = () => {
  const [showClosedGuardDrawer, setShowClosedDrawerGuard] = useState(false);
  const [showMountDrawer, setShowMountDrawer] = useState(false);

  return (
    <Container>
      <HomeSection>
        <Tags>
          <StyledLink to="/">Home</StyledLink>
        </Tags>
      </HomeSection>
      <LinkSection>
        <Tags onClick={() => setShowClosedDrawerGuard(!showClosedGuardDrawer)}>
          Closed Guard
          {showClosedGuardDrawer && <Drawer linkAddress="/ClosedGuard" />}
        </Tags>
        <Tags onClick={() => setShowMountDrawer(!showMountDrawer)}>
          Mount
          {showMountDrawer && <Drawer linkAddress="/Mount" />}
        </Tags>
        <Tags>Half Guard</Tags>
      </LinkSection>
    </Container>
  );
};

export default Header;

/*
Styled Link example for later..
<StyledLink to="/ClosedGuard">ClosedGuard</StyledLink> 
*/
