import { Avatar, Box,IconButton,Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MainChatWindow from './MainChatWindow';

function Chat3() {
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
            <MainChatWindow/>
            <Box className='w-100 d-flex bg-success px-3 py-1'>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Small"
                    className='w-100'
                    variant="standard"
                    size="medium"
                    sx={{border:"none"}}
                />
                <IconButton><AttachFileIcon/></IconButton>
                <IconButton><SendIcon/></IconButton>
            </Box>
        </Paper>
    </Box>
  )
}

export default Chat3