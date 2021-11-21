import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { BrandLogo } from "../logo";
import { Marginer } from "../marginer";

const NavBarContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AccessibilityContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const AnchorLink = styled.a`
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: contrast(0.6);
    }
`;

const Seperator = styled.div`
    min-height: 50%;
    width: 1px;
    background-color: #fff;
`;

export function Navbar(props) {
    return (
    <NavBarContainer>
        <BrandLogo width={10} height={2.5}/>
        <AccessibilityContainer>
            <AnchorLink>Developers Portal</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <Seperator />
            <Marginer direction="horizontal" margin={10} />
            <Button size={12} width={75} height={25}>Sign Up</Button>
            <Marginer direction="horizontal" margin={14} />
            <AnchorLink>Login</AnchorLink>
            <Marginer direction="horizontal" margin={14} />
        </AccessibilityContainer>
    </NavBarContainer>
    );
}