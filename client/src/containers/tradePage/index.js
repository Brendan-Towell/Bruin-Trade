import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Userbar } from "../../components/userbar";
import  Trade  from "./trade";
import { Marginer } from "../../components/marginer";

const TradePageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

export function TradePage(props) {
    return (
    <PageContainer>
        <TradePageContainer>
            <Userbar/>
                <Marginer direction="vertical" margin={25} />
                <Trade />
        </TradePageContainer>
    </PageContainer>
    );
}