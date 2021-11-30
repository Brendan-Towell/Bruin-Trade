import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "../../components/button";
import { faGlasses, 
         faWallet,
         faBriefcase,
         faChartLine,
         faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const glasses = <FontAwesomeIcon icon={faGlasses} />
const wallet = <FontAwesomeIcon icon={faWallet} />
const bag = <FontAwesomeIcon icon={faBriefcase} />
const chart = <FontAwesomeIcon icon={faChartLine} />
const plus = <FontAwesomeIcon icon={faPlusSquare} />

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

const WatchList = styled.div`
    width: 90%;
    height: 63%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;

const AccountHistory = styled.div`
    width: 90%;
    height: 73%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;

const CurrentStock = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    flex-direction: row;
`;

const StockTitle = styled.div`
    width: 30%;
    height: 100%;
    text-align: left;
    padding: 15px;
`;

const StockTransact = styled.div`
    width: 70%;
    height: 100%;
    justify: center;
`;

const BuySell = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
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

const StockHeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 400;
    font-size: 30px;
`;

const PercentChangeText = styled.h5`
    color: red;
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
                        <Marginer direction="vertical" margin={10} />
                        <Header>
                            {wallet}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Account Summary</HeaderText>
                        </Header>
                    </Summary>
                    <Marginer direction="vertical" margin={15} />
                    <WatchList>
                        <Marginer direction="vertical" margin={10} />
                        <Header>
                            {glasses}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Watchlist</HeaderText>
                        </Header>
                    </WatchList>
                </LeftColumn>
                <CenterColumn>
                    <CurrentStock>
                        <StockTitle>
                            <Marginer direction="vertical" margin={10} />
                            <StockHeaderText>AAPL</StockHeaderText>
                            <HeaderText>Apple Inc</HeaderText>
                            <SubText>Add to Watchlist {plus}</SubText> 
                        </StockTitle>
                        <StockTransact>
                            <Marginer direction="vertical" margin={15} />
                            <PercentChangeText>3,503.00 -1.56 (-0.04%)</PercentChangeText>
                            <Marginer direction="vertical" margin={0} />
                            <BuySell>
                                <Button size={12} width={100} height={30}>Buy</Button>
                                <Button size={12} width={100} height={30}>Sell</Button>
                            </BuySell>
                        </StockTransact>
                    </CurrentStock>
                    <Marginer direction="vertical" margin={15} />
                    <AccountHistory>
                        <Marginer direction="vertical" margin={10} />
                        <Header>
                            {chart}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Moving Account Balance</HeaderText>
                        </Header>
                    </AccountHistory>
                </CenterColumn>
                <RightColumn>
                    <Positions>
                        <Marginer direction="vertical" margin={10} />
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