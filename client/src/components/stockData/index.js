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
            stock: props.stockSymbol,
            quote: {}
        }
    }

    async componentDidMount() {
        const base = `https://sandbox.iexapis.com/stable/stock/${this.state.stock}`;
        const endpath = '/quote';
        const token = '?token=Tpk_1fa3ca794f3940949c492fee0615dcf5'
        const url = base + endpath + token;
        await fetch(url).then((response) => response.json()).then((data) => this.setState({quote: data}));
    }
    
    render() {
        return (
            <PercentChange>
                <Marginer direction="vertical" margin={20} />
                <PercentChangeComponent>
                    <SubText>Daily percent change</SubText>
                    <NegativeChangeText>-{FormatOutput(this.state.quote.changePercent)}%</NegativeChangeText>
                </PercentChangeComponent>
                <Marginer direction="vertical" margin={5} />
                <PercentChangeComponent>
                    <SubText>Current price</SubText>
                    <NegativeChangeText>${FormatOutput(this.state.quote.delayedPrice)}</NegativeChangeText>
                </PercentChangeComponent>
                <Marginer direction="vertical" margin={5} />
                <PercentChangeComponent>
                    <SubText>Price difference</SubText>
                    <NegativeChangeText>-${FormatOutput(this.state.quote.change)}</NegativeChangeText>
                </PercentChangeComponent>
            </PercentChange>
        );
    }
}

export default StockData;