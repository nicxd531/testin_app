import React, {useState,useRef} from 'react'

function UseRef() {
  const [randomInput, setRamdonInput]=useState("")
  const [seconds, setSeconds]=useState(0)
  const renders = useRef(0)
  const inputRef= useRef(0)
  const timerId = useRef();
 
  const handleChange =(e)=>{
    setRamdonInput(e.target.value)
    renders.current++;
  }
  const focusOnInput =() =>{
    inputRef.current.focus();
  }
  const StartTimer = () =>{
    timerId.current = setInterval(()=>{
      renders.current++;
      setSeconds(prev => prev + 1 )
    }, 1000)
  }
  const stopTimer =() =>{
    clearInterval(timerId.current)
    timerId.current = 0;
  }

  const resetTimer=()=>{
    stopTimer()
    if(seconds){
      renders.current++;
      setSeconds(0)
    }
  }
  return (
    <section className='d-flex flex-column align-items-center'>
      <div class="input-group input-group-lg w-50 mt-4">
            <span class="input-group-text" id="inputGroup-sizing-lg">Random Input</span>
            <input 
            ref ={inputRef}
            className='my-2'
            value={randomInput}
            onChange={handleChange}
            type="text" 
            class="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <p  className='my-3 fs-1 fw-bold'>renders: {renders.current}</p>
        <p className='fs-1 fw-bold mb-2'>Seconds:{seconds}</p>
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