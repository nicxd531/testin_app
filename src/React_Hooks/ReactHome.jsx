import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseState from "./UseState"
import UseContext1 from './UseContext1'
import UseEffect from "./UseEffect"
import UseReff from "./UseRef"
import ReactHomeNav from './ReactHomeNav'
import UseReducer from './UseReducer'

function ReactHome() {
  return (
    <main  className='react-home  p-3'>
      <header className='mb-3'>
        <h1>HOME OF REACT</h1>
        <h4>This section contains all react hooks available and an indepth explation of the hooks</h4>
        </header>
      
      <ReactHomeNav/>
      <Routes>
        <Route path='/' element={<UseState/>}/>
        <Route path='/useContext' element={<UseContext1/>}/>
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/useRef' element={<UseReff/>}/>
        <Route path='/useReducer' element={<UseReducer/>}/>
      </Routes>
    </main>
  )
}

export default ReactHome