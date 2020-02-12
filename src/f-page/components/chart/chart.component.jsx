import CanvasJSReact from '../../../assets/canvasjs.react.js';  
import React, { Component } from 'react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class  PieChart extends Component{
 
componentDidUpdate(){
  this.chart.render()
}
render(){
  const  options = {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: this.props.text
    },
    legend: {
      horizontalAlign: "right", // "center" , "right"
      verticalAlign: "center",  // "top" , "bottom"
      fontSize: 15
    },
    data: [{
      type: "doughnut",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: this.props.pieOptions
    }]
  }
  return (
    <div style={{"width":"600px"}}>
      <h1>Loan Simulation Chart</h1>
        <CanvasJSChart options = {options} 
         onRef={ref =>{
           return  this.chart = ref
         }}
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}

}

export const LineChart = ({lineOptions, text})=>{
  const options = {
    animationEnabled: true,
    animationDuration: 2000,
   
    title:{
      text: text
    },
    
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      legendText: "Loan Simulator",
      dataPoints:lineOptions
    }]
  }
  
  return (
    <div style={{"width":"500px"}}>
        <CanvasJSChart options = {options} 
        /* onRef={ref => this.chart = ref}*/
       
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}
