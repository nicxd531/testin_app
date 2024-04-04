import React from 'react'
import { useSelector } from 'react-redux'
import { logout } from "../features/User"
import { useDispatch } from 'react-redux'
import { userStatus } from '../features/UserStatus';
import ChangeColor from './ChangeColor'
import { Box } from '@mui/material';


function Profile() {
  // this component is used to dipaly the loged in profile
  // this component contains two use selector method that is used o fetch both the theme and user value stored in the main store
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const handleClick = () => {
    dispatch(
      logout()
    ),
      dispatch2(userStatus(false))
  }
  const { name, age, email } = user

  return (
    <Box
      sx={{ width: { xs: "95%", lg: "75%" }, px: { xs: 4 }, py: { xs: 6 } }}
      style={{ color: themeColor }}
      className='d-flex flex-column align-items-center  bg-secondary p-5'
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
      <ChangeColor />
    </Box>
  )
}

export default Profile