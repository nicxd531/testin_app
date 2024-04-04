import React from 'react'
import Box from "@mui/material/Box"
import { Button, Divider, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

function JokeGenerator() {
  // states for checking if the joke is funny and fetch each joke
  const [jokeData, setJokeData] = useState("")
  const [funny, setFunny] = useState("")
  // api key holder for the fetching of the joke 
  const apiKey = "C/tn/k9xvcdPHQuTsL9mQg==m9md9WxJ0p1fXKeH"
  // links for the gifs for the jokes
  const booring = "https://media.giphy.com/media/tmQrpA8zpG4a16SSxm/giphy.gif"
  const yes = "https://media.giphy.com/media/Q7ozWVYCR0nyW2rvPW/giphy.gif"
  // handler for fetching jokes 
  const handelGenerattion = () => {
    // joke limit const and url for joke fetching 
    const limit = 1;
    const apiUrl = 'https://api.api-ninjas.com/v1/jokes';
    // reset joke check
    setFunny("")
    // axios method for fetching joke with methods ,url and header passed in 
    axios({
      method: 'get',
      url: `${apiUrl}?limit=${limit}`,
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setJokeData(response.data[0].joke);
      })
      .catch((error) => {
        console.error('Error: ', error.response.data);
      });


  }

  return (
    <section className='d-flex justify-content-center align-items-center w-100 mt-5  '>
      <Box sx={{ bgcolor: "#cfccd5" }} className="p-5 br-5 d-flex justify-content-center align-items-center flex-column">
        <Typography variant="h4" sx={{ textTransform: "capitalize", textAlign: "center", fontWeight: "bold", mb: 2, fontSize: { xs: "1.5rem", lg: "2rem" } }}> welcome to joke generator</Typography>
        <Divider className='bg-info' />
        <Typography variant='h5' sx={{ mb: 2, textAlign: "justify", fontSize: { xs: "0.9rem", lg: "1.2rem" } }}>{jokeData ? jokeData : "click the button below to generate a joke"} </Typography>
        <Box className="w-100 d-flex justify-content-center">
          <Button onClick={handelGenerattion} variant='contained'>{jokeData ? "Re-generate joke" : "Generate Joke"}</Button>
        </Box>
        <Divider />
        <Typography sx={{ textAlign: "center", mt: 2 }}>is the joke funny </Typography>
        <Box className="w-100 d-flex justify-content-center align-items-center mt-2">
          <Button onClick={() => setFunny(true)} className='bg-success me-1' variant='contained'>yes</Button>
          <Button onClick={() => setFunny(false)} className='bg-danger ms-1' variant='contained'>it fucking booring </Button>
        </Box>
        <Paper sx={{ width: "fit-content", mt: 2 }} elevation={3} >
          {funny === true && <img width="100" src={yes} alt="Awesome GIF" />}
          {funny === false && <img width="100" src={booring} alt="Awesome GIF" />}
        </Paper>
      </Box>

    </section>
  )
}

export default JokeGenerator