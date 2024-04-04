import React,{useState} from 'react'
import { Button, Paper, Typography } from '@mui/material';
import { Link} from 'react-router-dom';
import GoogleButton from './auth/GoogleButton';
import AppleButton from './auth/AppleButton';
import SigninEmail from './auth/SigninEmail';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from"../config/firebase-config"
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import LoadingButton from '@mui/lab/LoadingButton';


function SignUp() {
  const navigate = useNavigate();
  // this is the sign up function
  // states for managing  password
    const [showPassword, setShowPassword] =useState(false);
    const [email, setEmail] =useState("");
    const [showPassword2, setShowPassword2] =useState(false);
    const [Password, setPassword] =useState("");
    const [confirmPassword, setComfirmPassword] =useState("");
    const [alert, setAlert] =useState(false);
  const [loading, setLoading] = React.useState(false);

  // function for handling mousedown and show password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    // main signUp function
   const signUp = async ()=> {
    setAlert(false)
    setLoading(true)
    try{
      if (Password == confirmPassword){
        setAlert(false)
        await createUserWithEmailAndPassword(auth,email,Password)
        const results = auth.currentUser
           const authInfo ={
            userID: results?.uid,
            name : results?.email,
            profilePhoto:results?.photoURL,
            isAuth: true
           }
           localStorage.setItem("auth",JSON.stringify(authInfo))
           navigate("/firebase/Dashboard-firebase")
           setLoading(false)
      }else{
        setAlert("password doesn't match")
        setLoading(false)
      }
    }catch(error){
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign-in error:', errorCode, errorMessage);
      setAlert(`email/password doesn't match ${errorCode}`)
      setLoading(false)
    }
    
   }
  return (
    <Paper sx={{Width:{xs:"90%",lg:"40%"},px:{xs:1,lg:5},py:{xs:4,lg:4},m:5}} className="d-flex flex-column justify-content-center align-items-center ">
      {alert &&  <Alert classname="w-100" variant="danger">{alert}</Alert>}
        <Typography  variant="h4" sx={{fontWeight:"bold",textAlign:"center",fontSize:{xs:"2rem",lg:"3rem"}}}>WELCOME TO EM-APP</Typography>
        <Typography variant='h6'  sx={{fontSize:{xs:"0.9rem",lg:"1rem"}}}>best movie watch list saver and expense traker</Typography>
        <SigninEmail setPassword={setPassword} handleClickShowPassword={handleClickShowPassword}  handleMouseDownPassword={handleMouseDownPassword} setComfirmPassword={setComfirmPassword}  showPassword={showPassword} showPassword2={showPassword2} setEmail={setEmail} handleClickShowPassword2={handleClickShowPassword2}/>
        <Typography  sx={{width:"80%", p:1,fontWeight:"bold"}} >
              <Link >Forgot your password ?</Link>
        </Typography>
        <LoadingButton loading={loading} variant="contained" size="large" sx={{width:"80%",fontSize:"14px"}} onClick={signUp}> <span>Sign Up</span></LoadingButton>
        <Typography variant='h6' sx={{width:"80%", p:1,fontWeight:"bold",textAlign:"center"}}>OR</Typography>
        <GoogleButton/>
        <AppleButton/>
        <Typography sx={{fontWeight:"bold"}} >already have an account ?  <Link to={"/firebase/login"}> Log In</Link></Typography>
    </Paper>
    
  )
}

export default SignUp