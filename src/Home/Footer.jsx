import { Typography,Divider } from '@mui/material'
import React from 'react'


function Footer() {
  // main footer component
  return (
    <footer className='p-3 d-flex footer flex-row justify-content-center align-items-center'>
        <Typography sx={{fontSize:{xs:"0.6rem",lg:"3rem"}}} className='p-2 flex-grow-1 text-center fs-6'>
            Created using : 
            <img src='/vite.svg'/> + <img src='/react.svg' className='rotating-image'/>
        </Typography>
        <Typography sx={{fontSize:{xs:"0.6rem",lg:"3rem"}}} className='p-2 flex-grow-1 text-center fs-6'>Author: Ola Olasunkanmi</Typography>
        <Typography sx={{fontSize:{xs:"0.6rem",lg:"3rem"}}} className='p-2 flex-grow-1 text-center fs-6'>Copyright : all rights reserved 2023</Typography>
    </footer>
  )
}

export default Footer