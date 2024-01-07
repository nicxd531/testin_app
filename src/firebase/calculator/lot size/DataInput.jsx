import { Box, Button, Switch } from '@mui/material'
import React ,{useState}from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import ManualPips from './ManualPips';


function DataInput({pair,risk,pips,setPair,setRisk,setPips,setResult,result}) {
  // componenet for inputing data for calculations 
  // states for handling manual switch 
  const [switchBtn, setSwitch] =useState(false);
  // function for getting lot size for diffrent pairs 
  const getLot =(risk2,pips2,pair2)=>{
    if(pair2 == "GBPUSD" ||pair2 == "NZDUSD"||pair2 == "EURUSD"||pair2 == "AUDUSD" ||pair2 == "USDCAD"){
      const riskM =pips2 * 10
      setResult((risk2/riskM).toFixed(2))
      console.log(result)
    }else if(pair2 == "USDJPY"){
      const riskM =pips2 *10
      setResult(((risk2/riskM).toFixed(2)))
      console.log(result)
    }else if(pair2 == "XAUUSD"){
      const riskM =pips2 
      setResult(((risk2/riskM).toFixed(2)))
      console.log(result)
    }else if(pair2== "US30"){
      const riskM =pips2 
      setResult(((risk2/riskM).toFixed(2)))
      console.log(result)
    }else if(pair2== "S&P500"){
      const riskM =pips2 
      setResult(((risk2/riskM).toFixed(2)))
      console.log(result)
    }else if(pair2== "NAS100"){
      const riskM =pips2 
      setResult(((risk2/riskM).toFixed(2)))
      console.log(result)
    }
  }
  
  
  return (
    <Box sx={{display:{xs:"flex",lg:"block"},justifyContent:"start",alignItems:{xs:"center"},flexDirection:"column"}}>
      <Box className="d-flex mb-5 mt-4" sx={{flexDirection:{xs:"column",lg:"row"}}}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Click to calculate pips"
          labelPlacement="start"
          onChange={()=> setSwitch(!switchBtn)}
          sx={{ml:{xs:"0px",lg:"16px"}}}
          />
          <ManualPips switchBtn={switchBtn} pips={pips} setPips={setPips}/>
      </Box>
        <Box className=" d-flex mb-3 mt-3 align-items-center " sx={{flexDirection:{xs:"column",lg:"row"},justifyContent:{xs:"center",lg:"start"}}}>
          <TextField id="outlined-basic" label="Input Pips" sx={{mb:{xs:2}}} variant="outlined" value={pips} onChange={(e)=>setPips(e.target.value)}/>
          <FormControl  sx={{ ml: 1 ,mb:{xs:2}}}>
            <InputLabel htmlFor="outlined-adornment-amount" sx={{fontSize:"18px"}}>Risk </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Risk "
              onChange={(e)=>setRisk(e.target.value)}
              value={risk}
            />
          </FormControl>
          <FormControl sx={{ ml: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label " sx={{fontSize:"14px"}}>Pair</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={pair}
              onChange={(e)=>setPair(e.target.value)}
              autoWidth
              label="pair"
              sx={{mb:{xs:2},width:{xs:"85%"}}}
            >
              <MenuItem value="">
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
        </Box>
        <Button variant="contained" sx={{ ml: 1,mb:{xs:3}}} onClick={()=>getLot(risk,pips,pair)}>Calculate</Button>
    </Box>
  )
}

export default DataInput