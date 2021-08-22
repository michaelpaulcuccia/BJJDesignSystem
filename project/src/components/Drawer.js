import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";
//import { GatsbyImage} from "gatsby-plugin-image"
import mount from "../images/mount.png";

const Container = styled.div`
  height: 300px;
  width: 350px;
  background: ${colors.MEDIUM_DARK};
  position: absolute;

  img {
    height: 185px;
    width: 200px;
  }
`;

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.LIGHT};

  &:hover {
    color: ${colors.BRIGHT};
  }

  ul {
    padding-top: 35px;

    li {
      list-style-type: none;
      padding-bottom: 5px;
      padding-left: 25px;
      font-size: 22px;
    }
  }
`;

const Drawer = (props) => {
  const removedSlash = props.linkAddress.substring(1);
  console.log(removedSlash);

  return (
    <Container>
      <StyledLink to={props.linkAddress}>
        <ul>
          <li>{removedSlash}</li>
        </ul>
      </StyledLink>
      <img src={mount} alt="mount" />
    </Container>
  );
};

export default Drawer;
