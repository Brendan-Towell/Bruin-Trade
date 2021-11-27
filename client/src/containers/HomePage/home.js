import React from "react";
import styled from "styled-components";
import HomeBackgroundImg from "../../images/background.jpg";
import Bruin from "../../images/bruin.png";
import { BrandLogo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { Link } from "react-router-dom"

const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${HomeBackgroundImg});
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(8,125,195,0.7);
    display: flex;
    flex-direction: column;
`;

const HomePageInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StandoutImage = styled.div`
    width: 32em;
    height: 32em;

    img {
        width: 75%;
        height: 75%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 500;
    font-size: 25px;
`;

export function Home(props) {
    const { children } = props;
    return (
    <HomePageContainer>
        <BackgroundFilter>
            {children}
            <HomePageInnerContainer>
            <LogoContainer>
                <BrandLogo />
                <SloganText>Personalized finance for</SloganText>
                <SloganText>UCLA students</SloganText> 
                <Marginer direction="vertical" margin={15} />
                <Link to="/signup">
                    <Button>Join Now</Button>
                </Link>
            </LogoContainer>
            <StandoutImage>
                <img src={Bruin} alt="Bruins" />
            </StandoutImage>
            </HomePageInnerContainer>
        </BackgroundFilter>
    </HomePageContainer>
    );
}