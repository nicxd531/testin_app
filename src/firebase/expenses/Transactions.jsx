import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Transactions({transactions}) {
  // this component shows the list of transactions on the account 
  // states for current page 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items per page
  // const forlisting required pages 
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  // data slicing constant for items on each page
  const currentData = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <Box>
        <Typography variant='h4' sx={{mt:2,fontSize:{xs:"1.5rem",lg:"2.125rem"}}}>Transactions</Typography> 
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
          { currentData?.map((data)=>{
            const {title,description,transactionType,transactionAmount,id}= data
            const bg =transactionType == "Income"
            return(
              <Box key={id}>
              <ListItem component="div" alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{bgcolor: bg ? "green":"red"}} alt={title} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                component="div"
                  primary={title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' ,color: bg ? "green":"red",mr:1,textTransform:"capitalize"}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {transactionType}
                      </Typography>
                      $ {transactionAmount}
                      <Typography  component="span" sx={{display:"block"}}>
                      {description}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
                <Divider variant="inset" component="li" />
                </Box>
            )
          })}
    </List>
    <Stack spacing={2} className='d-flex w-200 justify-content-center align-items-center mt-4'>
      <Pagination 
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => setCurrentPage(page)}
       />
    </Stack>
    </Box>
  )
}

export default Transactions