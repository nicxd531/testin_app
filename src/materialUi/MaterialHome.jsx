import { Box, ThemeProvider,createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'
import React, { useState } from 'react'
import Keep from './Keep'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'



function MaterialHome() { 
  // state management for the background theme
    const [bgTheme, setBgTheme]=useState("light")
    // theme variable for ediiting the material ui internale theme using the the create theme function 
    const theme = createTheme({
        palette:{
            mode: bgTheme,
            primary:{
                main:orange[500]
            }
        }
    })
    // theme variable for handling the background colour switch case
    const themeC=(bgTheme)=>{
      switch(bgTheme){
        case "light":
          return "white"
        case "dark":
          return "black"
        default:
          return "yellow"
      }
    }
    // variable for holding the condtional statement 
     const currentTheme = themeC(bgTheme)
   
  return (
    <main className=' material-ui background  pb-3'>
            <header className='mb-2 px-3 header-top-padding'>
              <h1>HOME OF MATERIAL UI</h1>
              <h4>This section contains material ui examples in the creation of google keep</h4>
              <hr className='w-100 bg-warning mt-5'/>
              <Stack direction="row" spacing={2} sx={{display:"flex"}}>
                <Typography sx={{textAlign:{"xs":"center"}}} variant="h5" >click these buttons for examples and documentations</Typography>
                <Box sx={{textAlign:"center"}}>
                  <Button  color="info" variant="contained" href="https://mui.com/material-ui" sx={{height:"fit-content",width:"fit-content"}}>
                    documentation
                  </Button>
                  <Button  sx={{height:"fit-content",width:"fit-content",mt:{"xs":1,"lg":0 } ,ml:{"lg":1}}} color="success" variant="contained" href="https://bareynol.github.io/mui-theme-creator/">
                    Examples
                  </Button>
                </Box>
              </Stack>
            </header>
            <ThemeProvider theme={theme}>
              <Keep currentTheme={currentTheme} setBgTheme={setBgTheme}/>
            </ThemeProvider>
    </main>
  )
}

export default MaterialHome