import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Deposit } from "./deposit";
import { Userbar } from "../../components/userbar";

export function DepositPage(props) {
    return (
    <PageContainer>
        <Deposit>
            <Userbar />
        </Deposit>
    </PageContainer>
    );
}