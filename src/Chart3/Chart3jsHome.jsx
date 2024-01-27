import React, { useState } from 'react'
import IntroHeader from '../components/IntroHeader'
import { Box ,Paper} from '@mui/material'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BarChat from './BarChat'
import {userData} from "./Data"
import Explation from "../components/Explation"
import LineChart from "./Linechart"
import PieChart from './PieChart';
import DoughnutChart from "./DoughnutChart"


function Chart3jsHome() {
    const usage ="Chart.js is a versatile and intuitive JavaScript library that simplifies the creation of interactive and visually appealing charts within web applications. With a focus on ease of use and flexibility, Chart.js allows developers to effortlessly generate a variety of chart types, including line charts, bar charts, radar charts, pie charts, and more, using HTML5 canvas for rendering. Offering a straightforward setup and configuration process, it enables customization of charts with a plethora of styling options and interactivity features, such as tooltips, animations, and responsiveness. Whether for data visualization, analytics, or presenting information in a dynamic manner, Chart.js empowers developers to implement engaging and effective charts with minimal effort, making it a popular choice in the web development community."
    // main chart component 
    const header ="HOME OF CHART 3 JS"
    const description ="this is a chart library used to display charts in react "
    // state for holding data passed to the chart component
    const [userData2 ,setUserData2]=useState({
        labels: userData.map((data)=>data.year),
        datasets:[{
            label:"users Gained",
            data: userData.map((data)=>data.userGain),
            backgroundColor:[ 
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 159, 64,0.6)',
            'rgba(255, 205, 86,0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            ]
        }]
    })
  return (
    <main className="background header-top-padding ">
        <IntroHeader description={description} header={header}/>
        <Box >
            <Tabs
                defaultActiveKey="Chat 1"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Chat 1" title="Bar Chart">
                    <Box sx={{mb:4}} className="d-flex justify-content-center align-items-center mx-4 w-100">
                        <Paper sx={{height:{"xs":"fit-content","lg":"500px"},p:2,width:{"xs":"80%","lg":'75%'}}}className=" d-flex justify-content-center align-items-center">
                            <BarChat chartData={userData2}/>
                        </Paper>
                    </Box>
                </Tab>
                <Tab eventKey="chat 2" title="Line Chart">
                     <Box sx={{mb:4}} className="d-flex justify-content-center align-items-center mx-4">
                        <Paper className="w-75 p-4">
                            <LineChart chartData={userData2}/>
                        </Paper>
                    </Box>
                </Tab>
                <Tab eventKey="Chat 3" title="Pie Chart" >
                    <Box sx={{mb:4}} className="d-flex justify-content-center align-items-center mx-4">
                        <Paper sx={{height:{"xs":"fit-content","lg":"500px"},p:2,width:{"xs":"80%","lg":'50%'}}} className=" d-flex justify-content-center align-items-center">
                            <PieChart chartData={userData2}/>
                        </Paper>
                    </Box>
                </Tab>
                <Tab eventKey="Chat 4" title="Doughnut Chart" >
                <Box sx={{mb:4}} className="d-flex justify-content-center align-items-center mx-4">
                        <Paper sx={{height:{"xs":"fit-content","lg":"500px"},p:2,width:{"xs":"80%","lg":'50%'}}} className="d-flex justify-content-center align-items-center ">
                            <DoughnutChart chartData={userData2}/>
                        </Paper>
                    </Box>
                </Tab>
            </Tabs>
        </Box>
        <Explation usage={usage} />

    </main>
  )
}

export default Chart3jsHome