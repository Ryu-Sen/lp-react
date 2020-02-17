import React, { Component } from 'react';
import MortgageCalculator from "mortgage-calculator-react";
import $ from "jquery";
import simulatorStyles from "./simulator.styles.css"
import {PieChart,BarChart} from "../chartjs/chartjs"

class Simulator extends Component{
  constructor(){
    super()
    this.state= {
      pieDataPoints:[],
      lineDataPoints:[]
    }
  }
  getPieValues = ()=> {
    let outputValues = {
      labels:[],
      data:[]
    }
    let totalPayment = "";
    $("._37q431tzwiJw837-Dlr_8F").children().each(function(){
      let text = $(this).text().split(":$")
      if(text[0] === "Total Payment"){
      totalPayment =  Number.parseFloat(text[1].replace(/,/g, ''));
      }
    })

    $("._37q431tzwiJw837-Dlr_8F").children().each(function(index){

      let text = $(this).text().split(":$")
      
      if(text[0]!== "Loan Amount" && text[0]!== "Total Payment"){
        outputValues.labels.push(text[0])
        outputValues.data.push((Number.parseInt(text[1].replace(/,/g, ''))/totalPayment * 100).toFixed(2))
      }
        
    })
    return outputValues
  }
  getLineValues = ()=> {
   
    let values = {
      labels:[],
      data:[]
    }
    $('#simulator-container :input').each(function(index) {
      values.labels.push(this.name);
      values.data.push(Number.parseInt($(this).val().replace(/,/g, '')))
    });
    return values
  }

  componentDidMount(){
    $('form :input').change(()=>{
      this.setState((state)=>{
        state.pieDataPoints = this.getPieValues()
        state.lineDataPoints = this.getLineValues()
        return state
      }) 
    })
  

    this.setState((state)=>{
      state.pieDataPoints = this.getPieValues()
      state.lineDataPoints = this.getLineValues()
      return state
    }) 
    
  }
  render(){
    return(
      <div id="simulator-container">
         <section id="section" > </section>
            <div  style={{"paddingTop": "60px"}}>
              <div className="row">
                <div className="col-md-5">
                  <h2 className="text-uppercase">Tomato Ramen</h2>
                  <p className="font-alt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatibus molestia!</p>
                </div>
                <div className="col-md-7">
                  <p style={{"paddingTop":" 47px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam earum eos corporis totam vel, eaque sapiente officiis sint culpa inventore blanditiis hic cupiditate illo nam assumenda reprehenderit suscipit dolorum.</p>			
                </div>
              </div>	
              <div>
                <MortgageCalculator  id="simulator" style={simulatorStyles} price={300000} downPayment={0}   insuranceRate={0.00}  />
              </div>
              <div style={{"float":"right"}}>
                <PieChart labels={this.state.pieDataPoints.labels} data={this.state.pieDataPoints.data}/>
                <BarChart labels={this.state.lineDataPoints.labels} data={this.state.lineDataPoints.data}/>
              </div>
          </div> 
      </div>
    )
  }
}

export default Simulator;