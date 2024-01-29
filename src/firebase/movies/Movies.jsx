import React,{useState} from 'react'
import { Box, Paper,Typography } from '@mui/material'
import InputMovies from './InputMovies'
import WatchList from "./WatchList"

function Movies() {
  const [movieTitle,setMovieTitle]=useState("")
  const [realeseDate,setReleaseDate]=useState("")
  const [actorActress,setActorActress]=useState("")
  const [trailerLink,setTrailerLink]=useState("")
  const [rating,SetRating]=useState(0)
  const [recievedOscar,SetRecievedOscar]=useState(true)
  const newData={
    movieTitle:movieTitle,
    realeseDate:realeseDate,
    actorActress:actorActress,
    trailerLink:trailerLink,
    rating:rating,
    recievedOscar:recievedOscar
  }
 
  return (
    <Box className="movies vh-100 d-flex justify-content-center align-items-center" sx={{flexGrow: 1,py:5 ,position:"relative",height:"fit-content"}}>
        <Paper sx={{opacity:"0.9",width:"80% ",p:3,ml:{xs:7}}}>
            <Box sx={{opacity:"1"}}>
              <Typography variant='h4' sx={{textAlign:{xs:"center",lg:"start"}}}>Movie Watchlist</Typography>
              <InputMovies
              SetRecievedOscar={SetRecievedOscar}
              recievedOscar={recievedOscar}
              SetRating={SetRating}
              rating={rating}
              setMovieTitle={setMovieTitle}
              setReleaseDate={setReleaseDate}
              setTrailerLink={setTrailerLink}
              setActorActress={setActorActress}

              />
              <WatchList/>
            </Box>
        </Paper>
    </Box>
  )
}

export default Movies