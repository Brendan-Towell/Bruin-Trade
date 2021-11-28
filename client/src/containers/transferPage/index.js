import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Transfer } from "./transfer";
import { Userbar } from "../../components/userbar";

export function TransferPage(props) {
    return (
    <PageContainer>
        <Transfer>
            <Userbar />
        </Transfer>
    </PageContainer>
    );
}