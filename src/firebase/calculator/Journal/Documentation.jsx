import React from 'react'
import { Chip,Divider,Box} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Documentation({setStrategyName,setExplantionEntry,setTradeStatus,tardeStatus}) {
  
  return (
    // main journal documentation component
    <Box>
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Price" size="medium" />
        </Divider>
        <Box >
         
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"column"}}} className='d-flex justify-content-start align-items-center'>
              <Box sx={{flexDirection:{xs:"column",lg:"row"}, justifyContent:{xs:"center",lg:"start"}}} className='d-flex  align-items-center w-100'>
                  <TextField  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"95%","lg":"20%"}}} id="outlined-basic" label="Startegy Name" variant="outlined" onChange={(e)=>setStrategyName(e.target.value)}/>
                  <FormControl sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"95%","lg":"20%"}}}>
                  <InputLabel id="demo-simple-select-label">Trade Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e)=>setTradeStatus(e.target.value)}
                    label="Trade Status"
                    value={tardeStatus}
                  >
                    <MenuItem className='text-warning' value=" InProgress">InProgress</MenuItem>
                    <MenuItem className='text-success' value='Win' >Win</MenuItem>
                    <MenuItem className='text-danger' value="Loss">loss</MenuItem>
                    <MenuItem className='text-info' value="Break Even">Break Even</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                onChange={(e)=>setExplantionEntry(e.target.value)}
                sx={{width:"98%",mt:3}}
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