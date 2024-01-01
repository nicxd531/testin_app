import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import CalculateIcon from '@mui/icons-material/Calculate';
// variable for soring width
const drawerWidth = 240;
//  variable for handling side bar width   
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
// width for handling width transition 
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
// drawerHeader function for styling component from material ui
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


// drawer variable for styling drawer component 
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const nav =[
    {
        iconName:'Expenses',
        iconLink:'/firebase/Dashboard-firebase'
    },
    {
        iconName:'Movies',
        iconLink:'/firebase/Dashboard-firebase/movies'
    },{
      iconName:'calculator',
      iconLink:'/firebase/Dashboard-firebase/calculator'
  }
]

function DashboardAsideBar({open}) {
  // theme variable for holding thr theme function 
const theme = useTheme();
  return (
    <Drawer id="drawerM2" className='drawer' variant="permanent" open={open} sx={{position:"relative",overflow:"visible",height:{xs:"94%",lg:"93.5%"}}}>
            <List sx={{position:"relative",zIndex:1,height:"50px"}}>
              {nav.map((text, index) =>{
                let icon 
                if (text.iconName == "Expenses"){
                  icon = <AccountBalanceIcon />
                }else if(text.iconName =="Movies"){
                  icon = <MovieIcon/>
                }else if(text.iconName =="calculator"){
                  icon = <CalculateIcon/>
                }
                return (
                    <ListItem key={text.iconName} disablePadding sx={{ display: 'block' }}>
                         <Link to={text.iconLink}>
                            <ListItemButton
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                            >
                                    <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                    >
                                    {icon}
                                    </ListItemIcon>
                                        <ListItemText primary={text.iconName} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                         </Link>
                     </ListItem> 
                   
              )})}
            </List>
          
          </Drawer>
  )
}

export default DashboardAsideBar