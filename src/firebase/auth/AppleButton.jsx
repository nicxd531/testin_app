import React from 'react'
import { Avatar,Button,Typography } from '@mui/material';

function AppleButton() {
  return (
    <Button sx={{width:"80%",mb:2}} className="d-flex justify-content-center align-items-center bg-dark br-5" >
            <Avatar alt="apple sign in" src="/image/apple.png" />
            <Typography sx={{color:"white",fontWeight:"bold",ml:2}}>Continue with Apple</Typography>
    </Button>
  )
}

export default AppleButton