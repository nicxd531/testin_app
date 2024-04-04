import React, { useState } from 'react'
import { Avatar, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleButton from './auth/GoogleButton';
import LoginEmail from './auth/LoginEmail';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../config/firebase-config"
import AppleButton from './auth/AppleButton';
import { Alert } from 'react-bootstrap';
import LoadingButton from '@mui/lab/LoadingButton';


function LogIn() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = React.useState(false);
  // this is the componnent for logging into the app
  // states  for handling show password 
  const [showPassword, setShowPassword] = useState(false);
  // distructed custom hook for getting name and profile photo
  // functions for handling mouse down and showing password 
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  // main sign in function
  const signIn = async () => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, Password)
      const results = auth.currentUser
      const authInfo = {
        userID: results?.uid,
        name: results?.email,
        profilePhoto: results?.photoURL,
        isAuth: true
      }
      localStorage.setItem("auth", JSON.stringify(authInfo))
      navigate("/firebase/Dashboard-firebase")
      setLoading(false)
    } catch (error) {
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign-in error:', errorCode, errorMessage);
      setAlert(`email/password doesn't match ${errorCode}`)
      setLoading(false)
    }
  }
  return (
    <Paper sx={{ Width: { xs: "90%", lg: "40%" }, px: { xs: 2, lg: 5 }, py: { xs: 4, lg: 4 }, m: 5 }} className="d-flex flex-column justify-content-center align-items-center ">
      {alert && <Alert classname="w-100" variant="danger">{alert}</Alert>}
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", fontSize: { xs: "2rem", lg: "3rem" } }}>WELCOME TO EM-APP</Typography>
      <Typography variant='h6' sx={{ textAlign: "center", fontSize: { xs: "0.9rem", lg: "1rem" } }}>best movie watch list saver,fx calculator and expense traker</Typography>
      <LoginEmail handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} showPassword={showPassword} setPassword={setPassword} setEmail={setEmail} />
      <Typography sx={{ width: "80%", p: 1, fontWeight: "bold" }} >
        <Link >Forgot your password ?</Link>
      </Typography>
      <LoadingButton loading={loading} variant="contained" size="large" sx={{ width: "80%", fontSize: "14px" }} onClick={signIn}> <span>Log In</span></LoadingButton>
      <Typography variant='h6' sx={{ width: "80%", p: 1, fontWeight: "bold", textAlign: "center" }}>OR</Typography>
      <GoogleButton />
      <AppleButton />
      <Typography sx={{ fontWeight: "bold" }} >don't have an account ?  <Link to={"/firebase"}> Sign Up</Link></Typography>
    </Paper>

  )
}

export default LogIn