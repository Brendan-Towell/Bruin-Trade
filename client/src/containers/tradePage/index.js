import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Userbar } from "../../components/userbar";
import { Trade } from "./trade";

export function TradePage(props) {
    return (
    <PageContainer>
        <Trade>
            <Userbar/>
        </Trade>
    </PageContainer>
    );
}