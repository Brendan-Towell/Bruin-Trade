import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { User } from "./user";
import { Userbar } from "../../components/userbar";

export function UserPage(props) {
    return (
    <PageContainer>
        <User>
            <Userbar/>
        </User>
    </PageContainer>
    );
}