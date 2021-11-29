import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo.png";

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div`
    width: ${({width}) => width ? width + "em" : "20em"};
    height: ${({height}) => height ? height + "em" : "5em"};

    img {
        width: 100%;
        height: 100%;
    }
`;
export function BrandLogo(props) {
    const { width, height } = props;

    return (
    <BrandLogoContainer>
        <LogoImage width={width} height={height}>
            <img src={LogoImg} alt="BruinTrade logo" />
        </LogoImage>
    </BrandLogoContainer>
    );
}