import { Typography ,Box, Chip} from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'


function LotSizeResults({risk,result,pair,pips}) {
  // compoonent for getting calculation results 
  return (
    <Box sx={{mb:5,mt:3}}>
      <Box className="d-flex">
        <Typography sx={{mr:2,fontSize:"20px"}}>Reccomended Lot Size : </Typography>
       { result && <motion.p className='fs-4 text-success'   initial={{opacity :"0"}} animate={{opacity : "1"}} transition={{delay:0.3, type:"spring",stiffness:120}}>{result}</motion.p>}
      </Box>
      <Box className="d-flex">
        <Typography sx={{mr:2,fontSize:"20px"}}>RISK :</Typography>
        { risk && <motion.p className='fs-4 text-danger'   initial={{opacity :"0"}} animate={{opacity : "1"}} transition={{delay:0.3, type:"spring",stiffness:120}}>$ {risk}</motion.p>}
      </Box>
      <Box className="d-flex">
        <Typography sx={{mr:2,fontSize:"20px"}}>PIPS :</Typography>
        { pips && <motion.p className='fs-4 text-info'   initial={{opacity :"0"}} animate={{opacity : "1"}} transition={{delay:0.3, type:"spring",stiffness:120}}>{pips}</motion.p>}
      </Box>
      <Box className="d-flex">
        <Typography sx={{mr:2,fontSize:"20px"}}> PAIRS :</Typography>
      { pair && <motion.p className='fs-4 text-primary'   initial={{opacity :"0"}} animate={{opacity : "1"}} transition={{delay:0.3, type:"spring",stiffness:120}}>{pair}</motion.p>}
      </Box>
      <Box sx={{mt:5}}>
        <Typography variant='h5' sx={{display:"inline"}}>Note :</Typography><Chip  label="WARNING" className='ms-3 bg-danger'/>
        <ol>
          <li className='mt-3'> the calculation is based on my personal formular</li>
          <li className='mt-3'> the left pips value indicator on trading view can be used as pips value</li>
        </ol>
      </Box>
    </Box>
  )
}

export default LotSizeResults