import React, { Component } from 'react';
import Chart from '../chart/chart.component'
import MortgageCalculator from "mortgage-calculator-react";
import $ from "jquery";
import simulatorStyles from "./simulator.styles.css"

class Simulator extends Component{
  constructor(){
    super()
    this.state={
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Website Traffic Sources"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
  }
  componentDidMount(){
    $('form :input').on('change',(e)=>{console.log(e.target)})
    let values = []
     let $inputs = $('form :input')
     
     $inputs.each(function(e) {
      return values.push({y: 50,label:this.name})
  });
   console.log(this.state)
    this.setState({data:[{
    type: "pie",
    startAngle: 75,
    toolTipContent: "<b>{label}</b>: {y}%",
    showInLegend: "true",
    legendText: "{label}",
    indexLabelFontSize: 16,
    indexLabel: "{label} - {y}%",
    dataPoints:values}]},()=>{console.log(this.state)}) 
    
  }
  render(){
    return(
      <div>
         <section id="section" > </section>
          <div   className="content clearfix">
          <div className="container" style={{"paddingTop": "60px"}}>
            <div className="row">
              <div className="col-md-5">
                <h2 className="text-uppercase">Tomato Ramen</h2>
                <p className="font-alt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatibus molestia!</p>
              </div>
              <div className="col-md-7">
                <p style={{"paddingTop":" 47px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam earum eos corporis totam vel, eaque sapiente officiis sint culpa inventore blanditiis hic cupiditate illo nam assumenda reprehenderit suscipit dolorum.</p>			
              </div>
            </div>	
          </div>
          <div className="container" style={{height: "200vw"}}>
            <div>
            <MortgageCalculator  id="simulator" style={simulatorStyles}/>
            </div>
            <div style={{"float":"right"}}>
            <Chart options={this.state}/>
            </div>
           
          </div>
         
        </div>
      </div>
    )
  }
}

export default Simulator;