import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Chip,Divider,Box, Typography} from '@mui/material'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


function Pair({setPair,name,HandleFileUpload,pair,setRiskReward}) {
    // main pair component
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
  return (
    
    <Box>
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Pair/Trade Image" size="medium" />
        </Divider>
        <Box sx={{flexDirection:{xs:"column",lg:"row"}}} className='d-flex justify-content-center align-items-center w-100'>
            <FormControl sx={{mr:{"lg":3},mt:{"xs":2},width:{"xs":"80%","lg":"20%"}}} >
                    <InputLabel id="demo-simple-select-autowidth-label " sx={{fontSize:"14px"}}>Pair</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={pair}
                    onChange={(e)=>setPair(e.target.value)}
                    autoWidth
                    label="pair"
                    sx={{mb:{xs:2},width:"100%"}}
                    >
                    
                    <MenuItem sx={{px:3}} value={"GBPUSD"}>GBPUSD</MenuItem>
                    <MenuItem sx={{px:3}} value={"AUDUSD"}>AUDUSD</MenuItem>
                    <MenuItem sx={{px:3}} value={"NZDUSD"}>NZDUSD</MenuItem>
                    <MenuItem sx={{px:3}} value={"EURUSD"}>EURUSD</MenuItem>
                    <MenuItem sx={{px:3}} value={"USDCAD"}>USDCAD</MenuItem>
                    <MenuItem sx={{px:3}} value={"XAUUSD"}>XAUUSD</MenuItem>
                    <MenuItem sx={{px:3}} value={"USDJPY"}>USDJPY</MenuItem>
                    <MenuItem sx={{px:3}} value={"US30"}>US30</MenuItem>
                    <MenuItem sx={{px:3}} value={"S&P500"}>S&P500</MenuItem>
                    <MenuItem sx={{px:3}} value={"NAS100"}>NAS100</MenuItem>
                    </Select>
                    
            </FormControl>
            <TextField sx={{width:{xs:"80%",lg:"20%"}}}  id="outlined-basic" label="Risk/Reward" variant="outlined" onChange={(e)=>setRiskReward(e.target.value)}/>
            <Box  className='d-flex justify-content-center align-items-center ' sx={{ml:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"},flexDirection:"column"}}>
                <Button  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"100%"}}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput type="file"  onChange={HandleFileUpload}/>
                </Button>
                <Typography sx={{mr:{"lg":3},mt:{"xs":1},textAlign:"center"}}>
                    {name}
                </Typography>
            </Box>
            
        </Box>
    </Box>
  )
}

export default Pair