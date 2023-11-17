import React from 'react'
import Profile from './tutorial1/Profile'
import Login from './tutorial1/Login'
import { useSelector } from 'react-redux'

function ReduxTut1() {
  // the use selector method is used to fetch reducers from the store 
  // this component contains the profile component and login component logic 
    const userStatus = useSelector((state)=> state.userStatus.value)
  return (
    <section className='d-flex flex-column p-2 justify-content-center align-items-center pb-5 redux-tut-1'>
        {userStatus ? <Profile/> : <Login/>}
    </section>
  )
}

export default ReduxTut1