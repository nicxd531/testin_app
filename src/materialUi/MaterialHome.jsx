import { ThemeProvider,createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'
import React, { useState } from 'react'
import Keep from './Keep'



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
    <main className='vh-100 material-ui  pb-3'>
            <header className='mb-2 px-3'>
              <h1>HOME OF MATERIAL UI</h1>
              <h4>This section contains material ui examples in the creation of google keep</h4>
              <hr className='w-100 bg-warning mt-5'/>
            </header>
            <ThemeProvider theme={theme}>
              <Keep currentTheme={currentTheme} setBgTheme={setBgTheme}/>
            </ThemeProvider>
    </main>
  )
}

export default MaterialHome