import * as React from 'react';
import List from '@mui/material/List';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box} from '@mui/material';
import JournalCard from './JournalCard';




export default function journalList ({userData,getJournalList}){
    // main journal component
    // useState function 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set the number of items per page
    const totalPages = Math.ceil(userData.length / itemsPerPage);
    const currentData = userData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
  return (
    <Box>
        <List sx={{ width: '100%' }}>
           {  currentData &&  currentData?.map((data)=>{
            return(
             <Box key={data.id}>
                <JournalCard data={data} getJournalList={getJournalList}/>
             </Box>
            )
           }) 
          }
        </List>
        <Stack spacing={2} className='d-flex w-200 justify-content-center align-items-center mt-4'>
      <Pagination 
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => setCurrentPage(page)}
       />
    </Stack>
    </Box>
  );
}