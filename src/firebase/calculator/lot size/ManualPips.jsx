import { Box, Button, Chip, TextField, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function ManualPips({switchBtn,pips,setPips}) {
  // component for manually getting pips
  // states fo handling manual calculation of pips
  const  [entryPrice,setEntryPrice]=useState("")
  const  [exitPrice,setExitPrice]=useState("")
  const [pair,setPair]=useState("")
// click function for getting pips for diffrent pairs 
  const handleClick =(enP,eP)=>{
    const priceDiff = enP - eP
    const check =entryPrice && exitPrice

    if(pair == "GBPUSD" ||pair == "NZDUSD"||pair == "EURUSD"||pair == "AUDUSD" ||pair == "USDCAD"){
      const realPip =(priceDiff * 10000).toFixed(2)
      check & setPips(realPip>=0 ?  realPip : realPip * -1)
    }else if(pair=="XAUUSD"){
      const realPip =(priceDiff * 100).toFixed(2)
      check && setPips(realPip>=0 ? realPip : realPip * -1)
    }else if(pair == "USDJPY"){
      const realPip =(priceDiff * 100).toFixed(2)
     check &&  setPips(realPip>=0 ? realPip : realPip * -1)
    }else if(pair == "US30"){
      const realPip =(priceDiff * 10).toFixed(2)
     check &&  setPips(realPip>=0 ? realPip : realPip * -1)
     
    }else if(pair == "S&P500"){
      const realPip =(priceDiff * 10).toFixed(2)
     check &&  setPips(realPip>=0 ? realPip : realPip * -1)
    }else if(pair == "NAS100"){
      const realPip =(priceDiff * 10).toFixed(2)
     check &&  setPips(realPip>=0 ? realPip : realPip * -1)
    }
  }
  return (
    <>
    <AnimatePresence>
    {switchBtn && < motion.div exit={{x:1500}} initial={{y:-50}} animate={{y:0}} transition={{ type:"spring",stiffness:120}}>
       <TextField id="outlined-basic" label="Entry price" variant="outlined" type="number" onChange={(e)=>setEntryPrice(e.target.value)} sx={{ml:2,mb:{xs:2}}}/>
       <TextField id="outlined-basic" label="Exit Price" variant="outlined" type="number" onChange={(e)=>setExitPrice(e.target.value)}  sx={{ml:2,mb:{xs:2}}}/>
       <FormControl variant="standard" sx={{  minWidth: 120,ml:2 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{fontSize:"14px"}}>Pair</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={pair}
          onChange={(e)=>setPair(e.target.value)}
          sx={{mb:{xs:2}}}
          label="Age"
        >
          <MenuItem value={pair}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"GBPUSD"}>GBPUSD</MenuItem>
          <MenuItem value={"AUDUSD"}>AUDUSD</MenuItem>
          <MenuItem value={"NZDUSD"}>NZDUSD</MenuItem>
          <MenuItem value={"EURUSD"}>EURUSD</MenuItem>
          <MenuItem value={"USDCAD"}>USDCAD</MenuItem>
          <MenuItem value={"XAUUSD"}>XAUUSD</MenuItem>
          <MenuItem value={"USDJPY"}>USDJPY</MenuItem>
          <MenuItem value={"US30"}>US30</MenuItem>
          <MenuItem value={"S&P500"}>S&P500</MenuItem>
          <MenuItem value={"NAS100"}>NAS100</MenuItem>
        </Select>
      </FormControl>
       <Button sx={{ml:2,my:1}} variant="contained" onClick={()=>handleClick(entryPrice,exitPrice)}>calculate</Button>
      {pips && <motion.div className='d-inline' initial={{x:250}} animate={{x:0}} transition={{delay:0.2, type:"spring",stiffness:120}}> <Chip sx={{ml:2,fontSize:"14px"}} label={pips+" pips"}  color="success" /></motion.div>}
    </motion.div>}
    </AnimatePresence>
    </>
  )
}

export default ManualPips