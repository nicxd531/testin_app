import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import BackDropDisplay from './BackDropDisplay';

function JournalCard(data,getJournalList) {
    // main journal card component 
    const [open, setOpen] = useState(false);
    const {id,pair,StrategyName,tradeDirection,tardeStatus,riskReward,timestampField}=data.data
    
  return (
    <>
     <IconButton sx={{width:"100%",height:"100%",borderRadius:"0"}} onClick={()=>setOpen(!open)}>
            <BackDropDisplay id={id} data={data.data} open={open} onClick={()=>setOpen(!open)} getJournalList={getJournalList}/>
            <ListItem alignItems="flex-start" style={{cursor:"pointer"}}>
                <ListItemAvatar>
                <Avatar alt={pair} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary={pair}
                secondary={
                    <React.Fragment >
                        <Box sx={{flexWrap:"wrap"}} className=" d-flex  align-items-center">
                            <Typography
                                sx={{ display: 'inline' ,maxWidth:"fit-content"}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Strategy Name: {StrategyName}
                            </Typography>
                            <Typography className={`${tradeDirection?"text-success":"text-danger"}`}  sx={{ml:2}}>

                                Trade Direction: {tradeDirection?"Buy":"Sell"}
                            </Typography>
                            <Typography  sx={{ml:2}}>

                                Trade Status :{tardeStatus}
                            </Typography>
                            <Typography  sx={{ml:2}}>

                            Risk /Reward: {riskReward}
                            </Typography>
                            <Typography  sx={{ml:2}}>

                            Date: 
                            </Typography>
                        </Box>
                        
                    </React.Fragment>
                }
                />
                
            </ListItem>
        </IconButton>
        <Divider variant="inset" component="li" />
    </>
  )
}

export default JournalCard