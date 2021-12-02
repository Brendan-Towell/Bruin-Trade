import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import User from "./user";
import { Userbar } from "../../components/userbar";
import { Marginer } from "../../components/marginer";

const UserPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

export function UserPage(props) {
    return (
    <PageContainer>
        <UserPageContainer>
            <Userbar/>
                <Marginer direction="vertical" margin={25} />
                <User />
        </UserPageContainer>
    </PageContainer>
    );
}