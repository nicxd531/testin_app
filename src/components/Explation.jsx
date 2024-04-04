import React from 'react'
import ExplanationCard from './ExplanationCard'
import { Typography } from '@mui/material'

function Explation({data,usage}) {
  return (
    <section className='explanation w-100  mt-5'>
            <hr className='w-100 Sbg-warning '/>
        <div className='px-3'>
            <Typography sx={{fontSize:{xs:"1.5rem",lg:"3rem"},fontWeight:"bold"}} className='fs-5 fw-bold'>USAGE:</Typography>
            <Typography  sx={{fontSize:{xs:"0.9rem",lg:"1.2rem"}}} className='text-justify'>{usage}</Typography>
        </div>
        <div className='mt-5 container'>
            <Typography sx={{fontSize:{xs:"1.5rem",lg:"2.5rem"},fontWeight:"bold"}} >Code Explanation</Typography>
            <div className=' mt-5 row row-cols-lg-3'>
               {data?.map((data)=>{
                return <ExplanationCard  data={data}/>
               }) }
            </div>
        </div>
    </section>
  )
}

export default Explation