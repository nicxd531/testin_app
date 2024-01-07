import React ,{useState,useEffect} from 'react'
import Homepage from './homepage'
import { Route,Routes } from 'react-router-dom'
import Explation from "../components/Explation"
import DashboardFirebase from './DashboardFirebase'
import { ThemeProvider,createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'
import data from "../firebase/data1.json"

function FirebaseHome() {
  const usage ="Firebase is a comprehensive mobile and web application development platform provided by Google that offers a wide array of tools and services to simplify the development process. Central to Firebase is its real-time NoSQL database, facilitating effortless data synchronization across clients. Additionally, Firebase provides user authentication, cloud functions for serverless computing, hosting for web applications, and various other services such as Cloud Firestore, Firebase Cloud Messaging (FCM), and Firebase Authentication. Its ease of integration, scalability, and the ability to handle key aspects of app development, including authentication, data storage, and serverless computing, make Firebase a popular choice for developers seeking a robust and user-friendly backend solution."
    // this is the main firebase home component
     // state management for the background theme
     const [bgTheme, setBgTheme]=useState("dark")
     // theme variable for ediiting the material ui internale theme using the the create theme function 
     const theme = createTheme({
        palette:{
            mode: bgTheme,
            primary:{
                main:orange[500]
            }
        }
    });
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
    <main className='header background  firebase'>
        <header className='mb-2 px-3 header-top-padding'>
              <h1>HOME OF FIREBASE</h1>
              <h4>This section contains integration of firebase as a backend storage and authenticator for the movies and expense tracker app</h4>
              <hr className='w-100 bg-warning mt-5'/>
        </header>
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/*' element={<Homepage/>}/>
                <Route path='/Dashboard-firebase/*' element={<DashboardFirebase setBgTheme={setBgTheme} bgTheme={bgTheme}/>}/>
            </Routes> 
        </ThemeProvider>
        <Explation usage={usage} data={data}/>
    </main>
  )
}

export default FirebaseHome