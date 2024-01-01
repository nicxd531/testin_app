import React from 'react'
import { Box, Paper } from '@mui/material'

function Movies() {
  return (
    <Box className="movies" ssx={{ml:1,p:10,width:"100%",height:"100%"}}>
        <Paper sx={{opacity:"0.8"}}>
            <Box sx={{opacity:"1"}}>
                movies
            </Box>
        </Paper>
    </Box>
  )
}

export default Movies