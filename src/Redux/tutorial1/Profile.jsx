import React from 'react'
import {useSelector } from 'react-redux'
import {logout} from "../features/User"
import { useDispatch } from 'react-redux'
import {userStatus }from '../features/UserStatus';
import ChangeColor from './ChangeColor'



function Profile() {
    const user = useSelector((state)=> state.user.value);
    const themeColor= useSelector((state)=> state.theme.value);
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const handleClick=()=>{
        dispatch(
            logout()
            ),
            dispatch2(userStatus(false))
    }
    const {name, age,email}=user

  return (
    <section
    style={{color:themeColor}}
    className='d-flex flex-column align-items-center'
    >
        <h1 className='fs-1 text-uppercase'>Profile page</h1>
        <div className='text-center'>
        <p className='mb-3 fs-3'>Name: {name}</p>
        <p className='mb-3 fs-3'>Age: {age}</p>
        <p className='mb-3 fs-3'>Email: {email}</p>
        </div>
        <button 
        onClick={handleClick}
        className='btn btn-success  btn-sm px-3 mx-3 w-50 mb-3'>
            logout
        </button>
        <ChangeColor/>
    </section>
  )
}

export default Profile