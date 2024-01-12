import React from 'react'
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

function BarChat({chartData}) {
  // main BarChart component for displaying barchat 
  return (
    <Bar data={chartData}  />
  )
}

export default BarChat