import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MainContent({currentTheme}) {
  // the main content function for displaying contents
   
  return (                                            
    <Box id="content-main" component="section" className={`${currentTheme== "white"? "black":"white"}`} sx={{ bgcolor:`${currentTheme=="black"?"black":"white"}` ,flexGrow: 1, p: 3 ,position:"relative",height:"fit-content"}}>
        <Typography  sx={{position:"absolute",fontSize:{xs:"0.7rem",lg:"1rem"}}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
        </Typography>
    </Box>
  )
}

export default MainContent