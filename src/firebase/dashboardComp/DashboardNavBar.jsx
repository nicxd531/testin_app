import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import ProfilePhoto from './profilePhoto';



function DashboardNavBar({open,handleDrawerOpen,currentTab,setBgTheme,bgTheme}) {
  const {profilePhoto}=useGetUserInfo()

  // app bar variable used for handling the material ui tag 
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    // zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }));
  const handleTheme=(prop)=>{
    setBgTheme(prop)
  }
 // vriable for handling mode icon transition 
 const themeIcon =bgTheme=="light" ?<IconButton component="li" onClick={()=>handleTheme("dark")}><ModeNightIcon sx={{ fontSize: {xs:18,lg:27}}} /></IconButton>:<IconButton component="li" onClick={()=>handleTheme("light")}><LightModeOutlinedIcon  sx={{ fontSize: {xs:18,lg:27}}}/></IconButton>
  return (
    <AppBar position="relative" open={open}  className='zi-1'>
          <Toolbar component="nav" className='d-flex justify-content-between'>
            <Box  className="d-flex align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 1,
              }}
            >
              <MenuIcon sx={{fontSize:24}}/>
            </IconButton>
            <Box>
                
            </Box>
                 <img  src="/image/6475938.png" width="30"/>
            <Typography variant="h5" noWrap component="h1" sx={{ml:{xs:1,lg:2}, fontWeight:"bold",fontSize:{xs:"12px",lg:"24px"}}}>
             AM-App
            </Typography>
            </Box>
            <Typography variant='h3' sx={{fontWeight:"bold",ml:{xs:1} ,fontSize:{xs:"12px",lg:"24px"}}}>{currentTab && currentTab}</Typography>
            <Box component="ul" className='d-flex justify-content-between'> 
                {themeIcon}
              <IconButton component="li">
                <ReplayIcon sx={{ fontSize:{xs:18,lg:27}}}/>
              </IconButton>
              <ProfilePhoto/>
              <IconButton component="li">
                <AppsIcon sx={{ fontSize: {xs:18,lg:27}}}/>
              </IconButton>
              <IconButton component="li" >
               <Avatar sx={{width:"30px",height:"30px"}} alt="profile photo" src={profilePhoto && profilePhoto} />
              </IconButton>
            </Box>
          </Toolbar>
    </AppBar>
  )
}

export default DashboardNavBar