import Backdrop from '@mui/material/Backdrop';
import React, { useState } from 'react'
import { Paper, Box, Typography, Divider, Chip, Button } from '@mui/material'
import { db } from '../../../config/firebase-config';
import { deleteDoc, doc } from 'firebase/firestore';

export default function BackDropDisplay({ open, data, getJournalList }) {
  // main backdrop component
  // distructuring of data 
  const { pair, riskReward, entryPrice, takeProfiePrice, stopLossPrice, tradeDirection,
    stopLossAmount, takeProfitAmount, StrategyName, explanationOfEntry, tardeStatus, id } = data
  let direction;
  if (tardeStatus == "Win") {
    direction = "bg-success"
  } else if (tardeStatus == "Loss") {
    direction = "bg-danger"
  } else if (tardeStatus == "InProgress") {
    direction = "bg-warning"
  } else if (tardeStatus == "Break Even") {
    direction = "bg-info"
  }
  // delete handler for deleting journals 
  const deleteMovieHandler = async (userid) => {
    const journalDoc = doc(db, "journal", userid)
    await deleteDoc(journalDoc)
    getJournalList()
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: "3000 ", overflow: "auto" }}
      open={open}
    >
      <Paper sx={{ width: { xs: "95%", lg: "80%" }, p: 1, pb: 3, ml: { lg: 7 } }}>
        <Box sx={{ height: "300px", width: "100%" }}>
          <img style={{ objectFit: "cover" }} className=' h-100 w-100' src='/image/GBPUSD_2023-05-18_13-57-01_50bcd.png' />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => deleteMovieHandler(id)}>Delete</Button>
          <Button sx={{ ml: 2 }} variant="contained">update</Button>
        </Box>
        <Paper className='d-flex   align-items-center' sx={{ flexWrap: "wrap", p: 2, mt: 2, margin: "auto", width: "90%" }}>
          <Divider sx={{ width: "100%" }}>
            <Chip sx={{ fontSize: { "lg": "20px" }, mt: 2 }} label="Pair/Trade Image" size="small" />
          </Divider>
          <Box sx={{ mt: 2, justifyContent: "space-around" }} className="d-flex w-100 align-items-center">
            <Typography sx={{ fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>PAIR: <Chip className='bg-success' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={pair} variant="contained" /> </Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>RISK/REWARD: <Chip className='bg-danger' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={riskReward} variant="contained" /> </Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>ENTRY PRICE: <Chip className='bg-success' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={entryPrice} variant="contained" /></Typography>
          </Box>
          <Divider sx={{ width: "100%" }}>
            <Chip sx={{ fontSize: { "lg": "20px" }, mt: 2 }} label="Pair/Trade Image" size="small" />
          </Divider>
          <Box sx={{ mt: 2, justifyContent: "space-around" }} className="d-flex w-100 align-items-center">
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>TAKE PROFIT PRICE: <Chip className='bg-success' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={takeProfiePrice} variant="contained" /></Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>STOPLOSS PRICE: <Chip className='bg-danger' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={stopLossPrice} variant="contained" /></Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>TRADE DIRECTION: <Chip className={`${tradeDirection ? "bg-success" : "bg-danger"}`} sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={tradeDirection ? "BUY" : "SELL"} variant="contained" /></Typography>
          </Box>
          <Divider sx={{ width: "100%" }}>
            <Chip sx={{ fontSize: { "lg": "20px" }, mt: 2 }} label="Pair/Trade Image" size="small" />
          </Divider>
          <Box sx={{ mt: 2, justifyContent: "space-around" }} className="d-flex w-100 align-items-center">
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>STOPLOSS AMOUNT:<Chip className='bg-danger' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={stopLossAmount} variant="contained" /></Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>TAKE PROFIT AMOUNT: <Chip className='bg-success' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={takeProfitAmount} variant="contained" /></Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>STRATEGY NAME: <Chip className='bg-success' sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={StrategyName} variant="contained" /></Typography>
            <Typography sx={{ ml: 1, fontSize: { xs: "12px", lg: "14px" } }} variant='h5'>TRADE STATUS: <Chip className={direction} sx={{ fontSize: { xs: "12px", lg: "14px" }, py: 2 }} label={tardeStatus} variant="contained" /></Typography>
          </Box>
        </Paper>
        <Box sx={{ mt: 3 }}>
          <Divider>
            <Chip sx={{ fontSize: { "lg": "20px" }, mt: 2 }} label="Pair/Trade Image" size="medium" />
          </Divider>
          <Typography sx={{ mt: 2 }}>{explanationOfEntry}</Typography>
        </Box>
      </Paper>
    </Backdrop>
  );
}