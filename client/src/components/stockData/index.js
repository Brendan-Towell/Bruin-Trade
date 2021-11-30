import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const PercentChange = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const PercentChangeComponent = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const PositiveChangeText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    font-size: 12px;
    color: green;
`;

const NegativeChangeText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    font-size: 12px;
    color: red;
`;

const SubText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    font-size: 12px;
`;

function FormatOutput(x) {
    return Math.abs(Number.parseFloat(x).toFixed(2));
  }

class StockData extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stockSymbol: props.stockSymbol,
            openingPrice: 0,
            currentPrice: 0
        }
    }

    componentDidMount() {
        this.fetchOpeningPrice()
        this.fetchCurrentPrice()
    }

    fetchOpeningPrice() {
        const pointerToThis = this;
        const API_KEY = 'HFNY7BHRWB1UJ9IF';
        let API_CALL_DAILY = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
        let stockOpeningPriceFunction = [];

        fetch(API_CALL_DAILY)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    for (var key in data['Time Series (Daily)']) {
                        stockOpeningPriceFunction.push(data['Time Series (Daily)']
                        [key]['1. open']);
                    }
                    pointerToThis.setState({
                        openingPrice: stockOpeningPriceFunction[0]
                    })
                }
            )
    }

    fetchCurrentPrice() {
        const pointerToThis = this;
        const API_KEY = 'HFNY7BHRWB1UJ9IF';
        let API_CALL_INTRADAY = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.stockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
        let stockCurrentPriceFunction = [];

        fetch(API_CALL_INTRADAY)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                for (var key in data['Time Series (5min)']) {
                    stockCurrentPriceFunction.push(data['Time Series (5min)']
                    [key]['1. open']);
                }
                pointerToThis.setState({
                    currentPrice: stockCurrentPriceFunction[0]
                })
            }
        )
    }
    
    render() {
        if (this.state.currentPrice > this.state.openingPrice) {
            return (
                <PercentChange>
                    <Marginer direction="vertical" margin={20} />
                    <PercentChangeComponent>
                        <SubText>Daily percent change</SubText>
                        <PositiveChangeText>+{FormatOutput((this.state.currentPrice-this.state.openingPrice)/this.state.openingPrice * 100)}%</PositiveChangeText>
                    </PercentChangeComponent>
                    <Marginer direction="vertical" margin={5} />
                    <PercentChangeComponent>
                        <SubText>Current price</SubText>
                        <PositiveChangeText>${FormatOutput(this.state.currentPrice)}</PositiveChangeText>
                    </PercentChangeComponent>
                    <Marginer direction="vertical" margin={5} />
                    <PercentChangeComponent>
                        <SubText>Price difference</SubText>
                        <PositiveChangeText>+${FormatOutput(this.state.currentPrice-this.state.openingPrice)}</PositiveChangeText>
                    </PercentChangeComponent>
                </PercentChange>
            );
        } else {
        return (
            <PercentChange>
                <Marginer direction="vertical" margin={20} />
                <PercentChangeComponent>
                    <SubText>Daily percent change</SubText>
                    <NegativeChangeText>-{FormatOutput((this.state.currentPrice-this.state.openingPrice)/this.state.openingPrice * 100)}%</NegativeChangeText>
                </PercentChangeComponent>
                <Marginer direction="vertical" margin={5} />
                <PercentChangeComponent>
                    <SubText>Current price</SubText>
                    <NegativeChangeText>${FormatOutput(this.state.currentPrice)}</NegativeChangeText>
                </PercentChangeComponent>
                <Marginer direction="vertical" margin={5} />
                <PercentChangeComponent>
                    <SubText>Price difference</SubText>
                    <NegativeChangeText>-${FormatOutput(this.state.currentPrice-this.state.openingPrice)}</NegativeChangeText>
                </PercentChangeComponent>
            </PercentChange>
            );
        }
    }
}

export default StockData;