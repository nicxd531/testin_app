import React from 'react'
import Box from "@mui/material/Box"
import { Button, Divider, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'


function FactGenerator() {
  // states for checking if the joke is funny and fetch each joke
  const [factData, setFactData] = useState("")
  const [useFulFact, setUseFulFact] = useState("")

  // links for the gifs for the fact
  const useless = <iframe src="https://giphy.com/embed/lcjWzvc9po5Og6eV4V"  ></iframe>
  const useful = <iframe src="https://giphy.com/embed/AJdept24OrIkTN5uLu"  ></iframe>
  // handler for fetching jokes 
  const handelGeneration = () => {
    // url for random fact
    const apiUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
    // reset fact method
    setUseFulFact("")
    // axios method for fetching fact with url
    axios({
      method: 'get',
      url: `${apiUrl}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setFactData(response.data.text)
      })
      .catch((error) => {
        console.error('Error: ', error.response.data);
      });
  }

  return (
    <section className='d-flex justify-content-center align-items-center w-100 mt-5  '>
      <Box sx={{ bgcolor: "#cfccd5" }} className="p-5 br-5 d-flex justify-content-center align-items-center flex-column">
        <Typography variant="h4" sx={{ textTransform: "capitalize", textAlign: "center", fontWeight: "bold", mb: 2, fontSize: { xs: "1.5rem", lg: "2rem" } }}> Welcome To Fact Generator</Typography>
        <Divider className='bg-info' />
        <Typography variant='h5' sx={{ mb: 2, textAlign: "justify", fontSize: { xs: "0.9rem", lg: "1.2rem" } }}>{factData ? factData : "click the button below to generate a fact"} </Typography>
        <Box className="w-100 d-flex justify-content-center">
          <Button onClick={handelGeneration} variant='contained'>{factData ? "Re-generate fact" : "Generate fact"}</Button>
        </Box>
        <Divider />
        <Typography sx={{ textAlign: "center", mt: 2 }}>is the fact valid ? </Typography>
        <Box className="w-100 d-flex justify-content-center align-items-center mt-2">
          <Button onClick={() => setUseFulFact(true)} className='bg-success me-1' variant='contained'>yes</Button>
          <Button onClick={() => setUseFulFact(false)} className='bg-danger ms-1' variant='contained'>it fucking useless</Button>
        </Box>
        <Paper sx={{ mt: 2, display: "flex", justifyContent: "center" }} elevation={3} >
          {useFulFact === true && useful}
          {useFulFact === false && useless}
        </Paper>

      </Box>

    </section>
  )
}

export default FactGenerator