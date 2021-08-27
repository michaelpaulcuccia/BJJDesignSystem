import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import * as colors from "../constants/StyleConsts";

const Container = styled.div`
  height: 310px;
  width: 200px;
  border-radius: 5px;
  background: ${colors.BRIGHT};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  //put drawer on top of hero's overlay
  z-index: 2;

  .imageContainer {

    background: ${colors.CLOUDY};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    //put drawer on top of hero's overlay
    z-index: 2;

      img {
        height: 75%;
        width: 75%;
        padding-top: 15px;
      }

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
          color: ${colors.LIGHT_DARK};
        }
    }

    //Nested ul
    .link-items-ul {
      padding-top: 15px;
      padding-bottom: 10px;
      padding-left: 25px;
      font-size: 24px;
      list-style-type: none;

      li {
        &:hover {
          color: ${colors.LIGHT_DARK};
        }
        &::before{
          content: '›';
          //font-family needed to change in order to keep shape of caret
          font-family: Arial, Helvetica, sans-serif;
          padding-right: 5px;
        }
      }
    }
  }
`;

const ListItemLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.DARK};

  &:hover {
    color: ${colors.LIGHT_DARK};
  }

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
            <li><ListItemLink to={props.submissionsAddress}>Submissions</ListItemLink></li>
          </ul>
        </ul>
      </StyledLink>
      <div className='imageContainer'>
        <img src={props.useImage} alt={removedSlash} />
      </div>
    </Container>
  );
};

export default Drawer;
