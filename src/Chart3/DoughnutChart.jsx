import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

function DoughnutChart({chartData}) {
  // main doughnut chart component for displaying the doughnut chart
  return (
    <Doughnut data={chartData}  />
  )
}

export default DoughnutChart