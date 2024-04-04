import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Greetings from '../components/Greetings';
import { Typography } from '@mui/material';

function HomeWelcome({}) {
    // this component consist of just jsx code and imported react typing effect 
    // array list of skills which is then feed to react tytping effect for display 
    const list =["Redux" , "React","React Hooks","useEffect","useContext","useReff","useState","Material UI 🧉","Firebase 🔥"]

  return (
    <section className='p-3 py-5  d-flex  flex-column text-lg-center p-lg-5'>
      <Greetings/>
      <Typography sx={{fontSize:{xs:"1.5rem",lg:"2.5rem"},fontWeight:"bold"}} className=''>Welcome to </Typography>
      <Typography sx={{fontSize:{xs:"2rem",lg:"5rem"},fontWeight:"bold"}} className='fw-bold'>Test-In App</Typography>
      <Typography sx={{fontSize:{xs:"1rem",lg:"2rem"},fontWeight:"bold"}} className=''> An app created to test newly acquired skill</Typography>
      <Typography sx={{fontSize:{xs:"1rem",lg:"2rem"},fontWeight:"bold"}}className=''>
        skills that includes:  
        <ReactTypingEffect
          text={list}
          eraseSpeed= {"10ms"}
          typingDelay= {"10ms"}
          cursor ={" "}
        />
      </Typography>
    </section>
  )
}

export default HomeWelcome