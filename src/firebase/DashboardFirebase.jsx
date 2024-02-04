import { Route,Routes } from 'react-router-dom';
import React,{useState} from 'react'
import { Box } from '@mui/material'
import DashboardNavBar from './dashboardComp/DashboardNavBar';
import DashboardAsideBar from './dashboardComp/DashboardAsideBar';
import ExpenseTrackerHome from './expenses/ExpenseTrackerHome';
import Movies from './movies/Movies';
import CalculatorHome from './calculator/CalculatorHome';


function DashboardFirebase({setBgTheme,bgTheme}) {
  // this is the main dashboard component 
  // states for opening the side bar
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("Expense Tracker ");
  // function for handling  the open state
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <Box className="firebase-dashboard " sx={{ display: 'flex' ,position:"relative",flexDirection:"column"}}>
        <DashboardNavBar open={open} handleDrawerOpen={handleDrawerOpen} currentTab={currentTab} setBgTheme={setBgTheme} bgTheme={bgTheme}/>
        <Box sx={{height:"fit-content"}} className="d-flex ">
        <DashboardAsideBar open={open} setCurrentTab={setCurrentTab}/>
        <Routes>
                <Route path='/' element={<ExpenseTrackerHome/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/calculator' element={<CalculatorHome/>}/>
        </Routes> 
        </Box>
    </Box>
  )
}

export default DashboardFirebase