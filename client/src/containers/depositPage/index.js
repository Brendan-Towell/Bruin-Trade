import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Deposit } from "./deposit";
import { Userbar } from "../../components/userbar";

export function DepositPage(props) {
    if(localStorage.getItem("token") == -1){
        window.location.href = '/loginrequired';
    }
    return (
    <PageContainer>
        <Deposit>
            <Userbar />
        </Deposit>
    </PageContainer>
    );
}