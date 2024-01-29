import React from 'react'
import { Avatar, Button, Typography } from '@mui/material';
import{signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import {auth,provider} from "../../config/firebase-config"

function GoogleButton() {
    // use navigate const for redirection 
    const navigate = useNavigate();
    // function for handling sign in with popup
    const signInWithGoogle= async()=>{
       const results = await signInWithPopup(auth, provider)
       const authInfo ={
        userID: results?.user?.uid,
        name : results?.user?.displayName,
        profilePhoto:results?.user?.photoURL,
        isAuth: true
       }
       localStorage.setItem("auth",JSON.stringify(authInfo))
       navigate("/firebase/Dashboard-firebase")
    }
  return (
    <Button color="success" sx={{width:"80%",mb:2}} className="d-flex justify-content-center align-items-center bg-secondary br-5" onClick={signInWithGoogle}>
        <Avatar alt="gogle sign in" src="/image/google.png" />
        <Typography sx={{color:"black",fontWeight:"bold",ml:2}}>Continue with Google</Typography>
    </Button>
  )
}

export default GoogleButton