import React, { useState, Component } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
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

const glasses = <FontAwesomeIcon icon={faGlasses} />
const bag = <FontAwesomeIcon icon={faBriefcase} />
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
    height: 44%;
    outline-style: solid;
    outline-width: thin;
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

const SearchBar = styled.div`
    width: 82%;
    height: 2%;
    padding: 10px; 
    background-color: #FFFFFF;
    display: flex;
    justify-content: start;
    flex-direction: row;
`;

const Input = styled.input`
  width: 85%;
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

class Trade extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            symbol : 'AAPL'
        }
    }

    updateStock(e) {
        e.preventDefault();
        const {symbol} = this.state;
        const newSymbol = this.newSymbol.value;

        console.log(newSymbol)

        this.setState({
            symbol: this.state.newSymbol
        })   

        console.log(this.state.symbol)
    }

    render() {
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
                        <SearchBar>
                        <form className="form-inline" onSubmit={(e) => {this.updateStock(e)}}>
                            {search}
                            <Marginer direction="horizontal" margin={10} />
                            <Input ref={(input) => {this.newSymbol = input}} type="text" placeholder="Search" className="form-control" id="newItemInput"/>
                        </form>
                        </SearchBar>
                        <Marginer direction="vertical" margin={15} />
                        <Positions>
                            <Header>
                                {bag}
                                <Marginer direction="horizontal" margin={10} />
                                <HeaderText>Positions</HeaderText>
                            </Header>
                        </Positions>
                        <Marginer direction="vertical" margin={15} />
                        <WatchList />
                </SideColumn>
            </TradePageInnerContainer>          
        );
    }
}

export default Trade;