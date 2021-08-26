import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";
import * as colors from '../constants/StyleConsts';
import arrowRight from '../images/arrow_right.png';

const SelectBoxContainer = styled.div`
    height: 300px;
    width: 90%;
    margin-top: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 850px) {
        height: 350px;
        width: 80%;
    }

    h2 {
        color: ${colors.DARK};
        padding-top: 50px;
        letter-spacing: 3px;
        font-size: 36px;

        @media (max-width: 850px) {
            font-size: 28px;
        }
    }
`;

const ItemsContainer = styled.div`
    width: 80%;
    display: flex;
    padding-top: 50px;
    justify-content: space-evenly;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        padding-top: 5px;
    }
    
`;

const Item = styled.div`
    height: 75px;
    width: 225px;
    background: ${colors.CLOUDY};
    padding-top: 25px;
    padding-left: 50px;
    border-radius: 5px;

    @media (max-width: 1000px) {
        height: 65px;
        width: 185px;
        background: ${colors.CLOUDY};
        padding-top: 25px;
        padding-left: 35px;
    }

    @media (max-width: 850px) {
        margin-top: 10px;
        padding-left: 25px;
        width: 175px;
    }
`;

const ListItemLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.DARK};
  font-size: 22px;
  display: flex;
  align-self: baseline;

  @media (max-width: 1000px) {
        font-size: 18px;
    }

  &:hover {
    color: ${colors.LIGHT_DARK};
  }

  &::after {
      content: url(${arrowRight});
      padding-left: 10px;
  }
`;


const SelectBox = () => {
    return (
        <SelectBoxContainer>
            <h2>SELECT A POSITION</h2>
            <ItemsContainer>
                <Item>
                    <ListItemLink to='/ClosedGuard'>
                        Closed Guard
                    </ListItemLink>
                </Item>
                <Item>
                    <ListItemLink to='/Mount'>
                        Mount
                    </ListItemLink>
                </Item>
                <Item>
                    <ListItemLink to='HalfGuard'>
                        Half Guard
                    </ListItemLink>
                </Item>
            </ItemsContainer>
        </SelectBoxContainer>
    )
}

export default SelectBox
