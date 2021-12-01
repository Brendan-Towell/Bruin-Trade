import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { User } from "./user";
import { Userbar } from "../../components/userbar";

export function UserPage(props) {
    if(localStorage.getItem("token") == -1){
        window.location.href = '/loginrequired';
    }
    return (
    <PageContainer>
        <User>
            <Userbar/>
        </User>
    </PageContainer>
    );
}