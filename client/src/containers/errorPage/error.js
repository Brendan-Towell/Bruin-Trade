import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Link } from 'react-router-dom';
import ErrorImg from "../../images/error.jpg";

const ErrorPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const ErrorPageInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StandoutImage = styled.div`
    width: 22em;
    height: 30em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const HeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #A9A9A9;
    font-weight: 500;
    font-size: 25px;
`;

const HeaderSubText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #A9A9A9;
    font-weight: 300;
    font-size: 20px;
`;

const BodyText = styled.h3`
margin: 0;
line-height: 1.4;
color: #D3D3D3;
font-weight: 300;
font-size: 14px;
`;

const LinkText = styled.h3`
margin: 0;
line-height: 1.4;
color: #A9A9A9;
font-weight: 500;
font-size: 14px;
`;

export function Error(props) {
    return (
    <ErrorPageContainer>
        <ErrorPageInnerContainer>
            <DescriptionContainer>
                <Marginer direction="vertical" margin={50} />
                <StandoutImage>
                    <img src={ErrorImg} alt="404error" />
                </StandoutImage>
                <HeaderText>404</HeaderText>
                <HeaderSubText>Page not found</HeaderSubText>
                <BodyText>The page you are looking for doesn't exist or another error occurred.</BodyText>
                <BodyText>Go back, or head over to the main page to choose a new direction.</BodyText>
                <Marginer direction="vertical" margin={30} />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <LinkText>Go to Home</LinkText> 
                </Link>
            </DescriptionContainer>
        </ErrorPageInnerContainer>
    </ErrorPageContainer>
    );
}