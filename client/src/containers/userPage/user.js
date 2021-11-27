import React from "react";
import styled from "styled-components";

const UserPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

export function User(props) {
    const { children } = props;
    return (
        <UserPageContainer>
            {children} 
            <h1>Hello User</h1>
        </UserPageContainer>
    );
}