import React, { Component } from "react"; 
import styled from "styled-components";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { red } from "@mui/material/colors";
import CurrentPrice from "../stockData/currentPrice";
import PercentChange from "../stockData/percentChange";
import axios from "axios";

const bag = <FontAwesomeIcon icon={faBriefcase} />

const PositionListContainer = styled.div`
    width: 100%;
    height: 100%;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align: center;
    padding-left: 15px;
    overflow-y: scroll;
`;

const InnerPositionListContainer = styled.div`
    width: 95%;
    height: 99%;
    display: flex;
    align: center;
    flex-direction: column;
`;


const PositionListCard= styled.div`
    width: 100%;
    height: 75px;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-evenly;
`;  

const PositionTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PositionItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TradeButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InfoLine = styled.div`
    padding: 1px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Header = styled.div`
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

class PositionList extends Component {
    
    constructor(props) {
        super(props);
        this.updateStock = props.updateStock;
        this.state = {
            stockSymbols : [],
            message: ''
        }
    }

    componentDidMount() {
        const response = axios.get('http://localhost:8080/getUsersPositions',{
            params: {
                user_id: localStorage.getItem("token")
            }
        })
            .then((response) => {
                this.setState({
                    stockSymbols: response.data
                })
            })
    }

    render() {
        const { stockSymbols, message } = this.state;
        return (
        <PositionListContainer>
            <Marginer direction="vertical" margin={30} />
            <Header>
                {bag}
                <Marginer direction="horizontal" margin={10} />
                <HeaderText>Positions</HeaderText>
            </Header>
            <Marginer direction="vertical" margin={15} />
            <InnerPositionListContainer>
            {
                (message !== '' || stockSymbols.length === 0 )&& <p className="message text-danger">{message}</p>
            }
            {
            stockSymbols.length > 0 && 
            <div>
                {stockSymbols.map((symbol)=>{
                    return (
                        <PositionListCard>
                            <PositionTitle>
                                <HeaderText>{symbol}</HeaderText>
                            </PositionTitle>
                            <PositionItemInfo>
                                <InfoLine>
                                    <SubText>PercentChange:</SubText>
                                    <PercentChange stockSymbol={symbol}/>
                                </InfoLine>
                            </PositionItemInfo>
                            <TradeButton>
                                <div onClick={(e)=> this.updateStock(symbol)}>
                                    <Button type="button" size={12} width={75} height={40}>
                                        Trade
                                    </Button>
                                </div>
                            </TradeButton>
                            <Marginer direction="vertical" margin={15} />
                        </PositionListCard>
                    );
                })}
            </div>
            }
                <Marginer direction="vertical" margin={15} />
            </InnerPositionListContainer>
        </PositionListContainer>
    );
    }
}

export default PositionList;