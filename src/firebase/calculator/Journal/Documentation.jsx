import React from 'react'
import { Chip,Divider,Box, Typography} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

function Documentation() {
  return (
    <Box>
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Price" size="medium" />
        </Divider>
        <Box>
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"column"}}} className='d-flex justify-content-satrt align-items-start '>
                <TextField  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Startegy Name" variant="outlined" />
                <TextField
                sx={{width:"100%",mt:3}}
                id="outlined-multiline-static"
                label="Explaination of Entry"
                multiline
                rows={20}
                column={20}
                />
            </FormGroup>
        </Box>
    </Box>
  )
}

export default Documentation