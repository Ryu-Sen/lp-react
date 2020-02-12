import React, { Component } from 'react';
import {PieChart, LineChart} from '../chart/chart.component'
import MortgageCalculator from "mortgage-calculator-react";
import $ from "jquery";
import simulatorStyles from "./simulator.styles.css"

class Simulator extends Component{
  constructor(){
    super()
    this.state= {
      pieDataPoints:[],
      lineDataPoint:[]
    }
  }
  componentDidMount(){
    $('form :input').on('change',(e)=>{console.log(e.target)})

    let values = []
    $('form :input').each(function(index) {
      return values.push({y: 50,label:this.name})
  });

  let outputValues = []
  let totalPayment = "";
  let loanAmount = ""; //maybe I need it somewhere else

  $("._37q431tzwiJw837-Dlr_8F").children().each(function(){
    let text = $(this).text().split(":$")
    if(text[0] === "Total Payment"){
     totalPayment =  Number.parseFloat(text[1].replace(/,/g, ''));
    }
    
    if(text[0] === "Loan Amount"){
      loanAmount =  Number.parseFloat(text[1].replace(/,/g, ''));
    }
  })

  $("._37q431tzwiJw837-Dlr_8F").children().each(function(index){

      let text = $(this).text().split(":$")
      
      if(text[0]!== "Loan Amount" && text[0]!== "Total Payment"){
        outputValues.push({y:(Number.parseInt(text[1].replace(/,/g, ''))/totalPayment * 100).toFixed(2),label:text[0],x:index})
      }
      
    })
    
    this.setState((state)=>{
      state.pieDataPoints = outputValues
      return state
    },(console.log(this.state))) 
    
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
            <PieChart pieOptions={this.state.pieDataPoints}/>

            </div>
           
          </div>
         
        </div>
      </div>
    )
  }
}

export default Simulator;