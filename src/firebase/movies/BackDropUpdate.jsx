import Backdrop from '@mui/material/Backdrop';
import React, { useState } from 'react'
import { Chip,Divider,Box, Typography, Paper} from '@mui/material'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import HoverRating from "./HoverRating"
import SendIcon from '@mui/icons-material/Send';
import { updateDoc,doc } from 'firebase/firestore'
import {auth,db} from"../../config/firebase-config"


export default function BackDropUpdate({getMovieList,open,handleClose,actorActress,id,movieTitle,rating ,realeseDate,recievedOscar,trailerLink}) {
    // update movie component
    const results = auth.currentUser
    const mainid =id;
    // states for the input component
    const [movieTitleM,setMovieTitle]=useState(movieTitle)
    const [realeseDateM,setReleaseDate]=useState(realeseDate)
    const [actorActressM,setActorActress]=useState(actorActress)
    const [trailerLinkM,setTrailerLink]=useState(trailerLink)
    const [ratingM,SetRating]=useState(rating)
    const [recievedOscarM,SetRecievedOscar]=useState(recievedOscar);
    // data for each watch list 
    const newData={
      movieTitle:movieTitleM,
      realeseDate:realeseDateM,
      actorActress:actorActressM,
      trailerLink:trailerLinkM,
      rating:ratingM,
      recievedOscar:recievedOscarM,
      userID: results?.uid
    }
//    update movie handler
    const UpdateMovieHandler = async (id)=>{
        const movieDoc =doc(db,"movies",id)
        await updateDoc (movieDoc,newData)
        getMovieList()
      }
    //   basic handler
      const handle =(id)=>{
        handleClose(); 
        UpdateMovieHandler(id)
      }
    
  return (
      <Backdrop
        sx={{ color: '#fff', zIndex: "3000 "}}
        open={open}
      >
        <Paper sx={{width:"80%",p:1,pb:3,ml:7}}>
       <Divider>
            <Chip sx={{fontSize:{"lg":"20px"},mt:2}} label="Update Movies" size="medium" />
        </Divider>
        <Box>
            <FormGroup sx={{mt:3,flexDirection:{"xs":"column","lg":"row"}}} className='d-flex justify-content-center align-items-center '>
                <TextField  value={movieTitleM} sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Movie Title" variant="outlined"  onChange={(e)=>setMovieTitle(e.target.value)}/>
                <FormControlLabel sx={{mr:{"lg":3},mt:{"xs":3}}} control={<Switch  checked={recievedOscarM} onChange={()=>SetRecievedOscar(!recievedOscarM)}/>} label="Recieved Oscar Yes/No" />
                <TextField value={realeseDateM} sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Release Date" variant="outlined" onChange={(e)=>setReleaseDate(e.target.value)}/>
                <TextField value={actorActressM} sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Actors/Actresses" variant="outlined" onChange={(e)=>setActorActress(e.target.value)}/>
                <TextField value={trailerLinkM}  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} id="outlined-basic" label="Trailer Link" variant="outlined" onChange={(e)=>setTrailerLink(e.target.value)}/>
                <HoverRating  value={ratingM} setValue={SetRating}/>
                <Button onClick={()=>{handle(mainid )} }  sx={{mr:{"lg":3},mt:{"xs":3},width:{"xs":"80%","lg":"20%"}}} component="label" variant="contained" endIcon={<SendIcon />}>
                    update watchlist
                </Button>
            </FormGroup>
        </Box>
        </Paper>
      </Backdrop>
  );
}