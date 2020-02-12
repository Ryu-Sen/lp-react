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
    datasets: [
      {
        
        label: "Payment DataSet"  ,
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
  return(
    <div  style={{"width":"600px"}}>
        <Bar
          data={barData}
          options={{
            title:{
              display:true,
              text:'Payment Brakedown',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  )
}