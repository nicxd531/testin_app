import React from 'react'
import { Avatar,Button,Typography } from '@mui/material';

function AppleButton() {
  // main apple button
  return (
    <Button sx={{width:"80%",mb:2}} className="d-flex justify-content-center align-items-center bg-dark br-5" >
            <Avatar alt="apple sign in" src="/image/apple.png"  sx={{width:{xs:"24px",lg:"24px"},height:{xs:"24px",lg:"24px"}}}/>
            <Typography sx={{color:"white",fontWeight:"bold",ml:2,fontSize:{xs:"0.7rem",lg:"0.9rem"}}}>Continue with Apple</Typography>
    </Button>
  )
}

export default AppleButton