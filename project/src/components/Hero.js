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
    position: relative;
    z-index: 0;

    @media (max-width: 850px) {
        height: 350px;
    }

    &::before {
        content: '';
        width: 100%;
        height: 550px;
        background: rgba(0,0,0,.65);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;      
        
        @media (max-width: 850px) {
            height: 350px;
        }
    }
`;

const HeroText = styled.p`
    color: ${colors.CLOUDY};
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 50px;
    letter-spacing: 5px;
    padding-left: 50px;
    padding-top: 150px;

    @media (max-width: 850px) {
        font-size: 35px;
        letter-spacing: 3px;
        padding-left: 35px;
        padding-top: 75px;
    }

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
