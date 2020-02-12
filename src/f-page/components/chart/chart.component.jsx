import CanvasJSReact from '../../../assets/canvasjs.react.js';  
import React from 'react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const  PieChart =({pieOptions})=>{
const options = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Payment Brakedown"
  },
  data: [{
    type: "doughnut",
    startAngle: 75,
    toolTipContent: "<b>{label}</b>: {y}%",
    showInLegend: "true",
    legendText: "{label}",
    indexLabelFontSize: 16,
    indexLabel: "{label} - {y}%",
    dataPoints: pieOptions
  }]
}
return (
  <div style={{"width":"500px"}}>
    <h1>Loan Simulation Chart</h1>
      <CanvasJSChart options = {options} 
      /* onRef={ref => this.chart = ref} */
    />
    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  </div>
  );
}

export const LineChart = ({options})=>{
  return (
    <div style={{"width":"500px"}}>
      <h1>Loan Simulation Chart</h1>
        <CanvasJSChart options = {options} 
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}
