import SelectInput from "@mui/material/Select/SelectInput";
import React, { Component } from "react";
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
import axios from "axios";

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
    constructor(props) {
        super(props);
        this.state = {
            buyingPower: 0,
            accountValue: 0
        }
        this.getBuyingPower = this.getBuyingPower.bind(this);
        this.getAccountValue = this.getAccountValue.bind(this);
        }

    }
    
    updateStock(e) {
        window.location.href = '/trade';
    }
    
    getBalance = async (event) =>{
        const response = await axios.get('http://localhost:8080/getBalance', {
            params:{
                user_id: localStorage.getItem("token")
            }
        });
        this.setState({balance:response.data.account_balance});
    }


    getBuyingPower = async (event) =>{
        const response = await axios.get('http://localhost:8080/getBuyingPower', {
            params:{
                user_id: localStorage.getItem("token")
            }
        });
        this.setState({buyingPower:response.data.buying_power});
    }

    getAccountValue = async (event) =>{
        const response = await axios.get('http://localhost:8080/getAccountValue', {
            params:{
                user_id: localStorage.getItem("token")
            }
        });
        this.setState({accountValue:response.data.account_value});
    }

    componentDidMount() {
        console.log("mounting...");
        this.getBuyingPower();
        this.getAccountValue();
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
                            <SubText>${this.state.accountValue}</SubText>
                        </SummaryInfo>
                        <SummaryInfo>
                            <SubText>Buying power</SubText>
                            <SubText>${this.state.buyingPower}</SubText>
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