import { Box, Divider, Paper,Typography } from '@mui/material'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LotSizeCalculator from './LotSizeCalculator';
import JournalInput from "./lot size/JournalInput"

function CalculatorHome() {
  // main calculator app ,it holds other components 
  return (
    <Box sx={{p:{xs:"40px",lg:"80px"}}} className='h-75 w-100 calculator-home '>
      <Box sx={{mb:3}}>
        <Typography className='fw-bold' variant='h4'>FX Calculator</Typography>
      </Box>
      
      <Tabs
        defaultActiveKey="Journal-Input"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Journal-Input" title="Journal Input">
          <JournalInput/>
        </Tab>
        <Tab className='d-flex align-items-center justify-content-center pt-5' eventKey="lot size calculator" title="lot size calculator">
          <LotSizeCalculator/>
        </Tab>
        <Tab eventKey="journal" title="journal" disabled>
          journal
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </Box>
  )
}

export default CalculatorHome