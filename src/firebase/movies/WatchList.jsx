import React ,{ useState } from 'react'
import { Chip,Divider,Box} from '@mui/material'
import CardComponent from "./CardComponent"
import { deleteDoc,doc } from 'firebase/firestore'
import {db} from "../../config/firebase-config"
import {auth} from"../../config/firebase-config"




function WatchList({movieList,getMovieList}) {
 
  // main watchlist component
  // delete movie hndler
  const deleteMovieHandler =async(id)=>{
    const movieDoc =doc(db,"movies",id)
    await deleteDoc(movieDoc)
    getMovieList()
  }
//  variable for uid and seperating user data
  const results = auth.currentUser
  const userId =results?.uid
  const userData = movieList && movieList.filter(person => person.userID === userId); 

  return (
    <section>
        <Divider sx={{mt:4}}>
            <Chip sx={{fontSize:{"lg":"20px"}}} label="Watch List" size="medium" />
        </Divider>
        <Box sx={{flexDirection:{xs:"column",lg:"row"}}} className="d-flex  align-items-center">
          {userData && userData.map((data,index)=>{
            
            return(<><CardComponent getMovieList={getMovieList} deleteMovieHandler={deleteMovieHandler } data={data} key={index}/></>
            )})
        }
        </Box>
        
    </section>
  )
}

export default WatchList