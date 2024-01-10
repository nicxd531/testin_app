import React from 'react'
import { Box } from '@mui/material'


function MainChatWindow({messageReceived}) {
  // this component is the main component that displays all messages
 messageReceived &&  console.log("main chart window",messageReceived)
  
  return (
    <Box className="d-flex p-1" sx={{flexGrow:"1",overflow:"hidden",flexDirection:"column-reverse"}}>
       {messageReceived && messageReceived}
    </Box>
  )
}

export default MainChatWindow