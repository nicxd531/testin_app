import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';

function AppBarM({open,handleDrawerOpen,currentTheme,setBgTheme}) {
  // states for handling if the search bar is clicked to show them
  const [clicked, setClicked] = useState(false)
  const [searchSm, setSearchSm]=useState(false)
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
  const themeIcon =currentTheme=="white" ?<IconButton component="li"><ModeNightIcon sx={{ fontSize: 27}} onClick={()=>handleTheme("dark")}/></IconButton>:<IconButton component="li"><LightModeOutlinedIcon onClick={()=>handleTheme("light")} sx={{ fontSize: 27}}/></IconButton>

  return (
    <AppBar position="relative" open={open} >
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
            <img  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" width="30"/>
            <Typography variant="h5" noWrap component="h1">
              Keep
            </Typography>
            </Box>
            <SearchBar clicked={clicked} setClicked={setClicked} searchSm={searchSm} setSearchSm={setSearchSm} currentTheme={currentTheme}/>
            <Box component="ul" sx={{maginLeft:"auto"}}className='d-flex justify-content-between'> 
              {themeIcon}
              <IconButton aria-label="search" component="li" className='sm-show lg-hide'onClick={()=>setSearchSm(!searchSm)}>
                <SearchOutlinedIcon sx={{ fontSize: 27}}  />
              </IconButton>
              <IconButton component="li">
                <ReplayIcon sx={{ fontSize: 27}}/>
              </IconButton>
              <IconButton component="li">
                <SettingsIcon sx={{ fontSize: 27}}/>
              </IconButton>
              <IconButton component="li">
                <AppsIcon sx={{ fontSize: 27}}/>
              </IconButton>
              <IconButton component="li" >
               <Avatar sx={{width:"30px",height:"30px"}} alt="Cindy Baker" src="https://lh3.googleusercontent.com/ogw/ANLem4ZfW60JQsUOjgH6-8NwviwAQ56L9RECSZzL26_bSA=s32-c-mo" />
              </IconButton>
            </Box>
          </Toolbar>
    </AppBar>
  )
}

export default AppBarM