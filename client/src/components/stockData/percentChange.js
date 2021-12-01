import React from "react";
import styled from "styled-components";

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

function Format(x) {
    return Math.abs(Number.parseFloat(x).toFixed(2));
}

class PercentChange extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stock: props.stockSymbol,
            quote: {},
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
        if (this.state.quote.change < 0)
        {
            return (
                <NegativeChangeText>-{Format(this.state.quote.change)}%</NegativeChangeText> 
            );
        } else {
            return (
                <PositiveChangeText>+{Format(this.state.quote.change)}%</PositiveChangeText> 
            );
        }
    }
}

export default PercentChange;
