import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "../../components/button";
import { AccountButton } from "../../components/dropdownButton"
import { faGlasses, 
         faWallet,
         faBriefcase,
         faChartLine } from '@fortawesome/free-solid-svg-icons'

const glasses = <FontAwesomeIcon icon={faGlasses} />
const wallet = <FontAwesomeIcon icon={faWallet} />
const bag = <FontAwesomeIcon icon={faBriefcase} />
const chart = <FontAwesomeIcon icon={faChartLine} />

const UserPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const UserPageInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const LeftColumn = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const CenterColumn = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const RightColumn = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Summary = styled.div`
    width: 90%;
    height: 30%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;

const SummaryInfo = styled.div`
    width: 100%;
    height: 10%;
    justify-content: space-evenly;
    display: flex;
`;  

const WatchList = styled.div`
    width: 86%;
    height: 63%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align: center;
    padding-left: 15px;
`;

const InnerWatchList = styled.div`
    width: 95%;
    height: 99%;
    display: flex;
    align: center;
    flex-direction: column;
`;

const WatchListCard= styled.div`
    width: 100%;
    height: 20%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;  

const AccountHistory = styled.div`
    width: 90%;
    height: 95%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;

const Positions = styled.div`
    width: 90%;
    height: 95%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    
`;

const Header = styled.h3`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const HeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 600;
    font-size: 15px;
`;

const SubText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    font-size: 12px;
`;

export function User(props) {
    const { children } = props;
    return (
        <UserPageContainer>
            {children}
            <Marginer direction="vertical" margin={25} />
            <UserPageInnerContainer>
                <LeftColumn>
                    <Summary>
                        <Header>
                            {wallet}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Account Summary</HeaderText>
                        </Header>
                        <AccountButton />
                        <Marginer direction="vertical" margin={15} />
                        <SummaryInfo>
                            <SubText>Account value</SubText>
                            <SubText>$100</SubText>
                        </SummaryInfo>
                        <SummaryInfo>
                            <SubText>Buying power</SubText>
                            <SubText>$500</SubText>
                        </SummaryInfo>
                    </Summary>
                    <Marginer direction="vertical" margin={15} />
                    <WatchList>
                        <Header>
                            {glasses}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Watchlist</HeaderText>
                        </Header>
                        <InnerWatchList>
                            <WatchListCard>
                                AAPL
                            </WatchListCard>
                            <Marginer direction="vertical" margin={10} />
                            <WatchListCard>
                                AAPL
                            </WatchListCard>
                            <Marginer direction="vertical" margin={10} />
                            <WatchListCard>
                                AAPL
                            </WatchListCard>
                        </InnerWatchList>
                    </WatchList>
                </LeftColumn>
                <CenterColumn>
                    <AccountHistory>
                        <Header>
                            {chart}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Moving Account Balance</HeaderText>
                        </Header>
                    </AccountHistory>
                </CenterColumn>
                <RightColumn>
                    <Positions>
                        <Header>
                            {bag}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Positions</HeaderText>
                        </Header>
                    </Positions>
                </RightColumn>
            </UserPageInnerContainer>
        </UserPageContainer>
    );
}