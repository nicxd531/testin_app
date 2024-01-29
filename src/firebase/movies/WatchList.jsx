import React from 'react'
import { Chip,Divider,Box, Typography} from '@mui/material'


function WatchList() {
  return (
    <section>
        <Divider sx={{mt:4}}>
            <Chip sx={{fontSize:{"lg":"20px"}}} label="Watch List" size="medium" />
        </Divider>
    </section>
  )
}

export default WatchList