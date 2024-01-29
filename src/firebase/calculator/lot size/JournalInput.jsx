import React, { useState } from 'react'
import { Chip,Divider,Box, Typography,Paper} from '@mui/material'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Pair from '../Journal/Pair';
import PriceInput from '../Journal/PriceInput';
import ProfitLoss from '../Journal/ProfitLoss';
import Documentation from '../Journal/Documentation';

function JournalInput() {
  const [value, setValue] = useState(2);
  const [file,setFile]=useState()
  const [fileName,setFileName]=useState()
  const [pair,setPair]=useState()
  
  
  
    let name = ""
    const HandleFileUpload=async(event)=>{
      const files = event.target.files;
      files &&  setFile(files)
      console.log(file,"the file")
      setFileName(file[0].name) 
    
     
    }
   if(!file){
      name = "please upload movie image"
   }else if(file){
     name = fileName
   }
  return (
    <section>
       <Paper sx={{opacity:"0.9",width:"80% ",p:3,ml:{xs:7}}}> 
       <Typography variant="h4">Trade Journal</Typography>
        <FormGroup >
            <Pair  setPair={setPair} name={name} HandleFileUpload={HandleFileUpload} pair={pair}/>
            <PriceInput/>  
            <ProfitLoss/>  
            <Documentation/> 
            <Button  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} component="label" variant="contained" endIcon={<SendIcon />}>
                Save To Journal
            </Button>
        </FormGroup>
          
        </Paper>
    </section>
  )
}

export default JournalInput