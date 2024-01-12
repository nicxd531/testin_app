import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

function LineChart({chartData}) {
  // main lineChart Component to display the line chart
  return (
    <Line data={chartData}  />
  )
}

export default LineChart