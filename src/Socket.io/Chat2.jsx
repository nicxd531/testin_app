import { Avatar, Box,IconButton,Paper, TextField, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MainChatWindow from './MainChatWindow';
import { io } from 'socket.io-client';
// constant for connecting to the backend 
const socket = io.connect("http://localhost:3000");

function Chat2() {
    // this is the main component for chat 2 
    // states for holding messages and receiving messages and also rooms
    const [message,setMessage]=useState("")
    const [room,setRoom]=useState("")
    const [messageReceived,setMessageReceived]=useState("")
    // function for joining a room
    const joinRoom = ()=>{
        if (room !== ""){
            socket.emit("join_room",room)
        }
    };
    // function for sending messages to the backend 
    const sendMessage=()=>{
        socket.emit("send_message2",{message,room})
       
    };
    console.log("hey we received",messageReceived,room)
    // use effect hook for fetching messages on refresh
    useEffect(()=>{
        // socket method for fetching messages from backend 
        socket.on("receive_message2",(data)=>{
            // method for assigning data to the hook
            console.log("from effect",data)
            setMessageReceived(data.message)
        })
    },[socket]);
  return (
    <Box className='d-flex justify-content-center align-items-center'>
        <Paper className='my-5 d-flex ' sx={{minWidth:{xs:"350px",height:"500px" ,flexDirection:"column"}}}>
            <Box color="primary" className="w-100 bg-success d-flex justify-content-center align-items-center" sx={{minHeight:"50px",borderTopRightRadius:"5px",borderTopLeftRadius:"5px"}}>
                <Avatar sx={{ml:2}}/>
                <Box sx={{flexGrow:"1",ml:2}}>
                    <Typography variant='h5' className="fw-bold">First Group Chat</Typography>
                    <Typography  >Chat 1 ,chat 2 ,chat 3</Typography>
                </Box>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    className='w-25'
                    variant="standard"
                    placeholder='input group id'
                    size="small"
                    sx={{border:"none"}}
                    onChange={(e)=>setRoom(e.target.value)}
                />
                 <IconButton onClick={joinRoom}><AttachFileIcon/></IconButton>
            </Box>
            <MainChatWindow messageReceived={messageReceived}/>
            <Box className='w-100 d-flex bg-success px-3 py-1'>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder='send message....'
                    className='w-100'
                    variant="standard"
                    size="medium"
                    sx={{border:"none"}}
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <IconButton  onClick={sendMessage}><SendIcon/></IconButton>
            </Box>
        </Paper>
    </Box>
  )
}

export default Chat2