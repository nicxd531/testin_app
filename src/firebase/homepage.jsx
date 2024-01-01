import React from 'react'
import { Box } from '@mui/material'
import { Route,Routes } from 'react-router-dom'
import SignUp from './signup';
import LogIn from './Login';


function homepage() {
  return (
    <Box className="firebase-homepage w-100 d-flex flex-column justify-content-center align-items-center">
        <Routes>
            <Route path='/' element={ <SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
        </Routes> 
      
    </Box>
  )
}

export default homepage