import React from 'react';
import styled from 'styled-components';
import * as colors from '../constants/StyleConsts'
import heroImage from '../images/timothy-eberly-Z3fu-8gV66Q-unsplash.jpg';

const HeroContainer = styled.div`
    width: 100%;
    height: 550px;
    background: url(${heroImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
`;

const HeroText = styled.p`
    color: ${colors.CLOUDY};
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 50px;
    letter-spacing: 5px;
    padding-left: 50px;
    padding-top: 150px;

    span {
        color: ${colors.LIGHT_DARK}
    }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroText>
                YOUR SOURCE FOR<br/>
                <span>BRAZILIAN JIU JITSU</span><br/>
                FUNDAMENTALS AND KNOWLEDGE
            </HeroText>
        </HeroContainer>
    )
}

export default Hero
