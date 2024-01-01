import React,{useEffect, useState} from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import { Link, useNavigate ,Navigate} from 'react-router-dom';
import {auth,provider} from "../config/firebase-config"
import{signInWithPopup} from "firebase/auth"
import { useGetUserInfo } from '../hooks/useGetUserInfo';


function LogIn() {
    const [showPassword, setShowPassword] =useState(false);
    const navigate = useNavigate();
    const {name,profilePhoto}=useGetUserInfo

    
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
const signInWithGoogle= async()=>{
   const results = await signInWithPopup(auth, provider)
   const authInfo ={
    userID: results?.user?.uid,
    name : results?.user?.displayName,
    profilePhoto:results?.user?.photoURL,
    isAuth: "true"
   }
   localStorage.setItem("auth",JSON.stringify(authInfo))
   navigate("/firebase/Dashboard-firebase")
}

if (name || profilePhoto){
  console.log("hey it works")
  return<Navigate to={"/firebase/Dashboard-firebase"}/>
}

  return (
    <Paper sx={{maxWidth:"500px",p:3,m:5}} className="d-flex flex-column justify-content-center align-items-center ">
        <Typography  variant="h3" sx={{fontWeight:"bold"}}>WELCOME TO EM-APP</Typography>
        <Typography variant='h6'>best movie watch list saver and expense traker</Typography>
        
    <FormControl sx={{ m: 1, width: '80%' ,mt:4}} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type='email' 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="email"
                  edge="end"
                >
                  <EmailOutlined/>
                </IconButton>
              </InputAdornment>
            }
            label="email"
          />
       
    </FormControl>
    <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">

          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password2"
          />
        </FormControl>
        
            <Typography sx={{width:"80%", p:1,fontWeight:"bold"}} >
                 <Link >Forgot your password ?</Link>
            </Typography>
        <Button variant="contained" size="large" sx={{width:"80%",fontSize:"14px"}}>Log In</Button>
        <Typography variant='h6' sx={{width:"80%", p:1,fontWeight:"bold",textAlign:"center"}}>OR</Typography>
        <Button color="success" sx={{width:"80%",mb:2}} className="d-flex justify-content-center align-items-center bg-secondary br-5" onClick={signInWithGoogle}>
            <Avatar alt="gogle sign in" src="/image/google.png" />
            <Typography sx={{color:"black",fontWeight:"bold",ml:2}}>Continue with Google</Typography>
        </Button>
        <Button sx={{width:"80%",mb:2}} className="d-flex justify-content-center align-items-center bg-dark br-5">
            <Avatar alt="apple sign in" src="/image/apple.png" />
            <Typography sx={{color:"white",fontWeight:"bold",ml:2}}>Continue with Apple</Typography>
        </Button>
        <Typography sx={{fontWeight:"bold"}} >don't have an account ?  <Link to={"/firebase"}> Sign Up</Link></Typography>
    </Paper>
    
  )
}

export default LogIn