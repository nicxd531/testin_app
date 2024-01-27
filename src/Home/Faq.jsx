import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import data1 from "./data1.json"
import Accodion from './Accodion';

function Faq() {
  // main faq component 
  // const for holfing accordion 
    const faq = data1.map((data,index )=>{
        return (<Accodion key={data.heading} data={data} index={index}/>)
    })
  return (
    <section className='d-flex flex-column justify-content-center align-items-center faq'>
        <h1 className='text-center'>FAQ</h1>
        <Accordion defaultActiveKey="0" className='p-2 mb-5 w-sm-100 faq-accordion'>
            {faq}
        </Accordion>

    </section>
  )
}

export default Faq