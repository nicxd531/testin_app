import { Avatar, Box,IconButton,Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MainChatWindow from './MainChatWindow';
import { io } from 'socket.io-client';
// constant for connecting ot the backend 
const socket = io.connect("http://localhost:3000");


function Chat1() {
    // this component is the mian chat 1 component 
    // states for the messages and receiving messages
    const [message,setMessage]=useState("")
    const [messageReceived,setMessageReceived]=useState("")
    // function for sending messages 
    const sendMessage=()=>{
        // method for sending the message to the backend 
        socket.emit("send_message",{message:{message}})
    };
    // use effect method for rendering on refresh 
    useEffect(()=>{
        // method for fetching messages from backend when the socked value changes
        socket.on("receive_message",(data)=>{
            // set message method for assigning backend data to state
            setMessageReceived(data.message)
        })
    },[socket]);
  return (
    <Box className='d-flex justify-content-center align-items-center'>
        <Paper className='my-5 d-flex ' sx={{minWidth:{xs:"400px",height:"500px" ,flexDirection:"column"}}}>
            <Box color="primary" className="w-100 bg-success d-flex justify-content-center align-items-center" sx={{minHeight:"50px",borderTopRightRadius:"5px",borderTopLeftRadius:"5px"}}>
                <Avatar sx={{ml:2}}/>
                <Box sx={{flexGrow:"1",ml:2}}>
                    <Typography variant='h5' className="fw-bold">First Group Chat</Typography>
                    <Typography  >Chat 1 ,chat 2 ,chat 3</Typography>
                </Box>
            </Box>
            <MainChatWindow messageReceived={messageReceived}/>
            <Box className='w-100 d-flex bg-success px-3 py-1' sx={{borderBottomRightRadius:"5px",borderBottomLeftRadius:"5px"}}>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder='send message .....'
                    className='w-100'
                    variant="standard"
                    size="medium"
                    sx={{border:"none"}}
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <IconButton><AttachFileIcon/></IconButton>
                <IconButton onClick={sendMessage}><SendIcon/></IconButton>
            </Box>
        </Paper>
    </Box>
  )
}

export default Chat1