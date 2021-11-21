import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 5px 1em;
    font-size: ${({size}) => size ? size + "px" : "18px"};
    font-weight: 600;
    border-radius: 3px;
    background-color: #fdb728;
    
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #e8a825
    }

    width: ${({width}) => width ? width + "px" : "160px"};
    height: ${({height}) => height ? height + "px" : "30px"};

    &:focus {
        outline: none;
    }
`;

export function Button(props) {
    const { size, width, height } = props;

    return (
    <ButtonWrapper size={size} width={width} height={height}>
        {props.children}
    </ButtonWrapper>
    );
}