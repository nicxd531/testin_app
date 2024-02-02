
import { Chip,Divider,Box,Paper} from '@mui/material'
import React from 'react'
import { auth } from '../../../config/firebase-config'
import JournalList from './JournalList'

function JournalData({journalList,getJournalList}) {
  // main journal list component
  const results = auth.currentUser
  const userId =results?.uid
  const userData = journalList && journalList.filter(person => person.userID === userId); 
 
  return (
    <Box >
        <Paper sx={{ml:4,p:1}}>
          <Divider>
              <Chip sx={{fontSize:{"lg":"20px"}}} label="Journal List" size="medium" />
          </Divider>
           <JournalList userData={userData}  getJournalList={getJournalList}/>
        </Paper>
    </Box>
  )
}

export default JournalData