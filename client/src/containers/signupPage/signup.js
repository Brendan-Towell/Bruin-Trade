import React from "react";
import styled from "styled-components";
import { AccessPortal } from "../../components/accessPortal";
import HomeBackgroundImg from "../../images/background.jpg";

const SignupPageContainer = styled.div`
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

const SignupPageInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export function Signup(props) {
    const { children } = props;
    return (
        <SignupPageContainer>
            <BackgroundFilter>
            {children}
                <SignupPageInnerContainer>
                    <AccessPortal loggingIn={false}/>
                </SignupPageInnerContainer>
            </BackgroundFilter>
        </SignupPageContainer>
        );
}