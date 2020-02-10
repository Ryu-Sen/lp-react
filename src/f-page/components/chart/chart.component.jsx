import CanvasJSReact from '../../../assets/canvasjs.react.js';  
import React, {Component} from 'react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
  return (
  <div style={{"width":"500px"}}>
    <h1>Loan Simulation Chart</h1>
      <CanvasJSChart options = {this.props.options} 
      /* onRef={ref => this.chart = ref} */
    />
    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  </div>
  );
}
}

export default Chart;