import React from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { EmailOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';





function LoginEmail({handleClickShowPassword,handleMouseDownPassword,showPassword,setPassword,setEmail}) {

  return (
    <Box sx={{width:"80%"}} className="d-flex flex-column justify-content-center align-items-center ">
        <FormControl sx={{ m: 1, width: '100%' ,mt:4}} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type='email' 
            onChange={(e)=>{setEmail(e.target.value)}}
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
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e)=>{setPassword(e.target.value)}}
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
        
    </Box>
  )
}

export default LoginEmail