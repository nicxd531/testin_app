import { Box, Paper, Typography } from '@mui/material'
import React,{useState} from 'react'
import DataInput from './lot size/DataInput'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import LotSizeResults from './lot size/LotSizeResults';


function LotSizeCalculator() {
  // main lot size component
  // states for managing data for getting lot size 
  const  [pips,setPips]=useState("")
  const  [risk,setRisk]=useState("")
  const  [pair,setPair]=useState("")
  const  [result ,setResult]=useState("")
  return (
    <Paper className='p-4' sx={{minWidth:"280px",flexGrow:"1",ml:6,py:9}}>
        <Typography variant='h4' className='p-1 d-flex W-100 text-center align-items-center justify-content-center fw-bold'> Lot Size Calculator</Typography>
        <DataInput pips={pips} pair={pair} risk={risk} setPair={setPair} setRisk={setRisk} setPips={setPips} result={result} setResult={setResult}/>
        <Divider>
         <Chip  sx={{fontSize:{xs:"18px"}}} label="Results" />
        </Divider>
        <LotSizeResults pair={pair} result={result} pips={pips} risk={risk}/>
    </Paper>
  )
}

export default LotSizeCalculator