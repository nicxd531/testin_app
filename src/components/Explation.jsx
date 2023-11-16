import React from 'react'
import ExplanationCard from './ExplanationCard'

function Explation({data,useage}) {
  return (
    <section className='explanation w-100  mt-5'>
            <hr className='w-100 Sbg-warning '/>
        <div className='px-3'>
            <header className='fs-5 fw-bold'>USAGE:</header>
            <p className='text-justify'>{useage}</p>
        </div>
        <div className='mt-5 container'>
            <h1>Code Explanation</h1>
            <div className=' mt-5 row row-cols-lg-3'>
               {data.map((data)=>{
                return <ExplanationCard  data={data}/>
               }) }
            </div>
        </div>
    </section>
  )
}

export default Explation