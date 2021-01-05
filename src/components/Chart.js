import React from 'react'
import {Doughnut} from "react-chartjs-2";


export default function Chart({data}) {
   
    const chartData = {
        labels: [
          'Total Cases',
          'Total Recoverd',
          'Total Deaths'
        ],
        datasets: [{
          data: [data[0].cases , data[0].recovered , data[0].deaths],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      };
      

    return (
        <div>
            <h1>World Wide Data Chart</h1>
            <Doughnut data={chartData} width={500} height={250} />
        </div>  
    )
}
