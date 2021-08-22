import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";
//import { GatsbyImage} from "gatsby-plugin-image"
import mount from "../images/mount.png";

const Container = styled.div`
  height: 350px;
  width: 300px;
  background: ${colors.MEDIUM_DARK};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: flex-end;

  img {
    height: 150px;
    width: 195px;
    padding-left: 25px;
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

    //Nested ul
    ul {
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 15px;
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
          <ul>
            <li>Sweeps</li>
            <li>Submissions</li>
          </ul>
        </ul>
      </StyledLink>
      <img src={mount} alt="mount" />
    </Container>
  );
};

export default Drawer;
