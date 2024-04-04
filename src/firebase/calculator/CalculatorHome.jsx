import { Box, Divider, Paper,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LotSizeCalculator from './LotSizeCalculator';
import JournalInput from "./lot size/JournalInput"
import JournalData from './Journal/JournalData';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';


function CalculatorHome() {
  const journalCollectionRef =collection(db,"journal")
  const [journalList,setJournalList]=useState([])
  const getJournalList = async()=>{
    //read data from database
    try{
    const data = await getDocs(journalCollectionRef )
    const filteredData= data.docs.map((doc)=>({...doc.data(),id:doc.id }))
    setJournalList(filteredData)

    }catch (err){
      console.log(err)
    }
    
}  
useEffect(()=>{
  getJournalList()
},[journalList])
  // main calculator app ,it holds other components 
  return (
    <Box sx={{p:{xs:"30px",lg:"80px"}}} className='h-75 w-100  calculator-home '>
      <Box sx={{mb:3}}>
        <Typography className='fw-bold' variant='h4'>FX Calculator</Typography>
      </Box>
      
      <Tabs
        defaultActiveKey="Journal-Input"
        id="uncontrolled-tab-example"
        className="mb-3 ms-5"
        justify
      >
        <Tab eventKey="Journal-Input" title="Journal Input" >
          <JournalInput getJournalList={getJournalList}/>
        </Tab>
        <Tab  eventKey="lot size calculator" title="lot size calculator">
          <LotSizeCalculator/>
        </Tab>
        <Tab eventKey="Journal" title="Journal" >
          <JournalData journalList={journalList} getJournalList={getJournalList}/>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </Box>
  )
}

export default CalculatorHome