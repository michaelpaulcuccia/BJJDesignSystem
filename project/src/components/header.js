import React, { useState, useEffect } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";
import Drawer from "./Drawer";
import mount from "../images/mount-top.png";
import closedguardbottom from '../images/closed-guard-bottom.png';
import halfguard from '../images/half-guard.png';

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

const HomeSection = styled.div`
  height: 100%;
  width: 20%;
  background: ${colors.LIGHT_DARK};
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
  width: 80%;
  padding-right: 75px;
  background: ${colors.LIGHT_DARK};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Tags = styled.div`
  font-size: 22px;
  color: ${colors.DARK};
  position: relative;
  padding-right: 50px;
`;

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.DARK};

  &:hover {
    color: ${colors.BRIGHT};
  }
`;

const Header = () => {

  const [showClosedGuardDrawer, setShowClosedDrawerGuard] = useState(false);
  const [showMountDrawer, setShowMountDrawer] = useState(false);
  const [showHalfGuardDrawer, setShowHalfGuardDrawer] = useState(false);

  //handles closing drawers when a new one opens
  useEffect(()=> {

    if(showClosedGuardDrawer){
      setShowMountDrawer(false);
      setShowHalfGuardDrawer(false);
    }

    if(showMountDrawer){
      setShowClosedDrawerGuard(false);
      setShowHalfGuardDrawer(false);
    }

    if(showHalfGuardDrawer){
      setShowClosedDrawerGuard(false);
      setShowMountDrawer(false);
    }

  }, [showClosedGuardDrawer, showMountDrawer, showHalfGuardDrawer]);
 

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
          {showClosedGuardDrawer && <Drawer linkAddress="/ClosedGuard" useImage={closedguardbottom}/>}
        </Tags>
        <Tags onClick={() => setShowMountDrawer(!showMountDrawer)}>
          Mount
          {showMountDrawer && <Drawer linkAddress="/Mount" useImage={mount}/>}
        </Tags>
        <Tags onClick={() => setShowHalfGuardDrawer(!showHalfGuardDrawer)}>
          Half Guard
          {showHalfGuardDrawer && <Drawer linkAddress="/HalfGuard" useImage={halfguard}/>}
          </Tags>
      </LinkSection>
    </Container>
  );
};

export default Header;

