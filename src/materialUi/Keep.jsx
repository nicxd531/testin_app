import * as React from 'react';
import Box from '@mui/material/Box';
import AppBarM from './AppBarM';
import AsideBar from './AsideBar';
import MainContent from './MainContent';
// main keep app component
function Keep({currentTheme,setBgTheme}) {
  // states for opening the side bar
  const [open, setOpen] = React.useState(false);
  // function for handling  the open state
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
      <Box sx={{ display: 'flex' ,position:"relative",flexDirection:"column"}}>
        <AppBarM open={open} handleDrawerOpen={handleDrawerOpen} currentTheme={currentTheme} setBgTheme={setBgTheme}/>
        <Box sx={{height:"fit-content"}} className="d-flex ">
          <AsideBar open={open}/>
          <MainContent currentTheme={currentTheme}/>
        </Box>
      </Box>
    
  )
}

export default Keep