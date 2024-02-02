import React from 'react'
import { Chip,Divider,Box, Typography} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ProfitLoss({setTradeDirection,setStopLossAmount,setTakeProfitAmount,tradeDirection}) {
  // main profit or loss input
  return (
    <Box>
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Profit/Loss Amount" size="medium" />
        </Divider>
        <Box>
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"row"}}} className='d-flex justify-content-center align-items-center '>
              <FormControl sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"95%","lg":"20%"}}}>
                <InputLabel id="demo-simple-select-label">Trade Direction</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Trade Direction"
                  onChange={(e)=>setTradeDirection(e.target.value)}
                  value={tradeDirection}
                >
                  <MenuItem className=' text-success' value={true}>Buy Trade</MenuItem>
                  <MenuItem className=' text-danger' value={false}>Sell Trade</MenuItem>
                </Select>
              </FormControl>
               
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"95%","lg":"20%"}}} id="outlined-basic" label="Take Profit Amount" variant="outlined" onChange={(e)=>setTakeProfitAmount(e.target.value)}/>
                <TextField  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"95%","lg":"20%"}}} id="outlined-basic" label="Stop loss amount" variant="outlined" onChange={(e)=>setStopLossAmount(e.target.value)}/>
            </FormGroup>
        </Box>
    </Box>
  )
}

export default ProfitLoss