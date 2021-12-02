<<<<<<< Updated upstream
import React from "react";
=======
import SelectInput from "@mui/material/Select/SelectInput";
import React, { Component } from "react";
>>>>>>> Stashed changes
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccountButton } from "../../components/dropdownButton"
import { faWallet,
         faBriefcase,
         faChartLine } from '@fortawesome/free-solid-svg-icons'
import WatchList from "../../components/watchList";
import AccountChart from "../../components/accountChart";
import PositionList from "../../components/positionList";

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
    display: flex;
    align-items: center;
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

const WatchContainer = styled.div`
    height: 63%;
    width:90%;
    display: flex;
    align: center;
`;

class User extends Component {
    
    updateStock(e) {
        window.location.href = '/trade';
    }


    render() {

    return (
        <UserPageContainer>
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
                    <WatchContainer>
                        <WatchList />
                    </WatchContainer>
                </LeftColumn>
                <CenterColumn>
                    <AccountHistory>
                        <Header>
                            {chart}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Moving Account Balance</HeaderText>
                        </Header>
                        <AccountChart />
                    </AccountHistory>
                </CenterColumn>
                <RightColumn>
                    <Positions>
                        <PositionList updateStock = {this.updateStock}/>
                    </Positions>
                </RightColumn>
            </UserPageInnerContainer>
        </UserPageContainer>
        );
    }
}

export default User;