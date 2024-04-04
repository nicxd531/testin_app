import React ,{useContext}from 'react'
import { LoginContext } from './LoginContext'
import { Box } from '@mui/material'


function Profile() {
  // use context hook for fetching user name 
    const {username}=useContext(LoginContext)
  return (
    <Box sx={{width:{xs:"90%",lg:"75%"}}} className=' my-5 text-center border bg-secondary text-white p-5'>
        <h1>profile</h1>
        <h1>username: {username}</h1>
    </Box>
  )
}

export default Profile