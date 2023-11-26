import React, { useState } from 'react'
import Login from './usecontext/Login';
import Profile from './usecontext/Profile';
import { LoginContext } from './usecontext/LoginContext';


function UseContext1() {
  // list of states uses foe showing profiles and setting userName
  const [showProfile, setShowProfile]=useState(false)
  const [username, setUsername]=useState("")
  return (
    <section className='d-flex  justify-content-center flex-column align-items-center'>
      <LoginContext.Provider value={{username ,setUsername,setShowProfile}}>
        {showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </section>
  )
}

export default UseContext1