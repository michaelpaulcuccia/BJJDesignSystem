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

  .imageContainer {

    background: ${colors.CLOUDY};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;

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
          color: ${colors.BRIGHT};
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
  text-decoration: none;
  color: ${colors.DARK};

  &:hover {
    color: ${colors.BRIGHT};
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
