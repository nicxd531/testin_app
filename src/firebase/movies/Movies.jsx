import React, { useState, useEffect } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import InputMovies from './InputMovies'
import WatchList from "./WatchList"
import { db } from "../../config/firebase-config"
import { getDocs, collection } from 'firebase/firestore'


function Movies() {
  // main Movie component
  const [movieList, SetMovieList] = useState([])
  const movieCollectionRef = collection(db, "movies")
  const getMovieList = async () => {
    //read data from database
    try {
      const data = await getDocs(movieCollectionRef)
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      SetMovieList(filteredData)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getMovieList()
  }, [])
  return (
    <Box className="movies  d-flex justify-content-center align-items-center" sx={{ maxWidth: { xs: "560px", lg: "1800px" }, flexGrow: 1, py: 5, position: "relative", height: "fit-content" }}>
      <Paper sx={{ opacity: "0.9", width: "80% ", p: 3, ml: { xs: 7 } }}>
        <Box sx={{ opacity: "1" }}>
          <Typography variant='h4' sx={{ textAlign: { xs: "center", lg: "start" } }}>Movie Watchlist</Typography>
          <InputMovies
            movieCollectionRef={movieCollectionRef}
            getMovieList={getMovieList}
          />
          <WatchList movieList={movieList} movieCollectionRef={movieCollectionRef} getMovieList={getMovieList} />
        </Box>
      </Paper>
    </Box>
  )
}

export default Movies