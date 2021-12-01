import { red, green } from "@mui/material/colors";
import React from "react";
import Plot from 'react-plotly.js';

class AccountChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountChartXValues: [],
            accountChartYValues: [],
            stockSymbols: props.stockSymbols,
            numShares: props.numShares
        }
    }

    render() {
        return (
            <div>
                <Plot
                    data={[
                    {
                        x: this.state.accountChartXValues,
                        y: this.state.accountChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: green},
                    }]}
                layout={ {width: 500, height: 500, title: 'Account balance over time' } }/>
            </div>
        )
    }
}


export default AccountChart;