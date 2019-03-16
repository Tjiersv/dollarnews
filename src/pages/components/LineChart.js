import React, { Component } from "react";
import { Line } from "react-chartjs-3";

export class LineChart extends Component {
    constructor(props) {
        super(props);
        console.log('Por Aquì paso... Donatelo! (┛◉Д◉)┛');

        this.state = { chartData: this.props.chartData };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            chartData: nextProps.chartData
        });
    }

    render() {

        return <Line data = { this.state.chartData }
        />;
    }
}

export default LineChart;