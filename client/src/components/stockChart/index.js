import { blue } from "@mui/material/colors";
import React from "react";
import Plot from 'react-plotly.js';

class StockChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        const API_KEY = 'HFNY7BHRWB1UJ9IF';
        let stockSymbol = 'AAPL'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_CALL)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)']
                        [key]['1. open']);
                    }
                    console.log(stockChartXValuesFunction)
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    })
                }
            )
    }

    render() {
        return (
            <div>
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: blue},
                        }
                    ]}
        layout={ {width: 800, height: 500, title: `Symbol: AAPL` } }/>
            </div>
        )
    }
}

export default StockChart;