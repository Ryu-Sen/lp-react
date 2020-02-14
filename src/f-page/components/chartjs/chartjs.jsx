import React from 'react';
import { Bar , Doughnut} from 'react-chartjs-2';


export const  PieChart = ({labels,data}) => {
    const pieData = {
      labels: labels,
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
          ],
          data:data
        }
      ]
    }
    return (
      <div>
        <Doughnut
          data={pieData}
          options={{
            title:{
              display:true,
              text:'Monthly Payement',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    ); 
}

export const BarChart = ({labels, data}) =>{
  const barData = {
    labels: labels,
    datasets: [{
      label: "Payment Brakedown",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data:data,
    }]
  };
  const  options = {
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  
  return(
    <div  style={{"width":"inherith"}}>
        <Bar
          data={barData}
          options={options}
        />
      </div>
  )
}