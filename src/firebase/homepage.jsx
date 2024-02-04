import React from 'react'
import { Box } from '@mui/material'
import { Route,Routes } from 'react-router-dom'
import SignUp from './SignUp';
import LogIn from './Login';


function homepage() {
  // this is the hompage component fo the firebase app
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