import React from "react";
import { Chart } from "react-google-charts";


export default function DetailedDisplay() {
    return getGraph();
}

export const data = [
    ["Time", "Temperature"],
    ["7pm", 25.5],
    ["8pm", 24.5],
    ["9pm", 27.3],
    ["10pm", 17.3],
  ];
  
  export const options = {
    title: "Temperature",
    curveType: "function",
    legend: { position: "bottom" },
  };

function getGraph() {
    
      return (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      );
}