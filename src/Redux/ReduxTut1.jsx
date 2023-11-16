import React from 'react'
import Profile from './tutorial1/Profile'
import Login from './tutorial1/Login'
import { useSelector } from 'react-redux'



function ReduxTut1() {
    const userStatus = useSelector((state)=> state.userStatus.value)
    console.log(userStatus)
  return (
    <section className='d-flex flex-column p-2 justify-content-center align-items-center pb-5 redux-tut-1'>
        {userStatus ? <Profile/> : <Login/>}
        
    </section>
  )
}

export default ReduxTut1