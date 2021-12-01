import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Userbar } from "../../components/userbar";
import { Trade } from "./trade";

export function TradePage(props) {
    if(localStorage.getItem("token") == -1){
        window.location.href = '/loginrequired';
    }
    return (
    <PageContainer>
        <Trade>
            <Userbar/>
        </Trade>
    </PageContainer>
    );
}