import React, { useState } from 'react'
import { Chip,Divider,Box, Typography} from '@mui/material'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HoverRating from "./HoverRating"
import SendIcon from '@mui/icons-material/Send';

function InputMovies({SetRecievedOscar,recievedOscar,SetRating,rating,setMovieTitle,setReleaseDate,setTrailerLink,setActorActress}) {
    
    const [file,setFile]=useState()
    const [fileName,setFileName]=useState()
    
    
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
        <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Input Movies" size="medium" />
        </Divider>
        <Box>
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"row"}}} className='d-flex justify-content-center align-items-center '>
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Movie Title" variant="outlined"  onChange={(e)=>setMovieTitle(e.target.value)}/>
                <FormControlLabel sx={{mr:{"lg":3},mt:{"xs":3}}} control={<Switch defaultChecked  onChange={(e)=>SetRecievedOscar(!recievedOscar)}/>} label="Recieved Oscar Yes/No" />
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Release Date" variant="outlined" onChange={(e)=>setReleaseDate(e.target.value)}/>
                <TextField sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Actors/Actresses" variant="outlined" onChange={(e)=>setActorActress(e.target.value)}/>
                <TextField  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Trailer Link" variant="outlined" onChange={(e)=>setTrailerLink(e.target.value)}/>
                <Box  className='d-flex justify-content-center align-items-center ' sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"},flexDirection:"column"}}>
                    <Button  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"100%"}}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload file
                        <VisuallyHiddenInput type="file"  onChange={HandleFileUpload}/>
                    </Button>
                    <Typography sx={{mr:{"lg":3},mt:{"xs":1}}}>
                        {name}
                        </Typography>
                </Box>
                <HoverRating  value={rating} setValue={SetRating}/>
                <Button  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} component="label" variant="contained" endIcon={<SendIcon />}>
                    Add To Watch List
                </Button>
            </FormGroup>
        </Box>
    </section>
  )
}

export default InputMovies