import { Typography } from '@mui/material'
import React from 'react'


function IntroHeader({header,description}) {
  return (
    <header className='mb-3 px-3 header-top-padding'>
        <Typography sx={{fontSize:{xs:"1.2rem",lg:"3rem"},fontWeight:"bold"}}>{header}</Typography>
        <Typography sx={{fontSize:{xs:"1rem",lg:"1.5rem"}}}>{description}</Typography>
        <hr className='w-100 bg-warning mt-5'/>
    </header>
  )
}

export default IntroHeader