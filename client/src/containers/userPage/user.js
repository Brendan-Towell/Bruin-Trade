import SelectInput from "@mui/material/Select/SelectInput";
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
            <h1>Account Dashboard</h1>
            <h2>{localStorage.getItem("token")}</h2>
        </UserPageContainer>
    );
}