import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";


const Chart = props => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value); // array of all these values
    const totalMaxiumum = Math.max(...dataPointsValues); // get max value

    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value}
                                                     maxValue={totalMaxiumum}
                                                     label={dataPoint.label}/>)}
    </div>
};


export default Chart;
