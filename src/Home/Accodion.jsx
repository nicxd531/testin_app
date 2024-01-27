import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import DotIndicator from '../components/DotIndicator';

function Accodion({data, index}) {
  // main accordion component 
  // distructuring of data 
    const {heading, body,status} = data

  return (
    <Accordion.Item eventKey={index}className='faq-according-item' >
        <Accordion.Header>{heading} <DotIndicator data={status}/></Accordion.Header>
        <Accordion.Body className='text-justify'>
            {body}
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default Accodion