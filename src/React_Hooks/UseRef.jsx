import { Box, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'


function UseRef() {
  // this component contains html and states in combination with use ref
  // use state hooks for both randomInput and seconds
  const [randomInput, setRamdonInput] = useState("")
  const [seconds, setSeconds] = useState(0)
  // refss for timer id , input ref and renders
  const renders = useRef(0)
  const inputRef = useRef(0)
  const timerId = useRef();
  //  handle change function set random input and increasing renders current
  const handleChange = (e) => {
    setRamdonInput(e.target.value)
    renders.current++;
  }
  // focus function for handling input functions 
  const focusOnInput = () => {
    inputRef.current.focus();
  }
  // start timer function for handling seconds increase and increasing renders current
  const StartTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1)
    }, 1000)
  }
  // stoptimer function for stoping timer and clearing interval
  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0;
  }
  // reset timer function for reseting timer
  const resetTimer = () => {
    stopTimer()
    if (seconds) {
      renders.current++;
      setSeconds(0)
    }
  }
  return (
    <section className='d-flex flex-column align-items-center'>
      <Box sx={{ width: { xs: "90%", lg: "75%" } }} className="input-group input-group-lg  mt-4">
        <span className="input-group-text" id="inputGroup-sizing-lg"><Typography sx={{ fontSize: { xs: "0.9rem", lg: "1.5rem" } }}>Random Input</Typography> </span>
        <input
          ref={inputRef}
          className='my-2'
          value={randomInput}
          onChange={handleChange}
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg" />
      </Box>
      <Typography sx={{ fontSize: { xs: "1.2rem", lg: "2rem" } }} className='my-3 fw-bold'>renders: {renders.current}</Typography>
      <Typography sx={{ fontSize: { xs: "1.2em", lg: "2rem" } }} className='fw-bold mb-2'>Seconds:{seconds}</Typography>
      <div className='mb-3'>
        <button onClick={StartTimer} className='btn btn-sm btn-success fs-3 px-4'>Start</button>
        <button onClick={stopTimer} className='btn btn-sm btn-danger ms-3 fs-3 px-4'>Stop</button>
        <button onClick={resetTimer} className='btn btn-sm btn-info fs-3 ms-3 px-4'>Reset</button>
      </div>
      <button onClick={focusOnInput} className='btn btn-sm btn-info fs-3'>Focus</button>
      <p className='my-3 fs-1 fw-bold'>{randomInput}</p>
    </section>
  )
}

export default UseRef