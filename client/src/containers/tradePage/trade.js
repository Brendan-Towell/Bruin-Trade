import React, { useState, Component } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import SearchBar from "../../components/searchBar";
import WatchList from "../../components/watchList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "../../components/button";
import StockChart from "../../components/stockChart";
import { faPlusSquare,
         faGlasses,
         faBriefcase,
         faSearch,
         faChartLine } from '@fortawesome/free-solid-svg-icons'

import CurrentPrice from "../../components/stockData/currentPrice";
import PercentChange from "../../components/stockData/percentChange";
import PriceChange from "../../components/stockData/priceChange";
import PositionList from "../../components/positionList";

const plus = <FontAwesomeIcon icon={faPlusSquare} />
const search = <FontAwesomeIcon icon={faSearch} />
const chart = <FontAwesomeIcon icon={faChartLine} />

const TradePageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const TradePageInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const MainColumn = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const SideColumn = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Positions = styled.div`
    width: 90%;
    height: 40%;
    outline-style: solid;
    outline-width: thin;
    display: flex;
    align-items: center;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
`;

const CurrentStock = styled.div`
    width: 95%;
    height: 15%;
    display: flex;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    flex-direction: row;
`;

const GraphContainer = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
    outline-style: solid;
    outline-width: thin;
    outline-color: #E5E5E5;
    background-color: #FFFFFF;
    flex-direction: column;
`;

const StockTitle = styled.div`
    width: 30%;
    height: 100%;
    text-align: left;
    padding: 5px;
`;

const StockInfo = styled.div`
    width: 30%;
    height: 100%;
    text-align: left;
    padding: 5px;
    display: flex;
    flex-direction: column;
`;  

const InfoLine = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const BuySell = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Buy = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const Sell = styled.div`
    width: 100;
    height: 50%;
    display: flex;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: 95%;
`;

const Input = styled.input`
width: 95%;
height: 25px;
outline: solid;
outline-width: thin;
outline-color: rgba(200, 200, 200, 0.3);
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
font-size: 12px;
&::placeholder {
  color: rgba(200, 200, 200, 1);
}
&:not(:last-of-type) {
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
  outline: none;
  border-bottom: 2px solid rgb(241, 196, 15);
}
`;

const Header = styled.h3`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StockHeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 400;
    font-size: 30px;
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
    height: 46%;
    width:90%;
    display: flex;
    align: center;
`;

class Trade extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            symbol : 
                props.stockSymbol !== undefined
                    ? props.stockSymbol
                    : 'AMZN'
        }
        this.updateStock = this.updateStock.bind(this);
    }

    updateStock(e) {
        this.setState((state) => {return {symbol: e}});
        //console.log(this.state.symbol);
    }

    render() {
        console.log('render');
        const { symbol } = this.state;
        return (
            <TradePageInnerContainer>
                <MainColumn>
                    <CurrentStock>
                        <Marginer direction="horizontal" margin={25} />
                        <StockTitle>
                            <Marginer direction="vertical" margin={15}/>
                            <StockHeaderText>{this.state.symbol}</StockHeaderText>
                            <SubText>Add to Watchlist {plus}</SubText> 
                        </StockTitle>
                        <StockInfo>
                            <InfoLine>
                            {console.log(symbol)}
                                <SubText>Current price:</SubText>
                                <CurrentPrice stockSymbol={symbol}/>
                            </InfoLine>
                            <InfoLine>
                                <SubText>Percent change:</SubText>
                                <PercentChange stockSymbol={symbol}/>
                            </InfoLine>
                            <InfoLine>
                                <SubText>Price change:</SubText>
                                <PriceChange stockSymbol={symbol}/>
                            </InfoLine>
                        </StockInfo>
                        <BuySell>
                            <Marginer direction="vertical" margin={15} />
                            <Buy>
                                <Input type="search" placeholder="Shares"/>
                                <Marginer direction="horizontal" margin={10} />
                                <Button size={12} width={100} height={30}>Buy</Button>
                            </Buy>
                            <Sell>
                                <Input type="search" placeholder="Price"/>
                                <Marginer direction="horizontal" margin={10} />
                                <Button size={12} width={100} height={30}>Sell</Button>
                            </Sell>
                        </BuySell>
                    </CurrentStock>
                    <Marginer direction="vertical" margin={15} />
                    <GraphContainer>
                        <Header>
                            {chart}
                            <Marginer direction="horizontal" margin={10} />
                            <HeaderText>Price History</HeaderText>
                        </Header>
                        <StockChart stockSymbol={symbol}/>
                    </GraphContainer>
                </MainColumn>
                    <SideColumn>
                        <SearchBar updateStock = {this.updateStock}/>
                        <Marginer direction="vertical" margin={25} />
                        <Positions>
                            <PositionList/>
                        </Positions>
                        <Marginer direction="vertical" margin={15} />
                        <WatchContainer>
                            <WatchList />
                        </WatchContainer>
                </SideColumn>
            </TradePageInnerContainer>          
        );
    }
}

export default Trade;