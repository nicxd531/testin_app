import React from 'react'
import { Chip,Divider,Box, Typography} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

function PriceInput() {
  return (
    <Box>
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Entry/Exit Price" size="medium" />
        </Divider>
        <Box>
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"row"}}} className='d-flex justify-content-center align-items-center '>
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Risk Price" variant="outlined" />
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Take Profit Price" variant="outlined" />
                <TextField  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Stop loss Price" variant="outlined" />
            </FormGroup>
        </Box>
    </Box>
  )
}

export default PriceInput