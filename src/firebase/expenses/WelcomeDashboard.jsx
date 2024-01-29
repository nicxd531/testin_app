import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'


function WelcomeDashboard({transactionTotal}) {
  // this component displays that account status
  // custom hook for getting user info
  const {name}=useGetUserInfo()
  
  // object that contains acount information
  const {balance, expense,income}=transactionTotal
  return (
    <>
        <Box sx={{opacity:"1",mb:{xs:2,lg:3}}}>
            <Typography variant='h3' sx={{fontSize:{xs:"20px",lg:"3rem",textTransform:"capitalize"},mb:{xs:2,lg:0}}} >Welcome {name}</Typography>
            <Typography variant="h4" sx={{fontSize:{xs:"18px",lg:"2.125rem"}}}>Total Balance : {balance>=0 ? `$ ${balance}` :`- $ ${balance * -1}`}</Typography>
        </Box>
        <Divider/>
        <Box sx={{mb:3}}>
            <Box className="income d-flex"><Typography variant="h5">Income :</Typography><Typography sx={{ml:2}} variant="h5"> ${income}</Typography></Box>
            <Box className="expense d-flex"><Typography variant="h5">Expense :</Typography><Typography sx={{ml:2}} variant="h5">${expense}</Typography></Box>
        </Box>
    </>
  )
}

export default WelcomeDashboard