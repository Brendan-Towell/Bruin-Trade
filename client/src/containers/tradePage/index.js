import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Trade } from "./trade";
import { Userbar } from "../../components/userbar";

export function TradePage(props) {
    return (
    <PageContainer>
        <Trade>
            <Userbar/>
        </Trade>
    </PageContainer>
    );
}