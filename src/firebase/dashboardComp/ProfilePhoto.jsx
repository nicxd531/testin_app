import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import {  useNavigate } from 'react-router-dom';



export default function ProfilePhoto() {
  // useState hook for holding anchor 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // function for opening mini menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // function for closing mini menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  // signout function 
  const signUserOut =async()=>{
    await signOut
  }
  const navigate =useNavigate()
  // handle click function for signout 
  const click =async ()=>{
    try{
    await signUserOut(auth)
    navigate("/firebase/login")
    }
    catch(err){
console.error(err)
    }
    handleClose()
}
  return (
    <Box sx={{display:{xs:"flex"}}}>
          <IconButton component="li"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <SettingsIcon sx={{ fontSize: {xs:18,lg:27}}}/>
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={click}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
