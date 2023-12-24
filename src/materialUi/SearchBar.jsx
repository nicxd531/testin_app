import { Box, IconButton } from '@mui/material'
import React,{useRef,useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import InputBase from '@mui/material/InputBase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function SearchBar({clicked ,setClicked,searchSm,setSearchSm,currentTheme}) {
  // state for thr the search bar to reveal the search bar or not and also variable for holding window width and validation for the window width
    const [searchBar, setSearchBar]=useState(false)
    const windowWidth = useRef(window.innerWidth);
    const valid = windowWidth.current < 500
    // function for handling state change for the search bar(both function handle state change for the search bar)
    const handleClick =()=>{
        setClicked(false) ;
        setSearchSm(false);
        setSearchBar(false);
    }
    const handleClick2=()=>{
        setClicked(true) ;
        setSearchBar(true);
    }
  return (
    <Box sx={{height:"48px",width:"50%",bgcolor:`${searchBar?"white": currentTheme}`,borderRadius:"5px"}} onClick={()=>setSearchBar(true)} className={`d-flex align-items-center px-3 sm-hide lg-show ${valid && searchSm ? "search-sm":""}`} >
        {valid  ? <IconButton sx={{color:`${currentTheme = "white"?"black":"white"}`}}><ArrowBackIcon/></IconButton> :<IconButton sx={{color:`${currentTheme = "white"?"black":"white"}`}} onClick={()=>setClicked(true)}>
         <SearchIcon fontSize='large' />     
        </IconButton>}
        <InputBase
        onClick={handleClick2}
        sx={{ ml: 1, flex: 1,color:`${searchBar?"black":"white"}` }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      {
        clicked && 
        <IconButton onClick={handleClick}>
         <CloseIcon fontSize='large' sx={{color:`${currentTheme = "white"?"black":"white"}`}} />
        </IconButton>
      }

    </Box>
  )
}

export default SearchBar