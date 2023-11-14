import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseState from "./UseState"
import UseContext from './UseContext'
import UseEffect from "./UseEffect"
import UseReff from "./UseRef"
import ReactHomeNav from './ReactHomeNav'

function ReactHome() {
  return (
    <main>
      <header>React Home</header>
      <ReactHomeNav/>
      <Routes>
        <Route path='/' element={<UseState/>}/>
        <Route path='/useContext' element={<UseContext/>}/>
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/useRef' element={<UseReff/>}/>
      </Routes>
    </main>
  )
}

export default ReactHome