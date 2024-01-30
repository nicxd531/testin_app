import React from 'react'
import { Chip,Divider,Box, Typography} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

function ProfitLoss({setRiskAmount,setStopLossAmount,setTakeProfitAmount}) {
  // main profit or loss input
  return (
    <Box>
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Profit/Loss Amount" size="medium" />
        </Divider>
        <Box>
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"row"}}} className='d-flex justify-content-center align-items-center '>
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Risk Amount" variant="outlined" onChange={(e)=>setRiskAmount(e.target.value)}/>
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Take Profit Amount" variant="outlined" onChange={(e)=>setTakeProfitAmount(e.target.value)}/>
                <TextField  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Stop loss amount" variant="outlined" onChange={(e)=>setStopLossAmount(e.target.value)}/>
            </FormGroup>
        </Box>
    </Box>
  )
}

export default ProfitLoss