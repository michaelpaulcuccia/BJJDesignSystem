import React from 'react';
import styled from 'styled-components';
import * as colors from '../constants/StyleConsts'

const Container = styled.div`
    width: 100%;
    height: 300px;
    background: ${colors.CLOUDY};
    display: flex;
    justify-content: center;

    img {
        height: 275px;
        width: 275px;
    }
`;


const PageTop = props => {
    return (
        <Container>
           <img src={props.icon} />
        </Container>
    )
}

export default PageTop
