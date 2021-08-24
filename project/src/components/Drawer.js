import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";

const Container = styled.div`
  height: 310px;
  width: 200px;
  border-radius: 5px;
  background: ${colors.LIGHT_DARK};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: flex-end;

  img {
    height: 150px;
    width: 195px;
    padding-top: 15px;
  }
`;

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.DARK};

  ul {
    padding-top: 50px;

    //Item at the Top of the Drawer
    .drawer-head {
      list-style-type: none;
      padding-left: 25px;
      font-size: 26px;

          &:hover {
          color: ${colors.BRIGHT};
        }
    }

    //Nested ul
    .link-items-ul {
      padding-top: 15px;
      padding-left: 25px;
      font-size: 24px;
      list-style-type: none;

      li {
        &:hover {
          color: ${colors.BRIGHT};
        }
        &::before{
          content: '›';
          padding-right: 5px;
        }
      }
    }
  }
`;

const ListItemLink = styled(GatsbyLink)`
  color: blue;
`;

const Drawer = (props) => {

  const removedSlash = props.linkAddress.substring(1);
  
  return (
    <Container>
      <StyledLink to={props.linkAddress}>
        <ul>
          <li className='drawer-head'>{removedSlash}</li>
          <ul className='link-items-ul'>
            <li><ListItemLink to={props.sweepsAddress}>Sweeps</ListItemLink></li>
            <li>Submissions</li>
          </ul>
        </ul>
      </StyledLink>
      <img src={props.useImage} alt={removedSlash} />
    </Container>
  );
};

export default Drawer;
