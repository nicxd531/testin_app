import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ReduxTut2Home from './tutorial2/ReduxTut2Home'
import Create from './tutorial2/Create'
import Update from './tutorial2/Update'


function RedeuxTut2() {
  // this component contains the other components that make up the second redux tutorial with their rouers
  return (
        <Routes>
            <Route path='/' element={<ReduxTut2Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:id' element={<Update/>}/>
        </Routes>
  )
}

export default RedeuxTut2