import React ,{useContext}from 'react'
import { LoginContext } from './LoginContext'

function Profile() {
  // use context hook for fetching user name 
    const {username}=useContext(LoginContext)
  return (
    <section className=' my-5 text-center w-50 border bg-secondary text-white p-5'>
        <h1>profile</h1>
        <h1>username: {username}</h1>
    </section>
  )
}

export default Profile